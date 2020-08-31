<template>
  <Test>
    <div>大家好我是父组件</div>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's footer info</p>
    </template>
  </Test>
</template>

<script>
import Test from './Test.vue'
export default {
  components: {
    Test,
  }
}
</script>