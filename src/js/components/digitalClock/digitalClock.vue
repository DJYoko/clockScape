<template>
	<div class="digital_clock">
		<!--
<clock-number :value="0"></clock-number>
<clock-number :value="0"></clock-number>
<clock-colon></clock-colon>
<clock-number :value="0"></clock-number>
<clock-number :value="0"></clock-number>
<clock-colon></clock-colon>
<clock-number :value="0"></clock-number>
<clock-number :value="0"></clock-number>
-->
	</div>
</template>

<script>
	//	import clockNumber from './number';
	// import clockColon from './colon';
	export default {
		name: 'digitalClock',
		components: {
			//			clockNumber,
			// clockHand,
		},
		props: {
			datetime: {
				type: Date,
				required: true,
			}
		},
		computed: {
			datetimeObject() {
				const _datetime = new Date(this.datetime);
				return {
					hour: _datetime.getHours(),
					minute: _datetime.getMinutes(),
					second: _datetime.getSeconds(),
				};
			},
		},
	};

</script>

<style>
	.digital_clock {
		width: 300px;
		height: 100px;
		position: relative;
	}

</style>
