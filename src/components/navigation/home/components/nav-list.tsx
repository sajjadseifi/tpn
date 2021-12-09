import React, { FC } from 'react'
import { classes, NavItemHomeNavigation, NavItemHomeNavigationProps } from '.'

interface NavListHomeNavigationProps {
  routes: NavItemHomeNavigationProps[]
}
export const NavListHomeNavigation: FC<NavListHomeNavigationProps> = ({
  routes
}) => {
  return (
    <ul className={classes.NavList}>
      {routes.map((r, key) => (
        <NavItemHomeNavigation {...{ key, ...r }} />
      ))}
    </ul>
  )
}
