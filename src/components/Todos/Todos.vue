<template>
  <div>
    <TodoItem 
      v-for="id in $store.state.ids"
      :key="id"
      :todo="$store.state.todos[id]"
      @click.native="complete(id)"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem/TodoItem'
  export default {
    name: 'todo-items',
    components: { TodoItem },
    methods: {
      complete (id) {
        this.$store.commit('TOGGLE_COMPLETE', { id })
      }
    }
  }
</script>

<style scoped>

</style>