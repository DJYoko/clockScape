<template>
	<div id="clocks_wrapper">
		<analog-clock :datetime="datetime" style="margin: 0 auto 20px;"></analog-clock>
		<digital-clock :datetime="datetime"></digital-clock>
	</div>
</template>

<script>
	import CONSTANTS from '@js/utils/constants';
	import analogClock from '@js/components/analogClock/';
	import digitalClock from '@js/components/digitalClock/';
	export default {
		name: 'clocks',
		components: {
			analogClock,
			digitalClock,
		},
		props: {
			unixtime: {
				type: Number,
				required: true,
			},
			region: {
				type: String,
				required: true,
			},
		},
		computed: {
			datetime(){
				const deviceTimezoneOffset = 60 * (new Date()).getTimezoneOffset(); // second
				const selectedRegionTimezoneOffset = CONSTANTS.REGIONS[this.region].offset; //second
				const selectedRegionLocaltime = this.unixtime + (deviceTimezoneOffset + selectedRegionTimezoneOffset) * 1000; // milli second
				return new Date(selectedRegionLocaltime);
			},
		}
	};

</script>