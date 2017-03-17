import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import routes from './config/routes'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    routes
})
// const App = Vue.extend(app)

const app = new Vue({
    router:router,
    render:h=>h(App)
}).$mount('#app')
// new Vue({ store, router }).$mount('#app')
// new App().$mount('#myApp');
// router.start(App, 'body')
