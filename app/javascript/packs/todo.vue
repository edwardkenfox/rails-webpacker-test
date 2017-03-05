<template>
  <div id="app">
    <ul>
      <li v-for='(todo, index) in todos' >
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">
          {{ todo.title }}
        </span>
        <span @click="removeTodo(index)">✕</span>
      </li>
    </ul>
    <input type="text" v-model="newTodoTitle">
    <input type="button" value="Add Todo" @click="addTodo">
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      todos: [],
      newTodoTitle: '',
    }
  },

  methods: {
    addTodo: function() {
      if (!this.newTodoTitle) return false;

      this.todos.push({
        title: this.newTodoTitle,
        done: false,
      })

      this.newTodoTitle = ''
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1)
    }
  },

  created: function() {
    this.todos.push({
      title: 'do the dishes',
      done: false
    })
  }
}
</script>

<style scoped>
span.done {
  text-decoration: line-through;;
}
</style>
