import './scss/main.scss';
import Vue from 'vue';
import App from './app.vue';

const app = new Vue({
    render: h => h(App)
}).$mount('#js-vue-app')
