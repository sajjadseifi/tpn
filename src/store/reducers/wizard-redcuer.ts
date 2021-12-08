import { FormContnetProps } from '@src/components/form-wizard'
import { FCR, IDictionary } from '@src/types/types'
import { updateObject } from '@src/utils/utils'
import { actionTypes } from '../actions'
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
  if (state.level < 1) return state

  return updateObject(state, { level: state.level - 1 })
}

const goNext = (state: WizardState) => {
  if (state.level >= state.wizards.length) return state

  let updatedLevel = state.level + 1

  return updateObject(state, { level: updatedLevel, visitedLevel: updatedLevel })
}

const wizardReducer: FCR<WizardState, WizardAction> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WIZARD_INIT:
      return init(state, action.payload)
    case actionTypes.WIZARD_CLEAR:
      return initialState
    case actionTypes.WIZARD_NEXT:
      return goNext(state)
    case actionTypes.WIZARD_PREV:
      return goPrev(state)
    case actionTypes.WIZARD_SUBMITED:
      return state
    case actionTypes.WIZARD_LOADING_START:
      return updateObject(state, { loading: true })
    case actionTypes.WIZARD_LOADING_FINISHED:
      return updateObject(state, { loading: false })
    default:
      return state
  }
}

export default wizardReducer
