<template>
	<label @tap="$emit('tap')" class="panel">{{ hour }}</label>
</template>

<style scoped>
.panel {
	background-color: green;
}
</style>

<script>
export default {
	data() {
		return {
			hour: null
		};
	},
	mounted() {
		setInterval(() => {
			const date = new Date();
			const hours = this.zeroBefore(date.getHours());
			const minutes = this.zeroBefore(date.getMinutes());
			const seconds = this.zeroBefore(date.getSeconds());
			this.hour = `${hours}:${minutes}:${seconds}`;
		}, 0);
	},
	methods: {
		zeroBefore(number) {
			return number < 10 ? '0' + number : number;
		}
	}
}
</script>