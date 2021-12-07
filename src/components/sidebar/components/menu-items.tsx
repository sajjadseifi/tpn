import React, { FC } from 'react'
import { ItemProps, Item } from '.'
import classes from './components.module.css'

interface MenuItemsProps {
  items: ItemProps[]
}

export const MenuItems: FC<MenuItemsProps> = ({ items }) => {
  return (
    <ul className={classes.Menu}>
      {items.map((it) => (
        <Item {...it} onPress={() => console.log(it.id)} />
      ))}
    </ul>
  )
}
