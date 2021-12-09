import React, { FC } from 'react'
import { classes } from '.'

interface TitleFormWizardProps {
  name: string
  label: string
}

export const TitleFormWizard: FC<TitleFormWizardProps> = ({ name, label }) => (
  <h6 className={classes.Label}>
    <label htmlFor={name}>{label}</label>
  </h6>
)
