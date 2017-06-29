import 'weui';
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import routes from './routes/routes.js';
import VueResource from 'vue-resource';

import './scss/main.scss';

Vue.use(VueRouter)
Vue.use(VueResource)

// function getCookie(name) {
//     var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
//     if (arr = document.cookie.match(reg))
//         return unescape(arr[2]);
//     else
//         return null;
// }


// Vue.http.headers.common['CASTGC'] = getCookie('CASTGC');

const router = new VueRouter({
    routes
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#js-vue-app')