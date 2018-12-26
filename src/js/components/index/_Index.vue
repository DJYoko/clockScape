<template>
	<div id="view">
		<region-selector :region="region" @change="onRegionChange"></region-selector>
		<clocks :unixtime="currentUnixtime" :region="region"></clocks>
	</div>

</template>
<script>
	import CONSTANTS from '../../utils/constants';
	import clocks from '../clocks/';
	import regionSelector from '../regionSelector/';
	import {mapState} from 'vuex';

	export default {
		components: {
			clocks,
			regionSelector,
		},
		data() {
			return {
				regions: CONSTANTS.REGIONS,
			}
		},
		computed: {
			...mapState([
				'region',
				'currentUnixtime',
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
		methods: {
			onRegionChange(payload) {
				this.$store.dispatch('selectRegion', payload);
			},
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
