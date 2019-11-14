import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setToken } from 'store/user/action'
import { Layout, Menu, Icon, Row, Col, Avatar, Dropdown } from 'antd'
import screenfull from 'screenfull'

import { logout } from 'api/user'

import './console-header.scss'
import { logoutAndRemove } from 'utils/auth'

const { Header } = Layout


class ConsoleHeader extends React.Component {


  state = {
    isFullscreen: false
  }
  toggleFullscreen = () => {
    if (!screenfull || !screenfull.isEnabled) {
      return false
    }
    screenfull.toggle()
    this.setState({
      isFullscreen: screenfull.isFullscreen
    })
  }
  logOut = () => {
    logout().then(() => {
      this.props.setToken('')
      logoutAndRemove()
      this.props.history.push('/')
    })
  }
  menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">个人中心</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <span to="/" onClick={this.logOut}>退出登录</span>
      </Menu.Item>
    </Menu>
  )
  render() {
    return (
      <Header>
        <Row type="flex" justify="space-between">
          <Col span={12}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggleSider} /></Col>
          <Col span={12} className="user-tools">
            {this.state.isFullscreen ? <Icon type="fullscreen" className="icon" onClick={this.toggleFullscreen} />
              : <Icon type="fullscreen-exit" className="icon" onClick={this.toggleFullscreen} />}
            <Icon type="bell" theme="filled" className="icon" />
            <Icon type="question-circle" theme="filled" className="icon" />
            <Dropdown overlay={this.menu} trigger={['click']} placement="bottomRight">
              <div className="user-avatar">
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                <Icon type="caret-down" className="icon-last" />
              </div>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    )
  }
}
export default connect(state => ({ token: state.token }), { setToken })(ConsoleHeader)