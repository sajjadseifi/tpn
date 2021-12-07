import { AppThunkAction } from '..'

export const SIDEBAR_HIDDEN = '[SIDEBAR_HIDDEN]'
export const SIDEBAR_TOGGLE = '[SIDEBAR_TOGGLE]'
export const SIDEBAR_SHOW = '[SIDEBAR_SHOW]'
export const SIDEBAR_GHOST = '[SIDEBAR_GHOST]'
export const SIDEBAR_STATIC = '[SIDEBAR_STATIC]'

export interface ShowSideBarAction {
  type: typeof SIDEBAR_SHOW
}

export interface HiddSideBarAction {
  type: typeof SIDEBAR_SHOW
}

export interface ToggleSideBarAction {
  type: typeof SIDEBAR_TOGGLE
}

export interface GhostSideBarAction {
  type: typeof SIDEBAR_GHOST
}
export interface StaticSideBarAction {
  type: typeof SIDEBAR_STATIC
}
export type SideBarAction = ShowSideBarAction

export type AuthThunk = AppThunkAction<SideBarAction>
