import { DialogPorps } from '@src/components/dialog'
import { actionCreator } from '@src/utils/utils'

export const DIALOG_OPEN = 'DIALOG_OPEN'
export const DIALOG_CLOSE = 'DIALOG_CLOSE'
export const DIALOG_INIT = 'DIALOG_INIT'
export const DIALOG_CLEAR = 'DIALOG_INIT'

export const initDialog = (values: DialogPorps) =>
  actionCreator(DIALOG_INIT, values)
export const clearDialog = () => actionCreator(DIALOG_CLEAR, {})
export const openDialog = () => actionCreator(DIALOG_OPEN, {})
export const closeDialog = () => actionCreator(DIALOG_CLOSE, {})
