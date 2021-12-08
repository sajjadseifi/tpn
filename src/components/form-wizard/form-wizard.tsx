import React, { Dispatch, FC, Fragment } from 'react'
import classes from './form-wizard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import Proggres from './progress'
import { IDictionary } from '@src/types/types'
import { Form, Formik, FormikHelpers } from 'formik'
import { TitleUi } from '../ui'
import { Movment } from './movment'
import { wizardActions } from '@src/store/actions'
import { useDialogDispatch } from '../dialog/context/hook-dialog'
import { actionTypes } from '../dialog/context'
import { HiExclamation, HiTicket } from 'react-icons/hi'

export type FormType = IDictionary<any>
export type ReturnSubmit = {
  messages: string[]
  ok: boolean
}
export type SubmitType = <T>(values: T, dispatch: Dispatch<any>) => Partial<ReturnSubmit> | void

export interface FormContnetProps {
  title: string
  form: FormType
  movment?: FC<any>
  onSubmit?: SubmitType
}

export const FromWizard = () => {
  const dispatch = useDispatch()
  const dialogDispatch = useDialogDispatch()
  const { level, wizards } = useSelector<RootState>((state) => state.wizard) as WizardState
  const WIZARD = wizards[level]

  if (!WIZARD) return <Fragment></Fragment>

  const { form, render: Render, title, movment, onSubmit: submited } = wizards[level]

  const MovmentCmp = movment ? movment : Movment

  const onSubmit = (values: any) => {
    if (!submited) {
      dispatch(wizardActions.nextWizard())
      return
    }

    const ret = submited(values, dispatch)
    if (!ret) {
      dispatch(wizardActions.nextWizard())
      return
    }
    console.log(ret)
    dialogDispatch(
      actionTypes.initDialog({
        icon: ret.ok ? HiTicket : HiExclamation,
        status: ret.ok ? 'Success' : 'Error',
        title: ret.ok ? 'موفق' : 'خطا',
        children: <>{ret.messages}</>,
        visibility: 'Show',
        onOk: () => dispatch(wizardActions.nextWizard())
      })
    )
  }
  return (
    <div>
      <Proggres clickedProggresItem={(entered: number) => dispatch(wizardActions.selectEnteredWizard(entered))} />
      <div className={classes.FormContent}>
        <TitleUi className={classes.Title} subject={title} />
        <Formik initialValues={form} {...{ onSubmit }}>
          {({ submitForm }) => (
            <Form>
              <Render {...{ form }} />
              <MovmentCmp {...{ submitForm }} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
