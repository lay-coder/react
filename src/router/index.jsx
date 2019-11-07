import React from 'react'
import {
  Router,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { createHashHistory } from 'history'
import Login from 'views/login/index'
import consoleRouters from './console'
import showRouters from './show'
const routes = consoleRouters.concat(showRouters)
const history = createHashHistory()
const APP = () => (
  <Router history={history}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  </Router>
)
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
export default APP
