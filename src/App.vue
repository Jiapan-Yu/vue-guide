<template>
  <Test>
    <!-- 我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字 -->
    <!-- 这儿我们选择将包含所有插槽 prop 的对象命名为 slotProps，但 -->
    <!-- 你也可以使用任意你喜欢的名字 -->
    <template v-slot:default="slotProps">
      {{ slotProps.userName.firstName }}
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