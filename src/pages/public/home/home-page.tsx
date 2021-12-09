import React from 'react'
import { classes } from '.'
import homePagePic from '@src/assets/images/static/home-page-2.svg'
import { HomeNavigation } from '@src/components/navigation'
import { PresentTpn } from './components'
export const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <HomeNavigation />
      <section>
        <PresentTpn />
        <div className={classes.HomePicContainer}>
          <img className={classes.HomePic} src={homePagePic} alt="" />
        </div>
      </section>
    </div>
  )
}
