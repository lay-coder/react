import request from 'utils/request'
import { isEmpty } from 'lodash'
const login = (query) => {
  return request.post(
    '/api/users/login',
    { loginName: query.username, password: query.passwd },
    '登陆失败',
    '登陆成功',
  )
}
const logout = () => {
  return request.post('/users/logout', {}, '退出失败', '退出成功')
}
const forceLogin = (username, passwd) => {
  return request.post('/users/forceLogin', {
    loginName: username,
    password: passwd,
  })
}
const registerAudit = (auditInfo) => {
  return request.post(
    '/users/registerAudit',
    auditInfo,
    '审核失败',
    '审核成功',
  )
}
const register = (userInfo) => {
  return request.post(
    '/users/register',
    userInfo,
    '申请信息发送失败',
    '申请信息已发送',
  )
}
const getUserList = (userQuery) => {
  return request.get('/mgr/users/list', userQuery, '用户列表获取失败')
}
const updatePassword = (oldPasswd, newPasswd) => {
  return request.post(
    '/users/updatePassword',
    {
      oldPassword: oldPasswd,
      newPassword: newPasswd,
    },
    '密码修改失败',
    '密码修改成功，新密码已生效，请牢记密码',
  )
}
const addUser = (userInfo) => {
  if (userInfo.dept && !isEmpty(userInfo.dept)) {
    userInfo.deptId = userInfo.dept.pop()
  }
  return request.post(
    '/mgr/users/new',
    userInfo,
    '用户添加失败',
    '用户添加成功',
  )
}
const updateUser = (userInfo) => {
  if (userInfo.dept && !isEmpty(userInfo.dept)) {
    userInfo.deptId = userInfo.dept.pop()
  }
  return request.post(
    '/mgr/users/update',
    userInfo,
    '用户修改失败',
    '用户修改成功',
  )
}
export {
  login,
  logout,
  forceLogin,
  registerAudit,
  register,
  getUserList,
  updatePassword,
  addUser,
  updateUser,
}
