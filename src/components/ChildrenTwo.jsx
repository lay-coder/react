import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'element-react'

export default class ChildrenTwo extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blue' }}>
        二儿子
        <Link to="/two/grandson">
          <Button>跳转二孙子</Button>
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
