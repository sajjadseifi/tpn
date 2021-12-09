import { createStore, combineReducers, applyMiddleware } from 'redux'
import sidebarReducer, { ISideBarState } from './reducers/sidebar-reducer'
import wizardReducer, { WizardState } from './reducers/wizard-redcuer'
import thunk from 'redux-thunk'

export interface RootState {
  sidebar: ISideBarState
  wizard: WizardState
}

export const reducers = {
  sidebar: sidebarReducer,
  wizard: wizardReducer
}

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => RootState): void
}

export default createStore(
  combineReducers<RootState>(reducers),
  applyMiddleware(thunk)
)
