<template>
  <div id="parent">
    
    <div id="child" name="child-component"><child-component @custom="onCustom" :msg="msg" /></div>
    <p v-if="emitted">{{msg}}</p>
    <div><button @click="add()" name='my-button'>add one</button> {{count}}</div>
  </div>
</template>

<script>
  import Child from './Child'

  export default {
    name: 'ParentComponent',
    components: { ChildComponent: Child },
    data() {
      return {
        emitted: false,
        msg: 'hello',
        count: 0
      }
    },
    methods: {
      onCustom(value) {
        this.emitted = true
        this.msg = value
      },
      add () {
        this.count++
      }
    }
  }
</script>