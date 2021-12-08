import React, { FC } from 'react'
import { Field, FieldAttributes } from 'formik'
import { classes, ErrorFormikWizard } from '.'
interface InputFormikWizardProps extends FieldAttributes<any> {
  name: string
  label: string
  type?: string
  error?: string
  touched?: string
}

export const InputFormikWizard: FC<InputFormikWizardProps> = ({ label, name, type }) => {
  return (
    <div className={classes.InputWizard}>
      <div className={classes.InputContainer}>
        <Field className={classes.Input} id={name} {...{ name, type }} required />
        <h6 className={classes.Label}>
          <label htmlFor={name}>{label}</label>
        </h6>
        <div className={classes.InputProgress}></div>
      </div>
      <ErrorFormikWizard {...{ name }} />
    </div>
  )
}

InputFormikWizard.defaultProps = {
  type: 'text'
}
