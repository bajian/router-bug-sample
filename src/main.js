// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import store from './vuex/store'

import VueRouter from 'vue-router'
import route from './route'
import App from './views/App'

// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)
// 
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
import 'flex.css';
// Vue.use(Mint);
/* eslint-disable no-new */
Vue.use(VueRouter)


var router = new VueRouter({ 
  routes: route
})


// window.s=store
//s.dispatch({
//   type: 'setUserLogin',
//   amount: 10,q:'aaaa'
// })
// 
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

