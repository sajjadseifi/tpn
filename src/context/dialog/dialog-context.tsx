import * as React from 'react'
import { Dialog } from '@src/components/dialog'
import { DialogStateProps, dialogReducer } from '.'
import { updateObject } from '@src/utils/utils'
const DialogStateContext = React.createContext({})

export const DialogProvider: React.FC<DialogStateProps> = ({ children, ...initialValues }) => {
  const [state, dispatch] = React.useReducer(dialogReducer, initialValues)

  const iconProps = updateObject({ size: 30 }, state.iconProps)

  return (
    <DialogStateContext.Provider value={{ state, dispatch }}>
      {children}
      <Dialog {...state} {...{ iconProps }} />
    </DialogStateContext.Provider>
  )
}
