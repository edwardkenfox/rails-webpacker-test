import Vue from 'vue'
import Todo from './Todo.vue'

Vue.config.devtools = true

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('todos'))
  const app = new Vue({
    el: 'todos',
    template: '<Todo/>',
    components: { Todo }
  })
})
