<template>
	<Page actionBarHidden="true">
		<StackLayout>
			<Date @tap="onDateTap()" v-if="dateVisible" width="100%" :height="dateHeight + '%'" />
			<Hour @tap="onHourTap()" v-if="hourVisible" width="100%" :height="hourHeight + '%'" />
			<Battery @tap="onBatteryTap()" v-if="batteryVisible" width="100%" :height="batteryHeight + '%'" />
		</StackLayout>
	</Page>
</template>

<script>
import { setFullscreen } from '../utils';
import Date from '../components/Date.vue';
import Hour from '../components/Hour.vue';
import Battery from '../components/Battery.vue';

export default {
	components: {
		Date,
		Hour,
		Battery
	},
	data() {
		return {
			dateHeight: 100 / 3,
			hourHeight: 100 / 3,
			batteryHeight: 100 / 3,

			dateVisible: true,
			hourVisible: true,
			batteryVisible: true,
		};
	},
	mounted() {
		this.setFullscreen();
	},
	beforeUpdate() {
		this.setFullscreen();
	},
	methods: {
		setFullscreen,
		onDateTap() {
			this.dateHeight = this.flipHeight(this.dateHeight);
			this.hourVisible = !this.hourVisible;
			this.batteryVisible = !this.batteryVisible;
		},
		onHourTap() {
			this.dateVisible = !this.dateVisible;
			this.hourHeight = this.flipHeight(this.hourHeight);
			this.batteryVisible = !this.batteryVisible;
		},
		onBatteryTap() {
			this.dateVisible = !this.dateVisible;
			this.hourVisible = !this.hourVisible;
			this.batteryHeight = this.flipHeight(this.batteryHeight);
		},
		flipHeight(height) {
			return height == 100 ? 100 / 3 : 100;
		}
	}
}
</script>