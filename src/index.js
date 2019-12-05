
// import logo from "./assets/imgs/logo.png"
// import  './assets/css/my.css'


// const image = new Image()
// image.src  = logo
// document.body.appendChild(image)
// document.getElementById('root').innerHTML = '<h1>Hello333</h1>'

import Vue from 'vue'
import App from './App.vue'
//全局注册组件
// Vue.component("App",App)



new Vue({
    //局部注册组件
  component:{//注册组件(后面才能写组件标签)
    App:App
  },
  template:"<App/>"
}).$mount("#root")