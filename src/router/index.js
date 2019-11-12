
import LayoutConsole from 'views/console/layout-console'
import Login from 'views/login'
import layoutShow from 'views/show/layout-show'
const routes = [
  {
    path: '/console',
    exact: true,
    component: LayoutConsole,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/show',
    exact: true,
    component: layoutShow,
  },
]
export default routes