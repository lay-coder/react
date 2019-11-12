import React from 'react'
import { Form, Input, Button } from 'element-react'
import { connect } from 'react-redux'
import { setToken } from 'store/user/action'
import { login } from 'api/user'
import './login.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
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
      form: Object.assign(this.state.form, { [key]: value })
    })
  }
  keypress(e: any) {
    console.log(e)
  }
  async login() {
    try {
      const response = await login(this.state.form)
      if (response.code === 0) {
        console.log(response.body.accountInfo.accessToken)
        setToken(response.body.accountInfo.accessToken)
        console.log(this.props)
        // this.props.history.push({
        //   pathname: '/console'
        // })
      }
    } catch (e) { }
  }
  LoginForm() {
    return (
      <Form
        labelPosition="top"
        labelWidth="100"
        model={this.state.form}
        className="login-form"
      >
        <Form.Item label="帐号">
          <Input
            value={this.state.form.loginName}
            onChange={this.onChange.bind(this, 'loginName')}
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input
            value={this.state.form.password}
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