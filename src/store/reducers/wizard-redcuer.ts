import { IWizard } from '@src/components/form-wizard'
import { FCR } from '@src/types/types'
import { updateObject } from '@src/utils/utils'
import { actionTypes } from '../actions'
import { WizardAction } from '../types/wizard-type'

export interface WizardState {
  wizards: IWizard[]
  level: number
  isLoading?: boolean
  isError?: boolean
  errors: Object
  visitedLevel: number
  code: string
}

const initialState: WizardState = {
  wizards: [],
  level: 0,
  errors: {},
  visitedLevel: 0,
  code: ''
}
const init = (state: WizardState, wizards: IWizard[]) =>
  updateObject(state, { wizards })

const goPrev = (state: WizardState) => {
  if (state.level < 1) return state

  return updateObject(state, { level: state.level - 1 })
}

const goNext = (state: WizardState) => {
  if (state.level >= state.wizards.length) return state

  let updatedLevel = state.level + 1

  return updateObject(state, {
    level: updatedLevel,
    visitedLevel: updatedLevel
  })
}

const goEntered = (state: WizardState, entered: number) => {
  if (entered > state.visitedLevel) return state

  return updateObject(state, { level: entered })
}
const submit = (state: WizardState, values: any) => {
  console.log('submiting')

  return state
}

const wizardReducer: FCR<WizardState, WizardAction> = (
  state = initialState,
  action
) => {
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
      return submit(state, '')
    case actionTypes.WIZARD_LOADING_START:
      return updateObject(state, { loading: true })
    case actionTypes.WIZARD_LOADING_FINISHED:
      return updateObject(state, { loading: false })
    case actionTypes.WIZARD_GOTO_ENTERED:
      return goEntered(state, action.payload.enterdLevel)
    case actionTypes.WIZARD_CODE:
      return updateObject(state, { code: action.payload.code })
    default:
      return state
  }
}

export default wizardReducer
