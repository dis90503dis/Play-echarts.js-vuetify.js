<template>
	<div class="nav_bar">
		<div class="nav">
			<v-btn class="no-uppercase" variant="outlined" v-for="(item, index) in navTitle" :key="index"
				@click="goPage(item.src)">
				{{ item.name }}
			</v-btn>
		</div>
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
	{ name: 'Vuetify.js  登入談窗以及全屏Loading', src: '/vuetifyjs' },
	{ name: '關於我們', src: '/about' },
	{ name: 'ChatBox', src: '/chatbox' },
]);

const goPage = (path) => {
	router.push(path);
};
</script>

<style scoped>
.nav {
	margin-left: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	height: 65px;
}

.no-uppercase {
	text-transform: none;
}

.nav_bar {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
</style>
