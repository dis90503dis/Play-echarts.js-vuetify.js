<template>
	<div>
		<navBer />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
import navBer from './components/navbar.vue'
</script>

<style scoped></style>
