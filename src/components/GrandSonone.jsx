import { Route, Link } from 'react-router-dom'
import { Button } from 'element-react'
import React from 'react'
export default class GrandSonone extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        大孙子
        <Link to="/one/grandson/son">
          <Button>跳转大孙子的儿子</Button>
        </Link>
        {this.props.routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </div>
    )
  }
}
