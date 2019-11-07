import React, { Component } from 'react'
import { Button } from 'element-react'
import { Link, Route } from 'react-router-dom'
export default class LayoutConsole extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
        {this.props.routes.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              component={item.component}
            />
          )
        })}
      </div>
    )
  }
}
