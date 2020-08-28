import Vue from 'vue'

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `,
})

// how to get app instance in chrome console just like
// the official doc? when debugging i can use app directly

// 创建根 Vue 实例 
var app = new Vue({
  el: '#app',
  data: {
    lovingVue: true,
  },
  computed: {
    toggle: function() {
      return this.lovingVue
    },
  },
});

console.log(app.toggle)