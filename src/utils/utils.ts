//updating origin object with new target object
export const updateObject = <T>(origin: T, target: any): T => ({ ...origin, ...target })
//
export const actionCreator = (type: string, payload?: any) => ({
  type,
  payload
})
