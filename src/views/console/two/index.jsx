import React, { Component } from 'react'
import { Button } from 'element-react'
import { Switch, Route, Link } from 'react-router-dom'
import LayoutConsoleThree from '../three'
import LayoutShow from 'views/show/layout-show'
export default class LayoutConsoleTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="hello">
        LayoutConsoleTwo
        <Button>
          <Link to="/console/two/three">去three</Link>
        </Button>
        <Button>
          <Link to="/console/two/show">去two/show</Link>
        </Button>
        <Switch>
          <Route path="/console/two/three" component={LayoutConsoleThree} />
          <Route exact path="/console/two/show" component={LayoutShow} />
        </Switch>
      </div>
    )
  }
}
