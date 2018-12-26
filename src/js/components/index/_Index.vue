<template>
	<div id="view">
		<select name="region" v-model="region">
			<option value="-1" disabled>select Region</option>
			<option v-for="(region, index) in regions" :key="index" :value="index">{{region.label}}</option>
		</select>
		<clocks :unixtime="currentUnixtime"></clocks>
	</div>

</template>
<script>
	import CONSTANTS from '../../utils/constants';
	import clocks from '../clocks/';
	import {mapState} from 'vuex';

	export default {
		components: {
			clocks,
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
				setInterval(()=> {
					this.$store.dispatch('updateTime');
				}, 1000);
			};
			this.$store.dispatch('loadServerTime', payload);
			
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
