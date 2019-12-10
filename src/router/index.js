//路由器对象模块
import Vue from 'vue'
//引入路由器
import VueRoute from 'vue-router'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'

//声明使用vue插件
Vue.use(VueRouter)

export default  new VueRouter({
  //默认暴露所有路由
  routes:[
    //每个路由是一个对象
    {
      //路由路径
      path:'/about',
      //注册一个路由
      component:About
    },
    {
      //路由路径
      path:'/home',
      //注册一个路由
      component:Home
    },
    {
      path:'/',
      redirect:'/about'

    }
  ]
})