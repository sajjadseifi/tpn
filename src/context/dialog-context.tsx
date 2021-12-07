import * as React from 'react'
import { Dialog, DialogPorps } from '@src/components/dialog'
import { RED } from '@src/constants/colors'
import { BiErrorAlt } from 'react-icons/bi'

const DialogStateContext = React.createContext({})

const initialState: DialogPorps = {
  title: 'عنوان دیالوگ'
}

const dialogReducer = (state: any, action: any) => {
  return {}
}
export const DialogProvider: React.FC<DialogPorps> = ({ children, ...initialValues }) => {
  const [state, dispatch] = React.useReducer(dialogReducer, {
    ...initialState,
    ...initialValues
  }) as [DialogPorps, React.Dispatch<DialogPorps>]

  const value = { state, dispatch }
  const iconProps = { size: 30, ...value.state.iconProps }
  return (
    <DialogStateContext.Provider value={value}>
      {children}
      <Dialog {...value.state} {...{ iconProps }} />
    </DialogStateContext.Provider>
  )
}
