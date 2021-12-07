import { FCR } from '@src/types/types'
import { WizardAction } from '../types/wizard-type'

interface IWizard {
  title: string
  render: (props: any) => JSX.Element
}

export interface WizardState {
  wizards: IWizard[]
  level: number
  isLoading?: boolean
  isError?: boolean
  errors: Object
}

const initialState: WizardState = {
  wizards: [],
  level: 0,
  errors: {}
}

const authReducer: FCR<WizardState, WizardAction> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
