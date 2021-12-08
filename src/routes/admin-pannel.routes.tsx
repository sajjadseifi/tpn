import React, { FC } from 'react'
import * as path from '@src/constants/path'
import { AdminLayout } from '@src/layout'
import { FormWizardAdminPage } from '@src/pages'
import { Redirect, Route, Switch } from 'react-router-dom'

export const AdminPannelRoutes: FC = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin/form-wizard" component={FormWizardAdminPage} />
        <Redirect to={path.NOT_FOUND_PAGE} />
      </Switch>
    </AdminLayout>
  )
}
