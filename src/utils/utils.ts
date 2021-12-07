//updating origin object with new target object
export const updateObject = (origin: any, target: any) => ({ ...origin, ...target })
//
export const actionCreator = (type: string, payload: any) => ({
  type,
  payload
})
