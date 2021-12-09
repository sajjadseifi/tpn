import * as colors from '@src/constants/colors'

export type ColorType = keyof typeof colors

//redux type
export type FCR<StateType, ActionType> = (
  state: StateType | undefined,
  action: ActionType
) => StateType
//nullable of T
export type Partial<T> = { [P in keyof T]?: T[P] }
//
export interface IDictionary<TValue> {
  [id: string]: TValue
}
