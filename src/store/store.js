import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Storte({
  state:{
    //类似存储全局变量的数据
  },
  mutations:{
    //提供存储设置state数据的方法
  },
  actions:{
    //提供跟后台接口打交道的方法，并调用mutations提供的方法
  },
  getters:{
    //提供用来获取state数据的方法
  },
  module: {

  }
})
