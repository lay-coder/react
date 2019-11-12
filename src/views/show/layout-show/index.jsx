import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeTheme } from 'store/app/action'
import { Button } from 'element-react'

class LayoutShow extends React.Component {
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
        show
        <Link to="/console">
          <Button>进入后台</Button>
        </Link>
      </div>
    )
  }
}
export default connect(
  state => ({ theme: state.theme }),
  { changeTheme },
)(LayoutShow)
