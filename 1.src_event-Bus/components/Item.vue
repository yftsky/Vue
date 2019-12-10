<template>
  <li  :style="{background:bgColor}"  @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{//声明属性名和属性值的类型
      todo:Object,
      deleteTodo:Function,
      index:Number
    },
    data() {
      return {
        bgColor:"white",
        isShow:false
      }
    },

    methods:{
      handleEnter(isEnter){
        if (isEnter) {
           this.bgColor = '#aaa',
           this.isShow = true
        }else{
           this.bgColor = '#fff',
           this.isShow = false
        }
       
      },
      deleteItem(){
        if (window.confirm("确定删除吗?")) {
          this.deleteTodo(this.index)
        }
      }
      
    }
  }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
 
</style>
