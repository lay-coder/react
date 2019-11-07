import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'element-react'
import ChildrenOne from './ChildrenOne'
import ChildrenTwo from './ChildrenTwo'

export default class Parent extends React.Component {
    render() {
        return <div style={{ backgroundColor: "gray" }}>parent
            <Link to="/one"><Button>跳转大儿子</Button></Link>
            <Link to="/two"><Button>跳转二儿子</Button></Link>
            <Link to="/one/grandson"><Button>跳转大孙子</Button></Link>
            <Link to="/two/grandson"><Button>跳转二孙子</Button></Link>
            <Route path="/one" component={ChildrenOne} />
            <Route path="/two" component={ChildrenTwo} />
        </div >
    }
}