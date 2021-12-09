import React from 'react'
import { classes } from '.'
import './app-loading.scss'
import { SnipperKebrit } from './snipper-kebrit'
export const AppLoading = () => {
  return (
    <div className={classes.AppLoading}>
      <SnipperKebrit />
      <span className={classes.LoadingText}>...درحال بارگذاری</span>
    </div>
  )
}
