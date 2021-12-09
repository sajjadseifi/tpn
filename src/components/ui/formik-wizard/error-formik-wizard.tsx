import React, { FC } from 'react'
import { ErrorMessage } from 'formik'
import { classes } from '.'

interface ErrorFormikWizardProps {
  name: string
}

export const ErrorFormikWizard: FC<ErrorFormikWizardProps> = ({ name }) => {
  return (
    <ErrorMessage
      {...{ name }}
      render={(msg) => (
        <div className={classes.ErrorMessage}>
          <span className={classes.Error}>{msg}</span>
        </div>
      )}
    />
  )
}
