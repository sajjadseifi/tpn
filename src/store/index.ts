import { createStore, combineReducers, applyMiddleware } from 'redux'
import sidebarReducer, { ISideBarState } from './reducers/sidebar-reducer'
import thunk from 'redux-thunk'

export interface RootState {
  sidebar: ISideBarState
}

export const reducers = {
  sidebar: sidebarReducer
}

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => RootState): void
}

export default createStore(combineReducers<RootState>(reducers), applyMiddleware(thunk))
