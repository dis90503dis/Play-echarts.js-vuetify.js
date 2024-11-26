import { createApp } from 'vue'
import App from './App.vue'

// vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // 引入 Vuetify 样式
import '@mdi/font/css/materialdesignicons.css'; // 引入 Material Design Icons
const vuetify = createVuetify();

// router
import { createRouter, createWebHistory } from 'vue-router'
import home from './view/home.vue'
import about from './view/about.vue'
import news from './view/news.vue'
const routes = [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/news', component: news },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App)
    .use(router)  // 使用 router
    .use(vuetify) // 註冊 Vuetify
    .mount('#app');
