import { ActionType, DialogStateProps, actionTypes } from '.'
import { updateObject } from '@src/utils/utils'

export const initialState: DialogStateProps = {
  title: '',
  visibility: 'Start'
}

export const dialogReducer = (state: DialogStateProps, action: ActionType) => {
  console.log(action, state)
  switch (action.type) {
    case actionTypes.DIALOG_INIT:
      const st = action.payload as DialogStateProps
      st.visibility = st.visibility ?? 'Start'
      return st
    case actionTypes.DIALOG_CLOSE:
      return updateObject(state, { visibility: 'Hidden' })
    case actionTypes.DIALOG_OPEN:
      return updateObject(state, { visibility: 'Show' })
    case actionTypes.DIALOG_CLEAR:
      return initialState
    default:
      return state
  }
}
