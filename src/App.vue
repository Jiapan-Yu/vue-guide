<template>
  <div id="app">
    <h1>My Todo App!</h1>
    <div id="test">{{text}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'abcd'
    }
  }
}
</script>

<style>
#test {
  color: orange;
  font-size: 25px;
}
</style>