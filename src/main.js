import Vue from 'vue'
import App from './App.vue'
import Test12 from "./components/Test12";

Vue.component('Test12', Test12)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
