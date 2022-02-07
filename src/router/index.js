import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: 'CommonVue',
    component: Layout,
    children: [
      {
        path: 'CommonVue',
        name: 'CommonVue',
        component: () => import('../views/index/CommonVue.vue'),
      },
      {
        path: 'GitTeach',
        name: 'GitTeach',
        component: () => import('../views/gitTeach'),
      },
      {
        path: 'UseBoCharts',
        name: 'UseBoCharts',
        component: () => import('../views/chartDemo/UseBoCharts.vue'),
      },
      {
        path: 'UseBase',
        name: 'UseBase',
        component: () => import('../views/UseBase.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/index',
  },
]

const router = new VueRouter({
  routes,
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(route) {
  const currentRoute = router.currentRoute
  if (currentRoute.name === route.name) {
    return
  }
  return originalPush.call(this, route).catch((err) => err)
}

export default router
