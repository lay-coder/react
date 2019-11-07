import React from 'react'
import { Route } from 'react-router-dom'
import GrandSonTwo from './GrandSonTwo'

export default class ChildrenTwo extends React.Component {
    render() {
        return <div style={{ backgroundColor: "blue" }}>二儿子
            <Route path='/two/grandson' component={GrandSonTwo}></Route>
        </div>
    }
}