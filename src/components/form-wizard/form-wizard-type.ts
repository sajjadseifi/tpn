import { RootState } from '@src/store'
import { IDictionary } from '@src/types/types'
import { FormikProps } from 'formik'
import { Dispatch, FC } from 'react'
import { DefaultRootState, useSelector } from 'react-redux'

export type FormType = IDictionary<any>
export type ReturnSubmit = {
  messages: string[]
  ok: boolean
}
export type SubmitType = <T>(
  values: T,
  dispatch: Dispatch<any>,
  root: RootState
) => Promise<Partial<ReturnSubmit> | void>

export interface RenderdProps extends FormikProps<FormType> {
  form: IDictionary<any>
}
export interface IWizard extends FormContnetProps {
  render: (props: RenderdProps) => JSX.Element
}
export type ValidationSchemaFunc = (state: RootState) => any
export interface FormContnetProps {
  title: string
  form: FormType
  movment?: FC<any>
  onSubmit?: SubmitType
  validationSchema?: any | ValidationSchemaFunc
}
