<template>
  <div>
   
    <p> {{$store.state.const}}--times, count is {{$store.getters.evenOrOdd}} </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  /*
  *store对象：
  1.state：包含所有state数据的对象
  2.getter：包含所有getter计算属性的对象
  3.dispatch(actionName,data)异步和逻辑性方法用
  4.commit:(mutationName,data)直接更改状态数据的方法用
  ***/
    mounted() {
      console.log(this.$store)
    },

    methods:{
      increment(){
        this.$store.commit('INCREMENT')
      },
      decrement(){
        this.$store.commit('DECREMENR')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style scoped>

 
</style>


