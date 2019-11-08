import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import 'element-theme-default'
import './index.scss'
import { createHashHistory } from 'history'
import * as serviceWorker from './serviceWorker'
import Parent from 'components/Parent'
const routes = [
  {
    path: '/',
    component: Parent,
  },
]
const history = createHashHistory()
const APP = () => (
  <BrowserRouter history={history}>
    {routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        render={() => <route.component {...props} routes={route.routes} />}
      ></Route>
    ))}
  </BrowserRouter>
)
ReactDOM.render(<APP />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
