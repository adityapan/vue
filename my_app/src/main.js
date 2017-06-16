import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#testdiv',
  components: { App }
})
new Vue({
  el: '#lol',
  data: {
    message: "Hello Vue"
  }
})