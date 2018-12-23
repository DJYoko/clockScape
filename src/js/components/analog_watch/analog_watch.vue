<template>
	<div class="analog_watch">
		<div class="background_display">
			<watch-marker v-for="(item, index) in 30" :key="index" :index="index" class="watch_marker">
			</watch-marker>
		</div>
		<div class="hands_container">
			<div class="hand hour"></div>
			<div class="hand minute"></div>
			<div class="hand second"></div>
		</div>
	</div>
</template>

<script>
	import watchMarker from './watch_marker';
	export default {
		name: 'analogWatch',
		components: {
			watchMarker,
		},
		props: {
			datetime: {
				type: Date,
				required: true,
			}
		}
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
