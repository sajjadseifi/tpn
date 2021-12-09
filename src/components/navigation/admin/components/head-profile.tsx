import { UserLogged } from '@src/types/user.type'
import React, { FC } from 'react'
import classes from './components.module.css'

export const HeadProfile: FC<UserLogged> = ({
  username,
  picture,
  displayRole
}) => {
  return (
    <div className={classes.HeadProfile}>
      <div className={classes.Pic}>
        <img src={picture} alt="" />
      </div>
      <div className={classes.Captions}>
        <span className={classes.Uname}>{username}</span>
        <span className={classes.Roledisplay}>{displayRole}</span>
      </div>
    </div>
  )
}
