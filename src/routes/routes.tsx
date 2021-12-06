import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound404Page } from '../pages'
import { PublicRoutes } from '.'

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/404" component={NotFound404Page} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  )
}
