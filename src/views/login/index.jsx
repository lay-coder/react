import React from 'react'
import { Form, Input, Button } from 'element-react'
import './login.scss'
import { login } from 'api/user'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
        passwd: '',
      },
      isLogin: false,
    }
    this.LoginForm = this.LoginForm.bind(this)
    this.form = React.createRef()
  }
  componentDidMount() {
    console.log(this.form.current)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value }),
    })
  }
  keypress(e) {
    if (e.keyCode === 13) {
      this.login()
    }
  }
  async login() {
    try {
      const response = await login(this.state.form)
      if (response.code === 0) {
        this.props.history.push({
          pathname: '/console',
        })
      }
    } catch (e) {}
  }
  sign() {
    console.log(this.form.current)
  }
  LoginForm() {
    return (
      <Form
        ref={this.form}
        labelPosition="top"
        labelWidth="100"
        model={this.state.form}
        className="login-form"
      >
        <Form.Item label="帐号">
          <Input
            value={this.state.form.username}
            onChange={this.onChange.bind(this, 'username')}
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input
            value={this.state.form.passwd}
            onChange={this.onChange.bind(this, 'passwd')}
            onKeyUp={this.keypress.bind(this)}
          />
        </Form.Item>
        <Form.Item className="login-button">
          <Button type="primary" size="small" onClick={this.sign.bind(this)}>
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
