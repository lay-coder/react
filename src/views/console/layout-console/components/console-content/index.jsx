import React from 'react'
import { Layout } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PageOne from 'views/console/pages-message/message-personal'
import Dashboard from 'views/console/dashboard'

const { Content } = Layout
class ConsoleContent extends React.Component {
  render() {
    return (
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280,
        }}>
        <Switch>
          <Route path='/console' children={
            <Switch>
              <Route path='/console/dashboard' component={Dashboard}></Route>
              <Route path='/console/message' children={
                <Switch>
                  <Route path='/console/message/personal' component={PageOne} />
                  <Route path='/console/message/notice' component={PageOne} />
                  <Route path='/console/message/needs' component={PageOne} />
                  <Route path='/console/message/notice-new' component={PageOne} />
                  <Redirect to='/console/message/personal' />
                </Switch>
              } />
              <Redirect to='/console/dashboard' />
            </Switch>
          } />
        </Switch>
      </Content>
    )
  }
}
export default connect(state => ({ userMenu: state.userMenu }))(ConsoleContent)