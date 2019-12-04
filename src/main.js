import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueI18n from 'vue-i18n'

import _ from 'lodash'
Vue.prototype._ = _
Vue.config.productionTip = false

Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件
const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./VueI18n/language-zh'),
    'en': require('./VueI18n/language-en')
  }
})

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
