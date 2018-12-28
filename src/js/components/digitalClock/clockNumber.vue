<template>
	<div class="clock_number" :style="numberStyle">
	</div>
</template>

<script>
	export default {
		name: 'clockNumber',
		props: {
			value: {
				type: Number,
				required: true,
			}
		},
		computed: {
			numberStyle() {
				const style = {
					backgroundPosition: this.value * 10 + '%' + ' 50%',
				};
				return style;
			},
		}
	};

</script>

<style lang="scss">
	.clock_number {
		width: 16px;
		height: 25px;
		background-image: url("img/digital_number.png");
		background-size: auto 100%;
		background-repeat: no-repeat;
	}

</style>
