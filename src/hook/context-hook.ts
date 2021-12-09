import * as React from 'react'

export const useHook = (Context: React.Context<any>, hookName: string, providerName: string) => {
  const context = React.useContext(Context)
  if (context === undefined) throw new Error(`${hookName} must be used within a ${providerName}`)

  return (cb: (arg: any) => any) => cb(context)
}
export const useDispatch = (Context: React.Context<any>, hookName: string, providerName: string) =>
  useHook(Context, hookName, providerName)((context: { dispatch: any }) => context.dispatch)

export const useSelector = (
  Context: React.Context<any>,
  hookName: string,
  providerName: string,
  cb = (state: any) => state
) => useHook(Context, hookName, providerName)((context: { state: any }) => cb(context.state))
