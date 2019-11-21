import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Heat from '../heat'
import Analysis from '../analysis'

import './layout-show.scss'
class LayoutShow extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  }
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    return (
      <div className='layout-show'>
        <Switch>
          <Route path='/show/heat' component={Heat}></Route>
          <Route path='/show/analysis' component={Analysis}></Route>
        </Switch>
        <Link target="_blank" to="/console/dashboard">
          进入后台
        </Link>
        <Link to="/show/heat">热力分析</Link>
        <Link to="/show/analysis">综合分析</Link>
      </div>
    )
  }
}
export default connect(
  state => ({ theme: state.theme }),
  // { changeTheme },
)(LayoutShow)
