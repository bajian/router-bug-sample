// import { set } from 'vue' //array push : set(arr,key,value)
import * as types from './mutation-types'

export default {
  mutationA (state, user) {
  	console.log('mutationA');
    state.user=user
  },
  

}

