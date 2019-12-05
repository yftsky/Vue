<template>
  <div>
    <h1>LIST标题</h1>
    <ul>
        <List v-for="(list, index) in lists" :key="list.id" :list='list'/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import List from './List'
  export default {
    data() {
      return {
        lists:[
          {id:'a',content:'第一行'},
          {id:'b',content:'第二行'},
          {id:'c',content:'第三行'},
          {id:'d',content:'第四行'}
        ]
      }
    },
    components:{
      List
    }
  }
</script>

<style scoped>
    h1{
      color: rebeccapurple;
    }
 
</style>
