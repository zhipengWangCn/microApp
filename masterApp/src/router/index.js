import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [{
  path: '/',
  name: 'vue',
  component: () => import('./../components/vue.vue')
}, {
  path: '/react',
  name: 'react',
  component: () => import('./../components/react.vue')
}]

export default new Router({
  routes: router,
  mode: 'history'
})
