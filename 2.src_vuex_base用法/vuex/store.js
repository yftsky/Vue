  //引入vue
  import Vue from 'vue'
  //引入vue核心模块vuex
  import Vuex from 'vuex'
  //声明使用vuex
  Vue.use(Vuex)

//相当于data的对象，包含多个可变的属性数据
  const state = {
    //初始化状态数据
      const : 0
  }
//一个包含多个用于直接更新(state)状态数据的方法的对象
//mutations不包含异步和逻辑性方法
//参数state  
const mutations = {
    //增加的mutations
      INCREMENT (state){
        state.const++
      },
      //减少的mutations
      DECREMENR(state){
        state.const--
      }
  }
//一个包含多个间接更新数据的方法的对象
//包含异步和逻辑性方法
  const actions = {
    // increment(context){
    //   context.commit('INCREMENT')
    // },
//简化代码
    increment({commit}){
      commit('INCREMENT')
    },
    decrement({commit}){
      commit('DECREMENR')
    },
    incrementIfOdd({commit,state}){
      if (state.const % 2 ===1) {
        commit('INCREMENT')
      }
    },
    incrementAsync({commit}){
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000); 
    },
  }
//一个包含n个基于state数据的getter计算属性的方法的对象
//参数state 
  const getters = {
    eventOrOdd(state){
      return state.const % 2 ===1 ? '奇数' : '偶数'
    }
  }

  export default new Vuex.Store ({
      state,
      mutations,
      actions,
      getters

  })