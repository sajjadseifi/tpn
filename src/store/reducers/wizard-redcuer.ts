import { FormContnetProps } from '@src/components/form-wizard'
import { FCR, IDictionary } from '@src/types/types'
import { WizardAction } from '../types/wizard-type'

interface IWizard extends FormContnetProps {
  render: ({ form }: { form: IDictionary<any> }) => JSX.Element
}

export interface WizardState {
  wizards: IWizard[]
  level: number
  isLoading?: boolean
  isError?: boolean
  errors: Object
  visitedLevel: number
}

const initialState: WizardState = {
  wizards: [],
  level: 0,
  errors: {},
  visitedLevel: 0
}

const authReducer: FCR<WizardState, WizardAction> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
