import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { classes } from '.'

export interface NavItemHomeNavigationProps {
  route: string
  title: string
  exact?: boolean
}
export const NavItemHomeNavigation: FC<NavItemHomeNavigationProps> = ({
  route: to,
  title,
  exact
}) => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        {...{ to, exact }}
        className={classes.NavLink}
        activeClassName={classes.NavLinkActive}
      >
        {title}
      </NavLink>
    </li>
  )
}
