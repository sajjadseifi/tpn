import { NOT_FOUND_PAGE } from '@src/constants/path'
import { AdminLayout } from '@src/layout'
import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export const AdminPannelRoutes: FC = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/form-wizard" component={() => <></>} />
        <Redirect to={NOT_FOUND_PAGE} />
      </Switch>
    </AdminLayout>
  )
}
