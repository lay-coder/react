import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'element-react'
export default class ChildrenOne extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'yellow' }}>
        大儿子
        <Link to="/one/grandson">
          <Button>跳转大孙子</Button>
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
