<template>
	<div class="watch_marker" :style="markerStyle" :class="markerClass"></div>
</template>

<script>
	export default {
		name: 'watchMarker',
		props: {
			index: {
				type: Number,
				required: true,
			}
		},
		computed: {
			markerClass() {
				return {
					bold: this.index % 15 === 0,
				}
			},
			markerStyle() {
				return {
					transform: 'rotateZ(' + this.index * 6 + 'deg)',
				}
			},
		}
	};

</script>
<style>
	.watch_marker {
		width: 100%;
		height: 1px;
		border: 2px solid #fff;
		border-top: none;
		border-bottom: none;
		position: absolute;
		top: 50%;
		left: 0;
	}

	.bold {
		border-width: 8px;
	}

</style>
