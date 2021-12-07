import React, { FC, ReactPropTypes } from 'react'
import classes from './form-wizard.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import { MovmentFormWizard } from './movment-form-wizard'

interface IWizard {
  title: string

  render: (props: any) => JSX.Element
}

export const FromWizard = () => {
  const {} = useSelector<RootState>((state) => state.wizard) as WizardState

  return (
    <div>
      <MovmentFormWizard />
    </div>
  )
}
