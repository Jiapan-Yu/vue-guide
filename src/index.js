import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render(h) {
    return h(App)
  }
}).$mount(root)