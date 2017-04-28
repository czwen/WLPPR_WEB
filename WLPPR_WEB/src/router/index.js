import Vue from 'vue'
import Router from 'vue-router'
import ThemeList from '@/pages/ThemeList'
import WallpaperList from '@/pages/WallpaperList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThemeList',
      component: ThemeList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/wallpapers/:themeId',
      name: 'WallpaperList',
      component: WallpaperList
    }
  ]
})
