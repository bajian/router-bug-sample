import promise from 'es6-promise';
promise.polyfill();
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	user: {//全局共享用户信息
      isLogin:false,
      name:'未登录',
      pwd:'',
    }
  },
  mutations,
  actions
})

