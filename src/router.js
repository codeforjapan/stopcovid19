import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Maps
        {
          name: '地域マップ',
          path: '',
          component: () => import('@/views/dashboard/maps/AreaMaps'),
        },
        // Tables
        {
          name: '地域一覧',
          path: 'tables/area-tables',
          component: () => import('@/views/dashboard/tables/AreaTables'),
        },
        // Dashboard
        {
          name: 'ダッシュボード',
          path: 'dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
      ],
    },
  ],
})
