import { actionCreator } from '@src/utils/utils'
import { DialogStateProps } from '.'

export const DIALOG_OPEN = 'DIALOG_OPEN'
export const DIALOG_CLOSE = 'DIALOG_CLOSE'
export const DIALOG_INIT = 'DIALOG_INIT'

export const initDialog = (values: DialogStateProps) => actionCreator(DIALOG_CLOSE, { payload: values })
export const openDialog = () => actionCreator(DIALOG_OPEN, {})
export const closeDialog = () => actionCreator(DIALOG_CLOSE, {})
