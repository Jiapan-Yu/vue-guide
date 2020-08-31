<template>
  <Test v-slot="slotProps">
    {{ slotProps.userName.firstName }}
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