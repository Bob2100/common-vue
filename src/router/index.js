import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: "/IndexPage",
    component: Layout,
    children: [
      {
        path: "IndexPage",
        name: "IndexPage",
        component: () => import('../views/index/IndexPage.vue')
      },
      {
        path: "GitTeach",
        name: "GitTeach",
        component: () => import('../views/gitTeach')
      }
    ]
  },
  {
    path: '*',
    component: Layout
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(route) {
  const currentRoute = router.currentRoute;
  if (currentRoute.name === route.name) {
    return;
  }
  return originalPush.call(this, route).catch(err => err);
}

export default router
