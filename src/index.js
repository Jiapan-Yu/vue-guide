import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Guide from './Guide.vue'
import './assets/styles/global.styl'

Vue.use(VueRouter)

const root = document.createElement('div')
document.body.appendChild(root)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: Guide },
  { path: '/app', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



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