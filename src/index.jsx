import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'element-theme-default'
import './index.scss'
// import APP from './router'
import * as serviceWorker from './serviceWorker'
import Parent from 'components/Parent'

ReactDOM.render(<BrowserRouter ><Parent /></BrowserRouter >, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
