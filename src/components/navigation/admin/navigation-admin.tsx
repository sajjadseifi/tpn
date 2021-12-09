import React from 'react'
import classes from './navigation.module.css'
import logo from '@src/assets/images/icons/tpn-logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { BLACK } from '@src/constants/colors'
import { HeadProfile } from './components'
import { user } from '@src/constants/dumy-data'
import { useDispatch } from 'react-redux'
import { sidebarActions } from '@src/store/actions'
import { useDialogDispatch } from '@src/components/dialog/context/hook-dialog'
import { actionTypes } from '@src/components/dialog/context'

export const AdminNavigation = () => {
  const dispatchDialog = useDialogDispatch()
  const dispatch = useDispatch()
  const onMenuClick = () => {
    dispatchDialog(
      actionTypes.initDialog({
        title: 'خطا',
        visibility: 'Show',
        children: <>شما فرم فلانی را پر نکردید لطفا پر کینید</>,
        // icon: IoWomanSharp,
        status: 'Error'
      })
    )
  }
  const onShowSidebar = () => dispatch(sidebarActions.showSidebar())

  return (
    <div className={classes.Nav}>
      <div onClick={onShowSidebar} className={classes.IconMenu}>
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
