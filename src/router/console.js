import LayoutConsole from 'views/console/layout-console/index'
import LayoutConsoleOne from 'views/console/one'
import LayoutConsoleTwo from 'views/console/two'
import LayoutConsoleThree from 'views/console/three'
const consoleRouters = [
  {
    path: '/console',
    component: LayoutConsole,
    routes: [
      {
        path: '/console/one',
        component: LayoutConsoleOne,
      },
      {
        path: '/console/two',
        component: LayoutConsoleTwo,
        routes: [
          {
            path: '/console/two/three',
            component: LayoutConsoleThree,
          }
        ]
      }
    ]
  },
]
export default consoleRouters