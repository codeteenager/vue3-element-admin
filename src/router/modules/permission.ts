import { RouterView, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw =
  {
    path: 'product',
    name: 'product',
    component: RouterView,
    children: [
      // {
      //   path: '',
      //   name: '',
      //   component: async () => await import('')
      // }
    ]
  }

export default routes
