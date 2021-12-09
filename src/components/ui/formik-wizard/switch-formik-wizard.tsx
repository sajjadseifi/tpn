import { Field } from 'formik'
import React, { FC } from 'react'
import { classes, ErrorFormikWizard } from '.'
import { TitleFormWizard } from './title-form-wizard'

export type SwitchItem<T> = { display: string; value: T }
interface SwitchFormikWizardProps {
  name: string
  label: string
  type?: 'checked' | 'radio'
  items: SwitchItem<any>[]
}

export const SwitchFormikWizard: FC<SwitchFormikWizardProps> = ({
  label,
  name,
  type,
  items
}) => {
  return (
    <div className={classes.Switch}>
      <TitleFormWizard {...{ label, name }} />
      {items.map(({ display, value }, key) => (
        <label key={key} className={classes.SwitchItem}>
          <Field {...{ name, type, value }} />
          <span>{display}</span>
        </label>
      ))}
      <ErrorFormikWizard {...{ name }} />
    </div>
  )
}

SwitchFormikWizard.defaultProps = {
  type: 'radio'
}
