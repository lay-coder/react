import Parent from 'components/Parent'
import ChildrenOne from 'components/ChildrenOne'
import ChildrenTwo from 'components/ChildrenTwo'
import GrandSonone from 'components/GrandSonone'
import GrandSonTwo from 'components/GrandSonTwo'
const routes = [
  {
    path: '/',
    component: Parent,
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