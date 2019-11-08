import React, { Component } from 'react'
import { Button } from 'element-react'
import { Route, Link } from 'react-router-dom'
export default class LayoutConsoleTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="hello">
        LayoutConsoleTwo
        <Button>
          <Link to="/console/two/three">去three</Link>
        </Button>
        {this.props.routes.map((route, i) => {
          return (
            <Route
              key={i}
              exact
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          )
        })}
      </div>
    )
  }
}
