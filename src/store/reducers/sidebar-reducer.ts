import { FCR } from '@src/types/types'
import {} from '../types'
import { SideBarAction } from '../types/sidebar-type'

export interface ISideBarState {
  expanded: boolean
  static: boolean
}

const initialState: ISideBarState = {
  expanded: false,
  static: false
}

const authReducer: FCR<ISideBarState, SideBarAction> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
