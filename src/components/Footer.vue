<template>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="isCheckAll"/>
      </label>
      <span>
        <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
      </span>
      <button class="btn btn-danger" v-show="completeSize>0">清除已完成任务</button>
    </div>
</template>

<script type="text/ecmascript-6">

  export default {

    props:{
      todos:Array,
      checkAll:Function
    },

    data() {
      return {
        
      }
    },

    computed: {
      completeSize(){

        //Array.reduce 累计返回一个结果,参数:()=>{}:callback; 0:初始统计值
        //
        return this.todos.reduce((preTotal,todo,index)=>preTotal+(todo.completed ? 1 : 0),0)
      },
      isCheckAll:{
        get(){
            return  this.todos.length === this.completeSize && this.completeSize>0
        },
        set(value){
          this.ckeckAll(value)
        }
         
      }
      
    },
    

  }
</script>

<style scoped>
  /*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
 
</style>
