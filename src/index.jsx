import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Button } from 'element-react'
import 'element-theme-default'
import './index.scss'
// import APP from './router'
import * as serviceWorker from './serviceWorker'
class Parent extends React.Component {
    render() {
        return <div>parent
            <Link to="/one"><Button>one</Button></Link>
            <Link to="/two"><Button>two</Button></Link>
            <Link to="/one/grandson"><Button>grandson</Button></Link>
            <Switch>
                <Route path="/one" component={ChildrenOne} />
                <Route path="/two" component={ChildrenTwo} />
            </Switch>
        </div >
    }
}
class ChildrenOne extends React.Component {
    render() {
        return <div>childrenOne
            <Switch>
                <Route path='/one/grandson' component={GrandSonone}></Route>
            </Switch>
        </div>
    }
}
class ChildrenTwo extends React.Component {
    render() {
        return <div>childrenTwo</div>
    }
}
class GrandSonone extends React.Component {
    render() {
        return <div>grandSonOne</div>
    }
}
ReactDOM.render(<BrowserRouter ><Parent /></BrowserRouter >, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
