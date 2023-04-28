<template>
	<label @tap="$emit('tap')" class="panel">{{ battery }}%</label>
</template>

<style scoped>
.panel {
	background-color: orange;
}
</style>

<script>
import { Utils } from '@nativescript/core';

export default {
	data() {
		return {
			battery: '',
			batteryManager: null
		};
	},
	mounted() {
		this.batteryManager = Utils.android
		    .getApplicationContext()
    		.getSystemService(android.content.Context.BATTERY_SERVICE);

		setInterval(() => {
			this.battery = this.batteryManager.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
		}, 1000);
	}
}
</script>