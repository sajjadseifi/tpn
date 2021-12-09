import React, { FC } from 'react'
import { WHITE } from '@src/constants/colors'
import { IconBaseProps, IconType } from 'react-icons/lib'
import { ImSpinner2 } from 'react-icons/im'
interface IconButtonProps {
  title?: string
  icon?: IconType
  iconProps?: IconBaseProps
  revers?: boolean
  color?: string
  outline?: boolean
  style?: any
  loading?: boolean
  loader?: React.FC<any>
  onClick?: () => void
}
export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    icon: Icon,
    style: styles,
    loader,
    title,
    revers,
    iconProps,
    color,
    onClick,
    outline,
    loading,
    ...popo
  } = props
  let Loader = loader ? loader : ImSpinner2
  const style = {
    background: outline ? '' : color,
    color: outline ? color : WHITE,
    flexDirection: revers ? 'row-reverse' : 'row',
    ...styles
  }
  return (
    <div className={`ic ${loading ? 'loader' : ''}`} {...{ onClick, style, ...popo }}>
      {Icon && <Icon className="ic-icon" {...iconProps} />}
      <span className="ic-title">{title}</span>
      <div className="loading">
        <Loader color={WHITE} size={20} />
      </div>
    </div>
  )
}
IconButton.defaultProps = {
  onClick: () => {}
}
