import Vue from 'vue';
import './css/style.css';

import Store from './components/Store';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

new Vue({
    el: '#main',
    render: h => h(Store)
})

