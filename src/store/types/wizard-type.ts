import { FormType } from '@src/components/form-wizard'
import { actionTypes } from '../actions'
import { IWizard } from '../reducers/wizard-redcuer'

export interface InitWizardAction {
  type: typeof actionTypes.WIZARD_INIT
  payload: IWizard[]
}
export interface ClearWizardAction {
  type: typeof actionTypes.WIZARD_CLEAR
}
export interface NextWizardAction {
  type: typeof actionTypes.WIZARD_NEXT
}
export interface PrevWizardAction {
  type: typeof actionTypes.WIZARD_PREV
}
export interface SubmitedWizardAction {
  type: typeof actionTypes.WIZARD_SUBMITED
}

export interface LoadingStartWizardAction {
  type: typeof actionTypes.WIZARD_LOADING_START
}
export interface LoadingFinishedWizardAction {
  type: typeof actionTypes.WIZARD_LOADING_FINISHED
}

export interface UpdteFormWizardAction {
  type: typeof actionTypes.WIZARD_UPDATE_FORM_VALUE
  payload: FormType
}
export interface ClearFormWizardAction {
  type: typeof actionTypes.WIZARD_CLEAR_FORM_VALUE
}

export interface GotoEnteredFormWizardAction {
  type: typeof actionTypes.WIZARD_GOTO_ENTERED
  payload: {
    enterdLevel: number
  }
}

export type WizardAction =
  | ClearFormWizardAction
  | ClearWizardAction
  | InitWizardAction
  | LoadingStartWizardAction
  | LoadingFinishedWizardAction
  | NextWizardAction
  | PrevWizardAction
  | SubmitedWizardAction
  | UpdteFormWizardAction
  | GotoEnteredFormWizardAction
// export type AuthThunk = AppThunkAction<WizardAction>
