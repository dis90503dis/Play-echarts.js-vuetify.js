<template>
	<v-app>
		<v-main>
			<navBer />
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup>
import navBer from './components/navbar.vue'
</script>

<style scoped></style>
