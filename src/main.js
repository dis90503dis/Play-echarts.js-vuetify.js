import { createApp } from 'vue'
import App from './App.vue'

// vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // 導入所有組件
import * as directives from 'vuetify/directives'; // 導入所有指令

const vuetify = createVuetify({
    components,
    directives,
});

// router
import { createRouter, createWebHistory } from 'vue-router'
import home from './view/home.vue'
import about from './view/about.vue'
import vuetifyjs from './view/vuetifyjs.vue'
const routes = [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/vuetifyjs', component: vuetifyjs },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App)
    .use(router)  // 使用 router
    .use(vuetify) // 註冊 Vuetify
    .mount('#app');
