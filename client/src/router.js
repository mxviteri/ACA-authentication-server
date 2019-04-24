import React from 'react'
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import cookie from 'cookie'
import Home from './components/Home'
import Dashboard from './containers/Dashboard'
import NotFound from './components/NotFound'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
)

export default Router