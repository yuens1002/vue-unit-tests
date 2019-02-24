<template>
  <div>
    <input v-model="newTodoText" @keydown.enter="createTodo"/>
  </div>
</template>

<script>
  export default {
    name: 'todo-add-form',
    data () {
      return {
        newTodoText: ''
      }
    },
    methods: {
      createTodo () {
        this.$store.commit('CREATE_TODO', { 
          text: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  }
</script>

<style scoped>

</style>