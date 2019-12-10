<template>
 <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"

    @keyup.enter="add"
    v-model="title"
    />
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
    //声明接收标签属性
    props:{
        addTodo:{
          //类型
          type:Function,
          //必要性
          required:true
        }
    },
    data() {
      return {
        title:''
      }
    },

    methods: {
      //enter监听的回调
      add(){
        const title = this.title.trim()
        if (!title) return
        const todo = {
          id:Date.now(),
          title,
          completed:false
        }
        this.addTodo(todo)  
        this.title = ''
      }
    },
  }
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}


 
</style>
