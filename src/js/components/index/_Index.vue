<template>
	<div id="view">
		<select name="region" v-model="region">
			<option value="-1" disabled>select Region</option>
			<option v-for="(region, index) in regions" :key="index" :value="index">{{region.label}}</option>
		</select>
		<analog-clock :datetime="this.utod(currentUnixtime)" style="margin: 40px auto;"></analog-clock>
		<digital-clock :datetime="this.utod(currentUnixtime)" style="margin: 40px auto;"></digital-clock>
	</div>

</template>
<script>
	import CONSTANTS from '../../utils/constants';
	import analogClock from '../analogClock/';
	import digitalClock from '../digitalClock/';
	import {mapState} from 'vuex';

	export default {
		components: {
			analogClock,
			digitalClock,
		},
		data() {
			return {
				regions: CONSTANTS.REGIONS,
			}
		},
		computed: {
			...mapState([
				'region',
				'datetime',
				'currentUnixtime',
				'initServerUnixtime',
				'initDeviceUnixTime',
			]),
		},
		created() {
			const payload = {};
			payload.callback = ()=> {
				console.log('callback');
				setInterval(()=> {
					this.$store.dispatch('updateTime');
				}, 1000);
			};
			this.$store.dispatch('loadServerTime', payload);
			
		},
		methods: {
		   utod (unixtime) {
			  return new Date(unixtime);
		   }
		}
	};

</script>

<style lang="scss">
	#view {
		background-color: #000;
		height: 100%;
		text-align: center;
	}

</style>
