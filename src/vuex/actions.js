// 应用级的状态集中放在 store 中。

// 改变状态的唯一方式是提交mutations，这是个同步的事务。

// 异步逻辑应该封装在action 中。
//观察者分发事件给订阅者


export const setUserLogin = ({ commit },user) => {
  console.log('action setUserLogin');
  commit('mutationA', user)
}


export const setUserLogin2 = ({ commit },user) => {
  setTimeout(()=>{
  	commit('mutationA', user)
  }, 5000);
}
