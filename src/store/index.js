import Vue from 'vue'
import Vuex from 'vuex'

// 挂载vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    //存放公共数据
    age:18,
  }
})

export default store