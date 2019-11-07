import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'element-react'
import GrandSonTwo from './GrandSonTwo'

export default class ChildrenTwo extends React.Component {
    render() {
        return <div style={{ backgroundColor: "blue" }}>二儿子
        <Link to="/two/grandson"><Button>跳转二孙子</Button></Link>
            <Route path='/two/grandson' component={GrandSonTwo}></Route>
        </div>
    }
}