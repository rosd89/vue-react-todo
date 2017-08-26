import Vue from 'vue';
import router from './router';

import App from './components/App.vue';

const v = new Vue({
    el: '#app',
    router,
    components: {App},
    data: {name: 'World'},
    template: '<App/>'
});
