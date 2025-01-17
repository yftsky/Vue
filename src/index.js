
import Vue from 'vue'
import App from './App'
import  router from './router'


//全局注册组件
// Vue.component("App",App)
new Vue({
    //局部注册组件
  components:{//compnents注册组件(后面才能写组件标签)
    App:App
  },
  template:"<App/>",
  //配置对象的名不能改
  router//所有组件对象都能看到$router,都有了一个$route对象
}).$mount("#root")