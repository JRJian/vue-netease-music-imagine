import Vue from 'vue'
import Router from 'vue-router'
import recommend from './views/recommend.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    }
  ]
})
