import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeTheme } from 'store/app/action'
import { logout } from 'api/user'
import { Layout, Menu, Icon, Row, Col } from 'antd'
import './layout-console.scss'


const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
class LayoutConsole extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
  }
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {
    console.log(this.props)
  }
  logOut() {
    logout().then(
      this.props.history.push('/')
    )
  }
  toShow() {
    this.props.history.push('/show')
  }
  render() {
    return (
      (
        <Layout className="layout-console">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo"
              style={{ 'backgroundPositionX': this.state.collapsed ? 'center' : 'left' }}
              onClick={this.toShow.bind(this)}>
              {!this.state.collapsed && '进入前台'}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 1</Menu.Item>
                <Menu.Item key="3">Option 2</Menu.Item>
                <Menu.Item key="4">Option 3</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <Row type="flex" justify="space-between">
                <Col span={12}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle} /></Col>
                <Col span={12}>col-8 </Col>
              </Row>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              Content
            </Content>
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
