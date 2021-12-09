import { DialogPorps } from '@src/components/dialog'
import React from 'react'
import { actionTypes } from '.'

export interface DialogStateProps extends DialogPorps {
  children?: React.ReactNode
}
export type ActionType = {
  type: keyof typeof actionTypes
  payload?: any
}
