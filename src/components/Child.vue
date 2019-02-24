<template>
  <div>
    {msg}
  </div>
</template>

<script>
  export default {
    name: 'child-compoent',
    props: {
      msg: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>

</style>