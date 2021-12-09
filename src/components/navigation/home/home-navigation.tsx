import React from 'react'
import { classes } from '.'
import { LogoHomeNavigation, NavListHomeNavigation } from './components'

const routes = [
  {
    title: 'خانه',
    route: '/',
    exact: true
  },
  {
    title: 'تماس با ما',
    route: '/contact-us'
  },
  {
    title: 'دمو',
    route: '/admin/form-wizard'
  }
]

export const HomeNavigation = () => {
  return (
    <nav className={classes.HomeNav}>
      <div className={classes.HomeNavLogo}>
        <LogoHomeNavigation />
      </div>
      <div className={classes.HomeNavMenu}>
        <NavListHomeNavigation {...{ routes }} />
      </div>
    </nav>
  )
}
