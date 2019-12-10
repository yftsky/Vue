
import Vue from 'vue'
import App from './App'


//全局注册组件
// Vue.component("App",App)

new Vue({
    //局部注册组件
  components:{//compnents注册组件(后面才能写组件标签)
    App:App
  },
  template:"<App/>"
}).$mount("#root")