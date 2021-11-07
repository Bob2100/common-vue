import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "GitTeach",
        name: "GitTeach",
        component: () => import('../views/GitTeach.vue')
      },
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

export default router
