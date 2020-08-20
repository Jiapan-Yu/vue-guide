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

new Vue({
  router,
  render(h) {
    return h(Guide)
  }
}).$mount(root)