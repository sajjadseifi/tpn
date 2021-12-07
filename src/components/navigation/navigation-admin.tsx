import React from 'react'
import classes from './navigation.module.css'
import logo from '@src/assets/images/icons/tpn-logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { BLACK, WHITE } from '@src/constants/colors'
import { HeadProfile } from './components'
import { user } from '@src/constants/dumy-data'
export const NavigationAdmin = () => {
  return (
    <div className={classes.Nav}>
      <div className={classes.IconMenu}>
        <HiMenuAlt3 size={26} className={classes.Icon} color={BLACK} />
      </div>
      <div className={classes.Content}>
        <HeadProfile {...user} />
      </div>
      <a href="/" className={classes.LogoBox}>
        <img className={classes.Logo} src={logo} alt="" />
      </a>
    </div>
  )
}
