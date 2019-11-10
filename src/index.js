import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router, BrowserRouter, Route,
  // Redirect 
} from 'react-router-dom'
import { createHashHistory } from 'history'
import * as serviceWorker from './serviceWorker'
import routes from 'router'

import 'element-theme-default'
import './index.scss'


const history = createHashHistory()
const App = () => (
  <Router history={history}>
    <BrowserRouter>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={props => <route.component {...props} routes={route.routes} />}>
          {/* {route.redirect ? (<Redirect to={route.redirect} />) : null} */}
        </Route>
      ))}
    </BrowserRouter>
  </Router>
)


ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
