import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login'
import HomePage from './views/HomePage'
import StartCount from './views/StartCount'
import DataCharts from './views/DataCharts'

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
  path: '/dataCharts',
  name: 'DataCharts',
  component: DataCharts,
  meta: { notRequireAuth: true }
},
{
  path: '/',
  name: 'home',
  component: HomePage,
  meta: { notRequireAuth: true }
}]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
