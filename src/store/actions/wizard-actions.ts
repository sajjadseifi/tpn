import { IWizard } from '../reducers/wizard-redcuer'
import { wizardTypes } from '../types'
import { createReducerProps } from '../types/action-types'

export const initWizard = (wizards: IWizard[]) =>
  createReducerProps(wizardTypes.WIZARD_INIT, wizards) as wizardTypes.InitWizardAction

export const clearWizard = () => createReducerProps(wizardTypes.WIZARD_CLEAR) as wizardTypes.ClearWizardAction

export const loadingStartWizard = () =>
  createReducerProps(wizardTypes.WIZARD_LOADING_START) as wizardTypes.LoadingStartWizardAction

export const loadingFinishedWizard = () =>
  createReducerProps(wizardTypes.WIZARD_LOADING_FINISHED) as wizardTypes.LoadingFinishedWizardAction

export const prevWizard = () => createReducerProps(wizardTypes.WIZARD_NEXT) as wizardTypes.PrevWizardAction

export const nextWizard = () => createReducerProps(wizardTypes.WIZARD_NEXT) as wizardTypes.NextWizardAction

export const submitedWizard = () => createReducerProps(wizardTypes.WIZARD_SUBMITED) as wizardTypes.SubmitedWizardAction
