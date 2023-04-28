<template>
	<label @tap="$emit('tap')" class="panel" :text="date" />
</template>

<style scoped>
.panel {
	background-color: darkred;
}
</style>

<script>
export default {
	data() {
		return {
			date: null
		};
	},
	mounted() {
		setInterval(() => {
			const date = new Date();
			this.date = date.toLocaleDateString();
		}, 0);
	}
}
</script>