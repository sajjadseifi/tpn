import React from 'react'
import logo from '@src/assets/images/icons/tpn-logo.png'
import { classes } from '.'
import { Link } from 'react-router-dom'
export const LogoHomeNavigation = () => (
  <Link to="/" className={classes.LogoNavBox}>
    <img className={classes.LogoImg} src={logo} alt="" />
    <h3 className={classes.LogoTitle}>توان پردازش نگار</h3>
  </Link>
)
