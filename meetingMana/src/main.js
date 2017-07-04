import 'weui';
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import routes from './routes/routes.js';
import VueResource from 'vue-resource';

import './scss/main.scss';

import vueEventCalendar from './js';
Vue.use(vueEventCalendar, {locale: 'zh'}) //可以设置语言，支持中文和英文

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    routes
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#js-vue-app')
