<template>
  <div>
    <h2>{{title}}</h2>
    <Blogs/>
    <ListTitle/>
  </div>
</template>  

<script>
 import Blogs from './components/Blogs'
 import ListTitle from './components/ListTitle'
  export default {
    data() {
      return {
        title:'App组件ddddddd'
      }
    },
    components:{
      Blogs,
      ListTitle
    }
  }
</script> 
<style >

</style>


