import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';
import App from './App.vue';
import HomePage from "./pages/HomePage.vue";
import ArticlePage from "./pages/ArticlePage.vue";
import AboutPage from "./pages/AboutPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/article/:id', component: ArticlePage }
    ],
})

const app = new Vue({
    store,
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
