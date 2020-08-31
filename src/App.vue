<template>
  <Test>
    <template #header="{userName}">
      {{ userName.firstName }}
    </template>
    <template #footer="{hobbyData}">
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