<template>
    <v-card class="mx-auto" max-width="768">
        <v-img color="surface-variant" height="300" src="/public/cardkawa.webp" cover>
            <v-toolbar color="transparent">

                <v-menu :location="location">
                    <template v-slot:activator="{ props }">
                        <v-btn icon="$menu" v-bind="props"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item prepend-avatar="/public/kawa.png" subtitle="Kawa@google.com" title="Chiikawa">
                        </v-list-item>
                        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-toolbar-title class="text-h6" text="吉伊卡哇"></v-toolbar-title>

                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, i) in navTitle" :key="i">
                            <v-list-item-title style="cursor: pointer;" @click="goPage(item.src)">{{ item.title
                                }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </v-toolbar>
        </v-img>

        <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">Today</div>
            <v-timeline align="start" density="compact">
                <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                    size="x-small">
                    <div class="mb-4">
                        <div class="font-weight-normal">
                            <strong>{{ message.from }}</strong> @{{ message.time }}
                        </div>

                        <div>{{ message.message }}</div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>


</template>

<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter();

const navTitle = ref([
    { title: 'v-menu v-card', src: '/home' },
    { title: 'Vuetify.js  登入談窗以及全屏Loading', src: '/vuetifyjs' },
    { title: '關於我們', src: '/about' },
    { title: 'ChatBox', src: '/chatbox' },
]);
const items = [
    { text: 'My Files', icon: 'mdi-folder' },
    { text: 'Shared with me', icon: 'mdi-account-multiple' },
    { text: 'Starred', icon: 'mdi-star' },
    { text: 'Recent', icon: 'mdi-history' },
    { text: 'Offline', icon: 'mdi-check-circle' },
    { text: 'Uploads', icon: 'mdi-upload' },
    { text: 'Backups', icon: 'mdi-cloud-upload' },
]
const messages = [
    {
        from: 'You',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple-lighten-1',
    },
    {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
    },
    {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1',
    },
    {
        from: 'You',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple-lighten-1',
    },
    {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
    },
    {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1',
    },
]
const goPage = (path) => {
    router.push(path);
};
</script>
<style scoped></style>