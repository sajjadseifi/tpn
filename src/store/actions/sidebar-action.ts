import { sidebarTypes } from '../types'
import { createReducerProps } from '../types/action-types'

export const toggleSidebar = () => createReducerProps(sidebarTypes.SIDEBAR_TOGGLE) as sidebarTypes.ToggleSideBarAction

export const showSidebar = () => createReducerProps(sidebarTypes.SIDEBAR_SHOW) as sidebarTypes.ShowSideBarAction

export const hiddenSidebar = () => createReducerProps(sidebarTypes.SIDEBAR_HIDDEN) as sidebarTypes.HiddSideBarAction

export const ghostSidebar = () => createReducerProps(sidebarTypes.SIDEBAR_GHOST) as sidebarTypes.GhostSideBarAction

export const staticSidebar = () => createReducerProps(sidebarTypes.SIDEBAR_STATIC) as sidebarTypes.StaticSideBarAction
