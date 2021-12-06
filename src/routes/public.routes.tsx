import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomePage } from '@src/pages/public'
import { NOT_FOUND_PAGE } from '@src/constants/path'
import { DefaultLayout } from '@src/layout'

export const PublicRoutes: FC = () => {
  return (
    <DefaultLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Redirect to={NOT_FOUND_PAGE} />
      </Switch>
    </DefaultLayout>
  )
}
