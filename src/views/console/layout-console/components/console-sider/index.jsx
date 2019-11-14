import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'

import './console-sider.scss'

const { Sider } = Layout
const { SubMenu } = Menu

class ConsoleSider extends React.Component {
  componentDidMount() {
    // console.log(this.props)
  }
  toShow = () => {
    this.props.history.push('/show')
  }
  clickMenu = ({ key }) => {
    this.props.history.push('/console' + key)
  }
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo"
          style={{ backgroundPositionX: this.props.collapsed ? 'center' : 'left' }}
          onClick={this.toShow}>
          {!this.props.collapsed && '进入前台'}
        </div>
        <Scrollbars autoHide style={{ height: 'calc(100% - 50px)' }} className="scrollbar"
          renderThumbVertical={
            () => (
              <div style={{
                cursor: 'pointer',
                borderRadius: 'inherit',
                backgroundColor: 'rgba(251, 251, 251, 0.25)'
              }} />
            )
          }>
          <Menu theme="dark" mode="inline" onClick={this.clickMenu}>
            {
              this.props.userMenu.map(i => (
                <SubMenu
                  key={i.uri}
                  title={
                    <span>
                      <Icon type="chrome" />
                      <span>{i.name}</span>
                    </span>
                  }>
                  {i.children && i.children.map(j => (
                    <Menu.Item key={j.uri}><Icon type="tag" />{j.name}</Menu.Item>
                  ))}
                </SubMenu>
              ))
            }
          </Menu>
        </Scrollbars>

      </Sider>
    )
  }
}

export default connect(state => ({ userMenu: state.userMenu }))(ConsoleSider)