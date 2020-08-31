<template>
  <Test>
    <template v-slot:header="slotProps">
      {{ slotProps.userName.firstName }}
    </template>
    <template v-slot:footer="slotProps">
      {{ slotProps.hobbyData.fruit }}
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