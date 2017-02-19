import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

import work from './components/work.vue'
import detail from './components/detail.vue'
import contact from './components/contact.vue'
import about from './components/about.vue'
import job from './components/job.vue'
import mwork from './components/m/work.vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: work }, 
        { path: '/work', component: work }, 
        { path: '/detail/:id', component: detail }, 
        { path: '/about', component: about }, 
        { path: '/contact', component: contact }, 
        { path: '/job', component: job }, 
        { path: '/m/work', component: mwork }, 
        { path: '*', component: work }
    ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
