<template>
	<div class="hand" :style="handStyle" :class="handClass"></div>
</template>

<script>
	const HANDS_TYPES = [
		'hour',
		'minute',
		'second',
	];
	export default {
		name: 'watchHand',
		props: {
			handType: {
				type: String,
				required: true,
			},
			value: {
				type: Number,
				required: true,
			},
		},
		computed: {
			handClass() {
				return {
					'hour': this.handType === 'hour',
					'minute': this.handType === 'minute',
					'second': this.handType === 'second',
				}
			},
			handStyle() {
				return {
					transform: 'rotateZ(' + this.index * 6 + 'deg)',
				}
			},
		}
	};

</script>
<style>
	.hand {
		height: 50%;
		width: 1px;
		border: 2px solid #fff;
		border-left: none;
		border-right: none;
		position: absolute;
		top: 0%;
		left: 50%;
	}

</style>
