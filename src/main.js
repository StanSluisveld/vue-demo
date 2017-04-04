import Vue from 'vue';
import App from './components/App';
import './css/style.css';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

Vue.component('Header', Header);
Vue.component('Order', Order);
Vue.component('Inventory', Inventory);

new Vue({
    el: '#main',
    render: h => h(App)
    // template: "<StorePicker />",
    // components: {StorePicker}
})

