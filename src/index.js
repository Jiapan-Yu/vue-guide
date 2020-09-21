import Vue from 'vue'
import * as echarts from 'echarts'

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});

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