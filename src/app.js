import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import routes from 'router'

const history = createHashHistory()
const App = () => (
  <BrowserRouter history={history}>
    {routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      ></Route>
    ))}
  </BrowserRouter>
)
export default App