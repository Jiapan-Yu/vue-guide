import Vue from 'vue'

Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    let s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  },
});

// 创建根 Vue 实例 
var app = new Vue({
  el: '#app',
  data: function () {
    return {
      direction: 'left',
    };
  },
});