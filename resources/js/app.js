require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import App from './app.vue'
import Login from './vue/Login'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Routes = [
    {
        name: 'Login',
        path: '/',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: Routes
})

const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');