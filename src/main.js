import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlNhbXVlbCIsImVtYWlsIjoic2FtdWVsQHRlc3QuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTcwNjU4MDU4OCwiZXhwIjoxNzA2ODM5Nzg4fQ.dC6tmdWPPYuiA-VkAFBxyLtk5RRv9iNk3QrgW25B50Q'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')