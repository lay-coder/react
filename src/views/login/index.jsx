import React from 'react'
import { Form, Input, Button, MessageBox } from 'element-react'
import { connect } from 'react-redux'
import { setToken } from 'store/user/action'
import { login, forceLogin } from 'api/user'
import './login.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginQuery: {
        loginName: '',
        password: ''
      },
      isLogin: false
    }
    this.LoginForm = this.LoginForm.bind(this)
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  onChange(key: any, value: any) {
    this.setState({
      loginQuery: Object.assign(this.state.loginQuery, { [key]: value })
    })
  }
  keypress(e: any) {
    console.log(e)
  }
  login() {
    login(this.state.loginQuery)
      .then((res) => {
        switch (res.code) {
          case 0:
            this.props.setToken(res.body.accountInfo.accessToken)
            this.props.history.push({
              pathname: '/console'
            })
            break
          case 40103:
            MessageBox.confirm('你已在其他设备登录，是否强制登录', '确认', {
              confirmButtonText: '确认',
              cancelButtonText: '取消',
              type: 'warning',
            }).then(() => {
              this.forceLogin()
            }).catch((e) => {
            })
            break
          default:
            break
        }
      })
  }
  forceLogin() {
    forceLogin(this.state.loginQuery)
      .then((res) => {
        this.props.setToken(res.body.accountInfo.accessToken)
        this.props.history.push('/console')
      })
  }
  LoginForm() {
    return (
      <Form
        labelPosition="top"
        labelWidth="100"
        model={this.state.loginQuery}
        className="login-form"
      >
        <Form.Item label="帐号">
          <Input
            value={this.state.loginQuery.loginName}
            onChange={this.onChange.bind(this, 'loginName')}
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input
            value={this.state.loginQuery.password}
            onChange={this.onChange.bind(this, 'password')}
          />
        </Form.Item>
        <Form.Item className="login-button">
          <Button type="primary" size="small">
            注册
          </Button>
          <Button type="primary" size="small" onClick={this.login.bind(this)}>
            登录
          </Button>
        </Form.Item>
      </Form>
    )
  }
  render() {
    return <this.LoginForm />
  }
}

export default connect(state => ({ token: state.token }), { setToken })(Login)