
import ChildrenOne from 'components/ChildrenOne'
import ChildrenTwo from 'components/ChildrenTwo'
import GrandSonone from 'components/GrandSonone'
import GrandSonTwo from 'components/GrandSonTwo'
import LayoutConsole from 'views/console/layout-console'
const routes = [
  {
    path: '/',
    component: LayoutConsole,
    redirect: '/one',
  },
  {
    path: '/one',
    component: ChildrenOne,
    routes: [
      {
        path: '/one/grandson',
        component: GrandSonone,
        routes: [
          {
            path: '/one/grandson/son',
            component: GrandSonTwo,
          },
        ],
      },
    ],
  },
  {
    path: '/two',
    component: ChildrenTwo,
    routes: [
      {
        path: '/two/grandson',
        component: GrandSonTwo,
      },
    ],
  },
]
export default routes