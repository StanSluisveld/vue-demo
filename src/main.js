import Vue from 'vue';
import App from './components/App';
import './css/style.css';

import StorePicker from './components/StorePicker';

new Vue({
    el: '#main',
    template: "<StorePicker />",
    components: {StorePicker}
})