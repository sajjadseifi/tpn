import React, { FC } from 'react'
import classes from './components.module.css'
import { UserLogged } from '@src/types/user.type'

interface ProfileAdmin extends UserLogged {}

export const ProfileAdmin: FC<ProfileAdmin> = ({ firstname, lastname, picture }) => {
  return (
    <div className={classes.ProfileAdmin}>
      <div className={classes.ContentProfile}>
        <img className={classes.ProfileImage} src={picture} alt="عکس کاربر" />
        <div className={classes.ProfileFullname}>
          <span className={classes.Fname}>{firstname}</span>
          <span className={classes.Lname}>{lastname}</span>
        </div>
      </div>
    </div>
  )
}
