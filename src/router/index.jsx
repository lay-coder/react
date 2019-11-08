import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'
import Login from 'views/login/index'
import consoleRouters from './console'
import showRouters from './show'
const routes = consoleRouters.concat(showRouters)
const history = createHashHistory()
const APP = () => (
  <BrowserRouter history={history}>
    <Route path="/">
      <Redirect to="/console" />
    </Route>
    <Route path="/login" component={Login} />
    {routes.map((route, i) => (
      <Route
        path={route.path}
        key={i}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    ))}
  </BrowserRouter>
)
export default APP
