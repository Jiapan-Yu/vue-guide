<template>
  <Test>
    <template v-slot:header="{userName}">
      {{ userName.firstName }}
    </template>
    <template v-slot:footer="{hobbyData}">
      {{ hobbyData.fruit }}
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