import Vue from 'vue'

Vue.component('todo-item', {
  template: `\
    <li>\
      {{ title }}\
      <button v-on:click="$emit('remove')">Remove</button>\
    </li>\
  `,
  props: ['title'],
})

// how to get app instance in chrome console just like
// the official doc? when debugging i can use app directly
var app = new Vue({
  el: '#app',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' },
    ],
  },
});