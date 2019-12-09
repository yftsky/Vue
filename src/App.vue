<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo='addTodo'/>
      <List :todos='todos' :deleteTodo="deleteTodo"/>
      <Footer :todos='todos'
        :checkAll = "checkAll"
      /> 
    </div>
  </div>
</template>  

<script>
 import Header from '@/components/Header.vue'
 import Footer from '@/components/Footer.vue'
 import List from '@/components/List.vue'

  export default {
  data() {
    return {
      todos:[
        {id:1,title:"A",completed:false},
        {id:2,title:"B",completed:true},
        {id:3,title:"C",completed:false},
        {id:4,title:"D",completed:true}
      ]
    }
  },
  // mounted() {
  //   setTimeout(()=>{
  //     this.todos = readTodos()
  //   },1000);
  // },
  methods: {
    //添加todo
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    ckeckAll(){

    }
  },
    components:{
      Header,
      Footer,
      List
    }
  }
</script> 
<style >
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


