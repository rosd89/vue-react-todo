import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HiComponent from './components/HiComponent'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HiComponent
    }
  ]
})