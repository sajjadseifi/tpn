import React, { useEffect } from 'react'
import { FromWizard } from '@src/components/form-wizard/form-wizard'
import { classes, forms } from '.'
import { useDispatch } from 'react-redux'
import { wizardActions } from '@src/store/actions'

export const FormWizardAdminPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(wizardActions.initWizard(forms))
  }, [])
  return (
    <div className={classes.FormWizardAdminPage}>
      <div className={classes.Container}>
        <FromWizard />
      </div>
    </div>
  )
}
