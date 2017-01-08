//获取state的变量,不管多简单都要写成getter方法，而不是直接引用，方便项目后续统一改动！
//
 // import ls from '../utils/ls.js'
 // import {lskey_item,lskey_item_idex,lskey_curr_article} from '../persistent.js'

//所有栏目
export function getUser (state) {
  return state.user 
}
