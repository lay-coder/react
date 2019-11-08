import React, { Component } from 'react'
import { Button } from 'element-react'
import { Link, Route } from 'react-router-dom'
export default class LayoutConsole extends Component {
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
        <Link to="/console/one">
          <Button>去one</Button>
        </Link>
        <Button>
          <Link to="/console/two">去two</Link>
        </Button>
        LayoutConsole
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
