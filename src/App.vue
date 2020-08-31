<template>
  <div>
    <div>大家好我是父组件</div>
    <Test>Save</Test>
  </div>
</template>

<script>
import Test from './Test.vue'
export default {
  components: {
    Test,
  }
}
</script>