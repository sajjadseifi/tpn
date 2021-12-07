import React, { FC, useEffect, useState } from 'react'
import classes from './backdrop.module.css'
interface BackropProps {
  bg?: string
  justifyContent?: string
  alignItems?: string
  children?: React.ReactNode
  open?: boolean
  closeable?: boolean
  onClosed?: () => void
}

export const Backrop: FC<BackropProps> = ({ open, onClosed, closeable, children, ...style }) => {
  const [isOpen, setOpen] = useState(open)

  useEffect(() => {
    setOpen(open)
  }, [open])

  const onClose = () => {
    if (closeable) setOpen(false)
    else onClosed && onClosed()
  }

  return (
    <div className={classes.Container} style={style}>
      <div
        onClick={onClose}
        className={`
        ${classes.BackDrop}
        ${isOpen ? classes.Open : classes.Close}
      `}
      ></div>
      <div className={classes.ContianerChild}>{children}</div>
    </div>
  )
}
