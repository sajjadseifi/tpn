import React from 'react'
import classes from './navigation.module.css'
import logo from '@src/assets/images/icons/tpn-logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { BLACK, WHITE } from '@src/constants/colors'
import { HeadProfile } from './components'
import { user } from '@src/constants/dumy-data'
import { actionTypes } from '../dialog/context'
import { useDialogDispatch } from '../dialog/context/hook-dialog'
export const NavigationAdmin = () => {
  const dispatch = useDialogDispatch()
  const onMenuClick = () => {
    dispatch(
      actionTypes.initDialog({
        title: 'خطا',
        visibility: 'Show',
        children: <>شما فرم فلانی را پر نکردید لطفا پر کینید</>,
        // icon: IoWomanSharp,
        status: 'Error'
      })
    )
    // dispatch(actionTypes.openDialog())
  }
  return (
    <div className={classes.Nav}>
      <div onClick={onMenuClick} className={classes.IconMenu}>
        <HiMenuAlt3 size={26} className={classes.Icon} color={BLACK} />
      </div>
      <div className={classes.Content}>
        <HeadProfile {...user} />
      </div>
      <a className={classes.LogoBox}>
        <img className={classes.Logo} src={logo} alt="" />
      </a>
    </div>
  )
}
