<template>
  <div :class="todo.completed ? 'completed' : 'todo'">
    {{ todo.text }}
  </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      todo: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>