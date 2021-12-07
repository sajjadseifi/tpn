import { GREEN, RED } from '@src/constants/colors'
import React, { FC } from 'react'
import { IoAddCircle, IoAccessibilitySharp } from 'react-icons/io5'
import { IconBaseProps, IconType } from 'react-icons/lib'
import { Backrop } from '../backdrop/backrop'
import { IconButton } from '../ui/icon-button'
import classes from './dialog.module.css'

interface DialogPorps {
  icon?: IconType
  iconProps?: IconBaseProps
}

export const Dialog: FC<DialogPorps> = ({ icon: Icon, iconProps, children }) => {
  return (
    <Backrop open={true}>
      <div className={classes.Top}>
        <span className={classes.Title}></span>
        {Icon && <Icon {...iconProps} />}
      </div>
      <div className={classes.Body}>{children}</div>
      <div className={classes.ButtonConaienr}>
        <IconButton outline color={GREEN} icon={IoAddCircle} title="تایید" />
        <IconButton color={RED} icon={IoAccessibilitySharp} title="لغو" />
      </div>
    </Backrop>
  )
}
