import React, { FC } from 'react'
import { IoWomanSharp } from 'react-icons/io5'
import { IconBaseProps, IconType } from 'react-icons/lib'
import { updateObject } from '@src/utils/utils'
import { StatusType } from '.'

interface DialogIconProps {
  icon?: IconType
  iconProps?: IconBaseProps
  status?: StatusType
}

export const DialogIcon: FC<DialogIconProps> = ({ icon, iconProps, status }) => {
  let Icon = icon
  let props = iconProps

  const selectIconWithStatus = () => {
    props = updateObject(props, { size: 30 })

    switch (status) {
      case 'Default':
        Icon = IoWomanSharp
        return
      case 'Error':
        Icon = IoWomanSharp
        return
      case 'Success':
        Icon = IoWomanSharp
        return
      case 'Info':
        Icon = IoWomanSharp
        return
    }
  }

  if (!Icon) selectIconWithStatus()

  if (Icon) return <Icon {...props} />

  return <></>
}
