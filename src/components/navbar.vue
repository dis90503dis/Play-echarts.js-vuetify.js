<template>
	<div class="nav">
		<v-btn variant="outlined" v-for="(item, index) in navTitle" :key="index" @click="goPage(item.src)">
			{{ item.name }}
		</v-btn>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { VBtn } from 'vuetify/components';  // 正確引入 Vuetify 的 VBtn
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const router = useRouter();

const navTitle = ref([
	{ name: '首頁', src: '/home' },
	{ name: '最新消息', src: '/news' },
	{ name: '關於我們', src: '/about' },
]);

const goPage = (path) => {
	router.push(path);
};
</script>

<style scoped></style>
