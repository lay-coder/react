import React from 'react'
import { createHashHistory } from 'history'
import { Router, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from 'router'

const history = createHashHistory()
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact={route.exact}
                key={i}
                path={route.path}
                render={props => <route.component {...props} routes={route.routes} />}>
              </Route>
            ))}
            <Redirect to='/login'></Redirect>
          </Switch>
        </BrowserRouter>
      </Router>
    )
  }
}

export default connect(state => ({ token: state.token }))(App)