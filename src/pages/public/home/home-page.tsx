import React from 'react'
import { classes } from '.'
import homePagePic from '@src/assets/images/static/home-page-2.svg'
import { HomeNavigation } from '@src/components/navigation'
export const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <HomeNavigation />
      <section>
        <div>...</div>
        <div className={classes.HomePicContainer}>
          <img className={classes.HomePic} src={homePagePic} alt="" />
        </div>
      </section>
    </div>
  )
}
