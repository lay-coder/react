import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd'
import { connect } from 'react-redux'
import { setToken } from 'store/user/action'
import { login, forceLogin } from 'api/user'
import './login.scss'

const { confirm } = Modal
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
    const _that = this
    login(_that.state.loginQuery)
      .then((res) => {
        switch (res.code) {
          case 0:
            _that.props.setToken(res.body.accountInfo.accessToken)
            _that.props.history.push('/console')
            break
          case 40103:
            confirm({
              title: 'Do you want to delete these items?',
              content: '你已在其他设备登录，是否强制登录',
              okText: '确认',
              cancelText: '取消',
              centered: true,
              onOk() {
                _that.forceLogin()
              }
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
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loginQuery: Object.assign(this.state.loginQuery, values)
        })
        this.login()
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('loginName', {
            rules: [{ required: true, message: '请输入账号!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住账号</Checkbox>)}
          {/* <a className="login-form-forgot" href="/show">忘记密码</a> */}
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          {/* 或 <a href="/show">注册</a> */}
        </Form.Item>
      </Form>
    )
  }
}
const LoginForm = Form.create({ name: 'normal_login' })(Login)
export default connect(state => ({ token: state.token }), { setToken })(LoginForm)