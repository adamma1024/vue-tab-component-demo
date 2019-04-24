import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import tabs from './vue-tabs.min.js'

Vue.use(iview)
Vue.use(tabs)

var app = new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
