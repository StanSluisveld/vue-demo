import Vue from 'vue';
import App from './components/App';
import './css/style.css';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


new Vue({
    el: '#main',
    render: h => h(App)
})

