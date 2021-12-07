import React, { FC, useState } from 'react'
import { IoAddCircle, IoAccessibilitySharp } from 'react-icons/io5'
import { IconBaseProps, IconType } from 'react-icons/lib'
import { Backrop } from '../backdrop/backrop'
import { IconButton } from '../ui/icon-button'
import classes from './dialog.module.css'
import * as colors from '@src/constants/colors'

type StatusType = 'Info' | 'Error' | 'Success' | 'Default'

export interface DialogPorps {
  icon?: IconType
  iconProps?: IconBaseProps
  title: string
  onOk?: () => void
  onCancel?: () => void
  status?: StatusType
  children?: React.ReactNode
}
const colorStatus = {
  Info: colors.CORNFLOWER_BLUE,
  Error: colors.BISQUE,
  Success: colors.CORNFLOWER_GREEN,
  Default: colors.GRAYWHITE
}
export const Dialog: FC<DialogPorps> = ({ onCancel, onOk, children, icon: Icon, status, iconProps, title }) => {
  const [open, setOpen] = useState(true)
  const [rm, setRm] = useState(false)
  let bgTop = colorStatus.Default
  if (status) bgTop = colorStatus[status]

  const onAction = (act: boolean) => {
    if (act) onOk && onOk()
    else onCancel && onCancel()
    setOpen(false)
  }
  const removeOnDom = () => {
    setOpen(false)
    setTimeout(() => setRm(true), 1000)
  }
  if (rm) return null
  return (
    <Backrop onClosed={removeOnDom} open={open}>
      <div className={classes.Dialog}>
        <div style={{ background: bgTop }} className={classes.Top}>
          <h3 className={classes.Title}>{title}</h3>
          {Icon && <Icon {...iconProps} className={classes.Icon} />}
        </div>
        <div className={classes.Body}>{children}</div>
        <div className={classes.ButtonConaienr}>
          <IconButton onClick={() => onAction(true)} outline color={colors.GREEN} icon={IoAddCircle} title="تایید" />
          <IconButton onClick={() => onAction(false)} color={colors.RED} icon={IoAccessibilitySharp} title="لغو" />
        </div>
      </div>
    </Backrop>
  )
}

Dialog.defaultProps = {
  onOk: () => {},
  onCancel: () => {},
  status: 'Default'
}
