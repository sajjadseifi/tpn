import React, { FC, useEffect, useState } from 'react'
import { VisibilityType } from '../dialog'
import { actionTypes } from '../dialog/context'
import { useDialogDispatch } from '../dialog/context/hook-dialog'
import classes from './backdrop.module.css'
interface BackropProps {
  bg?: string
  justifyContent?: string
  alignItems?: string
  children?: React.ReactNode
  visibility?: VisibilityType
  closeable?: boolean
  onClosed?: () => void
}

export const Backrop: FC<BackropProps> = ({
  visibility,
  onClosed,
  closeable,
  children,
  ...style
}) => {
  const dispatch = useDialogDispatch()

  const onClose = () => {
    if (closeable) dispatch(actionTypes.closeDialog())
    else onClosed && onClosed()
  }

  const activation = visibility && classes[visibility]

  return (
    <div className={`${classes.Container} ${activation}`} style={style}>
      <div onClick={onClose} className={`${classes.BackDrop}`}></div>
      <div className={`${classes.ContianerChild}`}>{children}</div>
    </div>
  )
}
