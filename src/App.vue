<template>
	<v-app :theme="theme">
		<v-app-bar>
			<navBer />
			<v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
				:text="theme === 'light' ? '深夜' : '明亮'" slim @click="onClick">
			</v-btn>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup>
import navBer from './components/navbar.vue'
import { ref } from 'vue'
const theme = ref('light')
const onClick = () => {
	theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped></style>
