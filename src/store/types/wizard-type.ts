import { AppThunkAction } from '..'
import { IWizard } from '../reducers/wizard-redcuer'

export const WIZARD_INIT = '[WIZARD_INIT]'
export const WIZARD_CLEAR = '[WIZARD_CLEAR]'
export const WIZARD_NEXT = '[WIZARD_NEXT]'
export const WIZARD_PREV = '[WIZARD_PREV]'
export const WIZARD_SUBMITED = '[WIZARD_SUBMITED]'
export const WIZARD_LOADING_START = '[WIZARD_LOADING_START]'
export const WIZARD_LOADING_FINISHED = '[WIZARD_LOADING_FINISHED]'

export interface InitWizardAction {
  type: typeof WIZARD_INIT
  payload: IWizard[]
}
export interface ClearWizardAction {
  type: typeof WIZARD_CLEAR
}
export interface NextWizardAction {
  type: typeof WIZARD_NEXT
}
export interface PrevWizardAction {
  type: typeof WIZARD_PREV
}
export interface SubmitedWizardAction {
  type: typeof WIZARD_SUBMITED
}

export interface LoadingStartWizardAction {
  type: typeof WIZARD_LOADING_START
}
export interface LoadingFinishedWizardAction {
  type: typeof WIZARD_LOADING_FINISHED
}

export type WizardAction =
  | InitWizardAction
  | ClearWizardAction
  | NextWizardAction
  | PrevWizardAction
  | SubmitedWizardAction
  | LoadingStartWizardAction
  | LoadingFinishedWizardAction

export type AuthThunk = AppThunkAction<WizardAction>
