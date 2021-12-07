import { AppThunkAction } from '..'

export const WIZARD_NEXT = '[WIZARD_NEXT]'
export const WIZARD_PREV = '[WIZARD_PREV]'
export const WIZARD_SUBMITED = '[WIZARD_SUBMITED]'
export const WIZARD_LOADING_START = '[WIZARD_LOADING_START]'
export const WIZARD_LOADING_FINISHED = '[WIZARD_LOADING_FINISHED]'

export interface NextWizardAction {
  type: typeof WIZARD_NEXT
}
export interface PrevWizardAction {
  type: typeof WIZARD_NEXT
}
export interface SubmitedWizardAction {
  type: typeof WIZARD_NEXT
}
export type WizardAction = NextWizardAction | PrevWizardAction | SubmitedWizardAction

export type AuthThunk = AppThunkAction<WizardAction>
