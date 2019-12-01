import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import tasks from './modules/tasks'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userInfo,
    tasks
  }
})
