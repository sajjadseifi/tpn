import React from 'react'
import { ProfileAdmin, MenuItems } from './components'
import { user } from '@src/constants/dumy-data'
import { adminSidebarItems } from '@src/config/sidebar.config'
import classes from './sidebar-admin.module.css'
import { AiFillSetting as SettingIcon } from 'react-icons/ai'
import { IoClose as CloseIcon } from 'react-icons/io5'
export const SidebarAdmin = () => {
  return (
    <div className={classes.Slider}>
      <div className={classes.TopSlide}>
        <CloseIcon size={22} className={classes.Icon} onClick={() => console.log('close')} />
        <SettingIcon size={22} className={classes.Icon} onClick={() => console.log('setting')} />
      </div>
      <ProfileAdmin {...user} />
      <MenuItems items={adminSidebarItems} />
    </div>
  )
}
