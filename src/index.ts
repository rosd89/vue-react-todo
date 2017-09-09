import Vue from 'vue'
import HelloComponent from './components/HelloComponent'

import router from './router'

new Vue({
  el: '#app',
  router,
  template: `
    <div>
      Name: <input type="text" v-model="name">
      <hello-component :name="name" :initialEnthusiasm="5"></hello-component>
      
      <router-view></router-view>
    </div>`,
  data: {
    name: 'World'
  },
  components: {
    HelloComponent
  }
})