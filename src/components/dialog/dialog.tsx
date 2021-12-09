import React, { FC, useEffect, useState } from 'react'
import {
  IoAddCircle,
  IoAccessibilitySharp,
  IoReorderFour
} from 'react-icons/io5'
import { IconBaseProps, IconType } from 'react-icons/lib'
import { Backrop } from '../backdrop/backrop'
import { IconButton } from '../ui/icon-button'
import classes from './dialog.module.css'
import * as colors from '@src/constants/colors'
import { DialogIcon, StatusType, VisibilityType } from '.'
import { useDialogDispatch, useDialogSelector } from './context/hook-dialog'
import { actionTypes } from './context'

export interface DialogPorps {
  icon?: IconType
  iconProps?: IconBaseProps
  title?: string
  onOk?: () => void
  onCancel?: () => void
  status?: StatusType
  children?: React.ReactNode
  visibility?: VisibilityType
}
const colorStatus = {
  Info: colors.CORNFLOWER_BLUE,
  Error: colors.BISQUE,
  Success: colors.CORNFLOWER_GREEN,
  Default: colors.GRAYWHITE
}
const colorStatusDark = {
  Info: colors.BLUE,
  Error: colors.RED,
  Success: colors.GREEN,
  Default: colors.BLACK
}
export const Dialog: FC<DialogPorps> = ({}) => {
  const {
    icon,
    title,
    visibility,
    status,
    children,
    iconProps,
    onOk,
    onCancel
  }: DialogPorps = useDialogSelector()
  const dispatch = useDialogDispatch()
  let bgTop = colorStatus.Default
  if (status) bgTop = colorStatus[status]

  const onAction = (fc: (() => void) | undefined) => {
    removeOnDom()
    fc && fc()
  }

  const removeOnDom = () => dispatch(actionTypes.closeDialog())

  const color = (status && colorStatusDark[status]) || colors.BLACK

  if (iconProps && !iconProps.color) iconProps.color = color

  return (
    <Backrop onClosed={removeOnDom} visibility={visibility}>
      <div className={classes.Dialog}>
        <div style={{ background: bgTop, color }} className={classes.Top}>
          <h3 className={classes.Title}>{title}</h3>
          <DialogIcon {...{ icon, iconProps, status }} />
        </div>
        <div className={classes.Body}>{children}</div>
        <div className={classes.ButtonConaienr}>
          <IconButton
            onClick={() => onAction(onOk)}
            outline
            color={colors.GREEN}
            icon={IoAddCircle}
            title="تایید"
          />
          <IconButton
            onClick={() => onAction(onCancel)}
            color={colors.RED}
            icon={IoAccessibilitySharp}
            title="لغو"
          />
        </div>
      </div>
    </Backrop>
  )
}

Dialog.defaultProps = {
  onOk: () => {},
  onCancel: () => {},
  status: 'Default',
  visibility: 'Start'
}
