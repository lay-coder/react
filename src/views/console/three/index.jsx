import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'element-react'
export default class LayoutConsoleThree extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="hello">
        LayoutConsoleThree
        <Button>
          <Link to="/show">去show</Link>
        </Button>
      </div>
    )
  }
}
