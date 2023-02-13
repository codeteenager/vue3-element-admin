import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: async () => await import('../views/home/index.vue')
}, {
  path: '/login',
  name: 'login',
  component: async () => await import('../views/login/index.vue')
}]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

export default router
