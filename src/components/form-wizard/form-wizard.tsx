import React, { FC, Fragment } from 'react'
import classes from './form-wizard.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import Proggres from './progress'
import { IDictionary } from '@src/types/types'
import { Form, Formik, FormikHelpers } from 'formik'
import { TitleUi } from '../ui'

export type FormType = IDictionary<any>

export interface FormContnetProps {
  title: string
  form: FormType
  movment?: FC<any>
  onSubmit?: <T>(values: T, { setSubmitting }: FormikHelpers<T>) => void
}

export const FromWizard = () => {
  const { level, wizards } = useSelector<RootState>((state) => state.wizard) as WizardState
  const WIZARD = wizards[level]

  if (!WIZARD) return <Fragment></Fragment>

  const { form, render: Render, title, movment: Movment, onSubmit: submited } = wizards[level]

  const onSubmit = submited ? submited : () => {}
  return (
    <div>
      <Proggres />
      <div className={classes.FormContent}>
        <TitleUi className={classes.Title} subject={title} />
        <Formik initialValues={form} {...{ onSubmit }}>
          <Form>
            <Render {...{ form }} />
            {Movment && <Movment />}
          </Form>
        </Formik>
      </div>
    </div>
  )
}
