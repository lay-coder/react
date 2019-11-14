
import LayoutConsole from 'views/console/layout-console'
import Login from 'views/login'
import layoutShow from 'views/show/layout-show'
import NotFound from 'views/404'
const routes = [
  {
    path: '/console',
    component: LayoutConsole,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/show',
    component: layoutShow,
  },
  {
    path: '/404',
    component: NotFound,
  },
]
export default routes