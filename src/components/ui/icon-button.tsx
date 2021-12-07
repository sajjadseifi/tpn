import { WHITE } from '@src/constants/colors'
import React, { FC } from 'react'
import { IconBaseProps, IconType } from 'react-icons/lib'

interface IconButtonProps {
  title?: string
  icon?: IconType
  iconProps?: IconBaseProps
  revers?: boolean
  color?: string
  outline?: boolean
  style?: any
}
export const IconButton: FC<IconButtonProps> = (props) => {
  const { icon: Icon, title, revers, iconProps, color, outline, style, ...popo } = props

  return (
    <div
      className="ic"
      style={{
        background: outline ? '' : color,
        color: outline ? color : WHITE,
        display: 'flex',
        flexDirection: revers ? 'row-reverse' : 'row',
        ...style
      }}
      {...popo}
    >
      {Icon && <Icon className="ic-icon" {...iconProps} />}
      <span className="ic-title">{title}</span>
    </div>
  )
}
