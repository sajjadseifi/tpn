import React, { FC } from 'react'
import { ColorType, Partial } from '@src/types/types'
import { IconBaseProps, IconType } from 'react-icons/lib'
import classes from './progress.module.css'
export type ShapeType = 'Circle' | 'Squre' | 'Default'

export interface ProggresItemType {
  shapeType: ShapeType
  color: ColorType
  icon: IconType
  iconProps: IconBaseProps
  isCurrent: boolean
  isEntered: boolean
  clicked: () => void
}

export interface ProggresItemProps extends Partial<ProggresItemType> {}

export const ProggresItem: FC<ProggresItemProps> = ({
  color,
  isEntered,
  isCurrent,
  icon: Icon,
  iconProps,
  shapeType,
  clicked
}) => {
  const cls = [classes.ProgressItem]

  if (isEntered) cls.push(classes.Entered)

  if (isCurrent) cls.push(classes.Current)

  if (shapeType === 'Circle') cls.push(classes.Circle)
  return (
    <li onClick={clicked} className={cls.join(' ')}>
      <div></div>
      {Icon && <Icon {...iconProps} />}
    </li>
  )
}

ProggresItem.defaultProps = {
  color: 'CORNFLOWER_BLUE',
  shapeType: 'Circle'
}
