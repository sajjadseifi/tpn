import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export interface RootState {}

export const reducers = {}

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => RootState): void
}

export default createStore(combineReducers<RootState>(reducers), applyMiddleware(thunk))
