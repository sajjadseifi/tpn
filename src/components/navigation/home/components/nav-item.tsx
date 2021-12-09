import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { classes } from '.'

export interface NavItemHomeNavigationProps {
  route: string
  title: string
}
export const NavItemHomeNavigation: FC<NavItemHomeNavigationProps> = ({
  route: to,
  title
}) => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        {...{ title, to }}
        className={classes.NavLink}
        activeClassName={classes.NavLinkActive}
      />
    </li>
  )
}
