import React, { Fragment } from 'react'
import classes from './form-wizard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import Proggres from './progress'
import { Partial } from '@src/types/types'
import { Form, Formik } from 'formik'
import { TitleUi } from '../ui'
import { Movment } from './movment'
import { wizardActions } from '@src/store/actions'
import { useDialogDispatch } from '../dialog/context/hook-dialog'
import { actionTypes } from '../dialog/context'
import { HiExclamation, HiTicket } from 'react-icons/hi'
import { WizardAction } from '@src/store/types/wizard-type'
import { ReturnSubmit } from '.'

export const FromWizard = () => {
  const dispatch = useDispatch()
  const dialogDispatch = useDialogDispatch()
  const { level, wizards } = useSelector<RootState>((state) => state.wizard) as WizardState
  const WIZARD = wizards[level]

  if (!WIZARD) return <Fragment></Fragment>

  const { form, render: Render, title, movment, onSubmit: submited, validationSchema } = wizards[level]

  const MovmentCmp = movment ? movment : Movment

  const onSubmit = (values: any) => {
    let action: any = level === wizards.length - 1 ? wizardActions.submitedWizard : wizardActions.nextWizard
    if (submited) {
      const ret = submited(values, dispatch)
      if (ret) {
        showDialog(ret, action)
        return
      }
    }
    dispatch(action())
  }
  const showDialog = ({ messages, ok }: Partial<ReturnSubmit>, action: () => WizardAction) => {
    dialogDispatch(
      actionTypes.initDialog({
        icon: ok ? HiTicket : HiExclamation,
        status: ok ? 'Success' : 'Error',
        title: ok ? 'موفق' : 'خطا',
        children: <>{messages}</>,
        visibility: 'Show',
        onOk: () => ok && dispatch(action())
      })
    )
  }
  return (
    <div>
      <Proggres clickedProggresItem={(entered: number) => dispatch(wizardActions.selectEnteredWizard(entered))} />
      <div className={classes.FormContent}>
        <TitleUi className={classes.Title} subject={title} />
        <Formik initialValues={form} {...{ onSubmit, validationSchema }}>
          {(props) => (
            <Form>
              <Render {...{ form, ...props }} />
              <MovmentCmp {...{ submitForm: props.submitForm }} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
