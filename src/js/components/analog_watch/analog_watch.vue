<template>
	<div class="analog_watch">
		<div class="background_display">
			<watch-marker v-for="(item, index) in 30" :key="index" :index="index" class="watch_marker">
			</watch-marker>
		</div>
		<div class="hands_container">
			<watch-hand hand-type="hour" :value="datetimeObject.hour"></watch-hand>
			<watch-hand hand-type="minute" :value="datetimeObject.minute"></watch-hand>
			<watch-hand hand-type="second" :value="datetimeObject.second"></watch-hand>

		</div>
	</div>
</template>

<script>
	import watchMarker from './watch_marker';
	import watchHand from './hand';
	export default {
		name: 'analogWatch',
		components: {
			watchMarker,
			watchHand,
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
	.analog_watch {
		width: 300px;
		height: 300px;
		position: relative;
	}

	.hands_container,
	.background_display {
		width: 100%;
		height: 100%;
	}

	.background_display {
		position: relative;
	}

	.hands_container {
		position: absolute;
		top: 0;
		left: 0;
	}

</style>
