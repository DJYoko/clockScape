<template>
	<div>
		<analog-clock :datetime="datetime" style="margin: 40px auto;"></analog-clock>
		<digital-clock :datetime="datetime" style="margin: 40px auto;"></digital-clock>
	</div>
</template>

<script>
	import analogClock from '../analogClock/';
	import digitalClock from '../digitalClock/';
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
		},
		computed: {
			datetime(){
				return new Date(this.unixtime);
			},
		}
	};

</script>