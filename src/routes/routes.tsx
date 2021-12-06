import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound404Page } from '../pages'
import { PublicRoutes } from '.'
import { ADMIN_PAGE, NOT_FOUND_PAGE, PUBLIC_PAGE } from '@src/constants/path'

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={NOT_FOUND_PAGE} component={NotFound404Page} />
      <Route exact path={ADMIN_PAGE} component={NotFound404Page} />
      <Route path={PUBLIC_PAGE} component={PublicRoutes} />
    </Switch>
  )
}
