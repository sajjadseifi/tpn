import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomePage } from '@src/pages/public'

export const PublicRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Redirect to="/404" />
    </Switch>
  )
}
