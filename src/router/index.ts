import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

let routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: { title: '404' }
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '' }
  }
]

// 模块化路由，将router 文件夹下的ts文件内路由自动导入
const routesModules = import.meta.globEager('./**/*.ts')
const modules: Array<RouteRecordRaw> = []
Object.keys(routesModules).forEach((key) => {
  modules.push(...routesModules[key].default)
})

routes = routes.concat(modules)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to: RouteLocationNormalized) => {
  // if (store.getters['userInfo/getToken'] || to.path === '/login') return true
  // return '/login'
  return to.path === '/login' || true
})

export default router
