import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'
import classes from './components.module.css'

export interface ItemProps {
  id: number
  title: string
  icon: IconType
  select?: boolean
}
export interface Props extends ItemProps {
  onPress?: () => void
}
export const Item: FC<Props> = ({ icon: Icon, title, onPress, select }) => {
  return (
    <li onClick={onPress} className={[classes.MenuItem, select ? classes.Select : ''].join(' ')}>
      <div className={classes.ItemTitle}>{title}</div>
      <div className={classes.ItemIcon}>
        <Icon />
      </div>
    </li>
  )
}
