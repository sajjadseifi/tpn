import * as React from 'react'
import { Dialog } from '@src/components/dialog'
import { DialogStateProps, dialogReducer } from '.'
import { initialState } from './reducer-dialog'
import { updateObject } from '@src/utils/utils'

export const DialogStateContext = React.createContext({})

export const DialogProvider: React.FC<DialogStateProps> = ({
  children,
  ...initialValues
}) => {
  const [state, dispatch] = React.useReducer(
    dialogReducer,
    updateObject(initialState, initialValues)
  )
  const value = { state, dispatch }
  return (
    <DialogStateContext.Provider value={value}>
      {children}
      <Dialog />
    </DialogStateContext.Provider>
  )
}
