import { actionTypes } from '.'
import { createReducerProps } from '../types/action-types'
import { wizardTypes } from '../types'
import { IWizard } from '@src/components/form-wizard'

export const initWizard = (wizards: IWizard[]) =>
  createReducerProps(actionTypes.WIZARD_INIT, wizards) as wizardTypes.InitWizardAction

export const clearWizard = () => createReducerProps(actionTypes.WIZARD_CLEAR) as wizardTypes.ClearWizardAction

export const loadingStartWizard = () =>
  createReducerProps(actionTypes.WIZARD_LOADING_START) as wizardTypes.LoadingStartWizardAction

export const loadingFinishedWizard = () =>
  createReducerProps(actionTypes.WIZARD_LOADING_FINISHED) as wizardTypes.LoadingFinishedWizardAction

export const prevWizard = () => createReducerProps(actionTypes.WIZARD_PREV) as wizardTypes.PrevWizardAction

export const nextWizard = () => createReducerProps(actionTypes.WIZARD_NEXT) as wizardTypes.NextWizardAction

export const submitedWizard = () => createReducerProps(actionTypes.WIZARD_SUBMITED) as wizardTypes.SubmitedWizardAction

export const selectEnteredWizard = (enterdLevel: number) =>
  createReducerProps(actionTypes.WIZARD_GOTO_ENTERED, { enterdLevel }) as wizardTypes.GotoEnteredFormWizardAction

export const injectCode = (code: string) =>
  createReducerProps(actionTypes.WIZARD_GOTO_ENTERED, { code }) as wizardTypes.CodeFormWizardAction
