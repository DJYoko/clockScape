import 'babel-polyfill';
import Vue from 'vue';
import router from './router/';

// eslint-disable-next-line
new Vue({
    el: '#wrapper',
    router,
});