import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          name: '地域詳細一覧',
          path: 'tables/area-tables',
          component: () => import('@/views/dashboard/tables/AreaTables'),
        },
        // information
        {
          name: '関連情報',
          path: 'information',
          component: () => import('@/views/dashboard/information/Information'),
        },
        // About
        {
          name: '当サイトについて',
          path: 'about',
          component: () => import('@/views/dashboard/about/About'),
        },
      ],
    },
  ],
})
