import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'element-react'
import GrandSonone from './GrandSonone'
export default class ChildrenOne extends React.Component {
    render() {
        return <div style={{ backgroundColor: "yellow" }}>大儿子
        <Link to="/one/grandson"><Button>跳转大孙子</Button></Link>
            <Route path='/one/grandson' component={GrandSonone}></Route>
        </div>
    }
}

