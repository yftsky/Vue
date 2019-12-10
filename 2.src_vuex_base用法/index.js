
import Vue from 'vue'
import App from './App'
import store from './vuex/store'


//全局注册组件
// Vue.component("App",App)

new Vue({
    //局部注册组件
  components:{//compnents注册组件(后面才能写组件标签)
    App:App
  },
  template:"<App/>",
  store  //注册Store，所有组件都可以看到$store
}).$mount("#root")