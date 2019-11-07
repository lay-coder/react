import React from 'react'
import { Route } from 'react-router-dom'
import GrandSonone from './GrandSonone'
export default class ChildrenOne extends React.Component {
    render() {
        return <div style={{ backgroundColor: "yellow" }}>大儿子
            <Route path='/one/grandson' component={GrandSonone}></Route>
        </div>
    }
}

