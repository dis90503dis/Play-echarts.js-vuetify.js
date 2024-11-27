<template>
	<v-app style="height: 68px; margin-bottom: 10px;" :theme="theme">
		<v-app-bar class="px-3 ">
			<div class="nav_bar">
				<div class="nav">
					<v-btn class="no-uppercase" variant="outlined" v-for="(item, index) in navTitle" :key="index"
						@click="goPage(item.src)">
						{{ item.name }}
					</v-btn>
				</div>
				<v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
					:text="theme === 'light' ? '深夜' : '明亮'" slim @click="onClick">
				</v-btn>
			</div>
		</v-app-bar>
	</v-app>
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
]);

const goPage = (path) => {
	router.push(path);
};
const theme = ref('light')
const onClick = () => {
	theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.nav {
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
