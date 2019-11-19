import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Heat from '../heat'

class LayoutShow extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ width: '80%', height: 'calc(100% - 40px)', margin: 'auto', paddingTop: '20px' }}>
          <Heat></Heat>
        </div>
        <Link target="_blank" to="/console/dashboard">
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
