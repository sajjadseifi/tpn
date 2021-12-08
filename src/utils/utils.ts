//updating origin object with new target object
export const updateObject = <T>(origin: T, target: any): T => ({ ...origin, ...target })
//
export const actionCreator = (type: string, payload?: any) => ({
  type,
  payload
})

//
export const sleep = (second: number) => new Promise((res, rej) => setTimeout(() => res(0), second * 1000))
