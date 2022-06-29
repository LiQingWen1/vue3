import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout/Sidebar/index'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'chart'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
