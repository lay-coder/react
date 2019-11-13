import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { changeTheme } from 'store/app/action'

class LayoutShow extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div style={{ backgroundColor: this.props.theme.bgColor }}>
        show
        <Link to="/console">
          进入后台
        </Link>
      </div>
    )
  }
}
export default connect(
  state => ({ theme: state.theme }),
  // { changeTheme },
)(LayoutShow)
