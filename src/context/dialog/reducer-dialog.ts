import { ActionType, DialogStateProps, actionTypes } from '.'
import { updateObject } from '@src/utils/utils'

const initialState: DialogStateProps = {
  title: 'عنوان دیالوگ'
}

export const dialogReducer = (state: DialogStateProps = initialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.DIALOG_INIT:
      return action.payload as DialogStateProps
    case actionTypes.DIALOG_CLOSE:
      return updateObject(state, { open: false })
    case actionTypes.DIALOG_OPEN:
      return updateObject(state, { open: true })
    default:
      return state
  }
}
