import { FormContnetProps } from '@src/components/form-wizard'
import { FCR, IDictionary } from '@src/types/types'
import { updateObject } from '@src/utils/utils'
import { wizardTypes } from '../types'
import { WizardAction } from '../types/wizard-type'

export interface IWizard extends FormContnetProps {
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
const init = (state: WizardState, wizards: IWizard[]) => updateObject(state, { wizards })

const goPrev = (state: WizardState) => {
  if (state.level <= 0) return state

  return updateObject(state, { level: state.level - 1 })
}

const goNext = (state: WizardState) => {
  if (state.level >= state.wizards.length) return state

  return updateObject(state, { level: state.level + 1 })
}

const wizardReducer: FCR<WizardState, WizardAction> = (state = initialState, action) => {
  switch (action.type) {
    case wizardTypes.WIZARD_INIT:
      return init(state, action.payload)
    case wizardTypes.WIZARD_CLEAR:
      return initialState
    case wizardTypes.WIZARD_NEXT:
      return goNext(state)
    case wizardTypes.WIZARD_PREV:
      return goPrev(state)
    case wizardTypes.WIZARD_SUBMITED:
      return state
    case wizardTypes.WIZARD_LOADING_START:
      return updateObject(state, { loading: true })
    case wizardTypes.WIZARD_LOADING_FINISHED:
      return updateObject(state, { loading: false })
    default:
      return state
  }
}

export default wizardReducer
