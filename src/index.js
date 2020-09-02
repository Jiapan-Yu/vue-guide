import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)

// 定义一个混入对象
var myMixin = {
  data: function() {
    return {
      message: 'message in mixin',
      foo: 'abc',
    };
  },
}

new Vue({
  render(h) {
    return h(App)
  },
  data: {
    message: 'message in component',
    bar: 'qwer',
  },
  created: function() {
    console.log(this.$data);
  },
  mixins: [myMixin],
}).$mount(root)