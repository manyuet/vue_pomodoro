import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login'
import homePage from './views/homePage'
import StartCount from './views/StartCount'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { notRequireAuth: true }
},
{
  path: '/startCount',
  name: 'StartCount',
  component: StartCount,
  meta: { notRequireAuth: true }
},
{
  path: '/',
  name: 'home',
  component: homePage,
  meta: { notRequireAuth: true }
}]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
