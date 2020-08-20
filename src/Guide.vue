<template>
  <div class="vuejs-guide">
    <a href="https://cn.vuejs.org/v2/guide/index.html">{{intro}}</a>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: "介绍"
    };
  }
};
</script>

<style lang="less" scoped>
.vuejs-guide {
  color: red;
}
</style>