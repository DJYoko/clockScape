<template>
	<div id="view">
		<select name="region" v-model="region">
			<option value="-1" disabled>select Region</option>
			<option v-for="(region, index) in regions" :key="index" :value="index">{{region.label}}</option>
		</select>
		<analog-clock :datetime="datetime" style="margin: 40px auto;"></analog-clock>
		<digital-clock :datetime="datetime" style="margin: 40px auto;"></digital-clock>
	</div>

</template>
<script>
	import CONSTANTS from '../../utils/constants';
	import analogClock from '../analogClock/';
	import digitalClock from '../digitalClock/';
	import {
		mapState
	} from 'vuex';

	export default {
		components: {
			analogClock,
			digitalClock,
		},
		data() {
			return {
				current: {
					region: '',
					datetime: this.currentDatetime,
				},
				regions: CONSTANTS.REGIONS,
			}
		},
		computed: {
			...mapState([
				'region',
				'datetime'
			]),
			currentDatetime() {
				return new Date();
			},
		},
		created() {
			this.$store.dispatch('loadServerTime');
		},
		mounted() {
			setInterval(() => {
				this.$store.dispatch('updateTime', new Date());
			}, 1000);
		},
	};

</script>

<style lang="scss">
	#view {
		background-color: #000;
		height: 100%;
		text-align: center;
	}

</style>
