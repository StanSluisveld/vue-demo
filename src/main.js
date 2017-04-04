import Vue from 'vue';
import './css/style.css';
import VueRouter from 'vue-router';

import App from './components/App';
import Store from './components/Store';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: StorePicker},
    {path: '/store', component: Store}
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#main',
    router,
    render: h => h(App)
})

