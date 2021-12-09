import React from 'react'
import logo from '@src/assets/images/icons/tpn-logo.png'
import { classes } from '.'

export const LogoHomeNavigation = () => (
  <div className={classes.LogoNavBox}>
    <img className={classes.LogoImg} src={logo} alt="" />
    <h2 className={classes.LogoTitle}>توان پردازش نگار</h2>
  </div>
)
