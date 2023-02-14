import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import PermissionRoutes from './modules/permission'

const routes: RouteRecordRaw[] = [{
  path: '/',
  component: AppLayout,
  children: [
    {
      path: '', // 默认子路由
      name: 'home',
      component: async () => await import('../views/home/index.vue')
    },
    PermissionRoutes
  ]
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
