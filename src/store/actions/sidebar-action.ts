import { actionTypes } from '.'
import { sidebarTypes } from '../types'
import { createReducerProps } from '../types/action-types'

export const toggleSidebar = () =>
  createReducerProps(
    actionTypes.SIDEBAR_TOGGLE
  ) as sidebarTypes.ToggleSideBarAction

export const showSidebar = () =>
  createReducerProps(actionTypes.SIDEBAR_SHOW) as sidebarTypes.ShowSideBarAction

export const hiddenSidebar = () =>
  createReducerProps(
    actionTypes.SIDEBAR_HIDDEN
  ) as sidebarTypes.HiddSideBarAction

export const ghostSidebar = () =>
  createReducerProps(
    actionTypes.SIDEBAR_GHOST
  ) as sidebarTypes.GhostSideBarAction

export const staticSidebar = () =>
  createReducerProps(
    actionTypes.SIDEBAR_STATIC
  ) as sidebarTypes.StaticSideBarAction
