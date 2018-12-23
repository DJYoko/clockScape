<template>
	<div class="clock_number">
		{{ value }}
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
	};

</script>

<style>
	.digital_clock {
		width: 300px;
		height: 100px;
		position: relative;
	}

</style>
