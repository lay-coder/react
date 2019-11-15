import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './console-sider.scss'

const { Sider } = Layout
const { SubMenu } = Menu

class ConsoleSider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenuItem: []
    }
  }
  toShow = () => {
    this.props.history.push({
      pathname: '/show',
      target: '_blank'
    })
  }
  clickMenu = ({ key, keyPath, selectedKeys }) => {
    const { history } = this.props
    history.push(`/console${key}`)
    console.log(history)
    console.log(history.location.pathname)
    console.log(key, keyPath, selectedKeys)
    this.setState({
      activeMenuItem: selectedKeys
    })
  }
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <Link className="logo" to="/show" target='_blank'
          style={{ backgroundPositionX: this.props.collapsed ? 'center' : 'left' }}>
          {!this.props.collapsed && '进入前台'}
        </Link>
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
          <Menu theme="dark" mode="inline" onSelect={this.clickMenu} selectedKeys={this.state.activeMenuItem}>
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