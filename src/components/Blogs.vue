<template>
  <div>
    <h2>Blog 列表</h2>
    <ul>
      <!-- 子组件遍历data存入标签 -->
      <Blog v-for="(blog, index) in blogs" :key="blog.id" :blog='blog'/>
    </ul>
  </div>
</template>

<script>
import Blog from './Blog'
export default {
data () {
return{
  blogs:[
        {id:1,title:'Blog1111'},//标题名字是字符串形式
        {id:2,title:'Blog2222'},
        {id:3,title:'Blogs333'}
      ]
    }
  },
  components:{
    Blog
  }
}
</script>

<style  scoped>
  h2 {
    color: red
  }
</style>