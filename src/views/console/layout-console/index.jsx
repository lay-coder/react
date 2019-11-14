import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeTheme } from 'store/app/action'
import { Layout } from 'antd'
import './layout-console.scss'
import ConsoleHeader from './components/console-header'
import ConsoleSider from './components/console-sider'
import ConsoleContent from './components/console-content'


class LayoutConsole extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
  }
  state = {
    collapsed: false,
    isFullscreen: false
  }


  toggleSider = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      (
        <Layout className="layout-console">
          <ConsoleSider {...{ collapsed: this.state.collapsed, history: this.props.history }} />
          <Layout>
            <ConsoleHeader {...{ collapsed: this.state.collapsed, toggleSider: this.toggleSider, history: this.props.history }} />
            <ConsoleContent {...{ history: this.props.history }} />
          </Layout>
        </Layout >
      )
    )
  }
}
export default connect(
  state => ({ theme: state.theme, token: state.token }),
  { changeTheme },
)(LayoutConsole)
