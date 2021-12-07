import { FCR } from '@src/types/types'
import { updateObject } from '@src/utils/utils'
import { sidebarTypes } from '../types'
import { SideBarAction } from '../types/sidebar-type'

export interface ISideBarState {
  expanded: boolean
  ghost: boolean
}

const initialState: ISideBarState = {
  expanded: false,
  ghost: true
}

const authReducer: FCR<ISideBarState, SideBarAction> = (state = initialState, action) => {
  switch (action.type) {
    case sidebarTypes.SIDEBAR_SHOW:
      return updateObject(state, { expanded: true })
    case sidebarTypes.SIDEBAR_HIDDEN:
      return updateObject(state, { expanded: false })
    case sidebarTypes.SIDEBAR_TOGGLE:
      return updateObject(state, { expanded: !state.expanded })
    case sidebarTypes.SIDEBAR_STATIC:
      return updateObject(state, { ghost: false })
    case sidebarTypes.SIDEBAR_GHOST:
      return updateObject(state, { ghost: true })
    default:
      return state
  }
}

export default authReducer
