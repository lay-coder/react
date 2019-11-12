import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeTheme } from 'store/app/action'
import { Button } from 'element-react'

class LayoutConsole extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div style={{ backgroundColor: this.props.theme.bgColor }}>
        parent
        <Link to="/one">
          <Button>跳转大儿子</Button>
        </Link>
        <Link to="/two">
          <Button>跳转二儿子</Button>
        </Link>
        <Link to="/one/grandson">
          <Button>跳转大孙子</Button>
        </Link>
        <Link to="/two/grandson">
          <Button>跳转二孙子</Button>
        </Link>
      </div>
    )
  }
}
export default connect(
  state => ({ theme: state.theme }),
  { changeTheme },
)(LayoutConsole)
