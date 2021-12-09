import React from 'react'
import { ProggresItem, ProggresItemProps } from '.'
import classes from './progress.module.css'
export interface ProggresListsProps {
  items: ProggresItemProps[]
}

export const ProggresLists = ({ items }: ProggresListsProps) => (
  <ul className={classes.ProggresLists}>
    {items.map((item, key) => (
      <ProggresItem {...{ key, ...item }} />
    ))}
  </ul>
)
