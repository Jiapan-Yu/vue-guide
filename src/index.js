import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)

// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component()

new Vue({
  render(h) {
    return h(App)
  },
}).$mount(root)