import * as React from 'react'
import { useDispatch, useSelector } from '@src/hook'
import { DialogStateContext, DialogProvider } from '.'

export const useDialog = () => {
  const context = React.useContext(DialogStateContext)
  if (context === undefined)
    throw new Error('useDialog must be used within a DialogProvider')

  return context
}
export const useDialogDispatch = () =>
  useDispatch(DialogStateContext, 'useDialogDispatch', DialogProvider.name)

export const useDialogSelector = (cb = (state: any) => state) =>
  useSelector(DialogStateContext, 'useDialogSelector', DialogProvider.name, cb)
