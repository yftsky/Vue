<template>
  <div>
    <h2>Home</h2>
   <ul class="nav nav-tabs">
      <li>
        <router-link :to="{name: 'news'}">News</router-link>
      </li>
      <li>
        <router-link to="/home/message">Mesage</router-link>
      </li>
    </ul>
    <!-- 显示当前路由组件-->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    //组件的标识名称
    name:'Home'
  }
</script>

<style scoped>

 
</style>

