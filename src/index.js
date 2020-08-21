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
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
})

// how to get app instance in chrome console just like
// the official doc? when debugging i can use app directly
var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' },
    ],
  },
})