<template>
	<div id="view">
		<select name="region" v-model="region">
			<option value="-1">select Region</option>
			<option value="en">London</option>
			<option value="us">New York</option>
			<option value="ja">Tokyo</option>
		</select>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				changed: {
					region: '',
					datetime: {}
				}
			}
		},
		computed: {
			...mapState([
				'region',
				'datetime'
			]),
		},
	};

</script>

<style lang="scss">
	#view {
		background-color: #000;
		height: 100%;
	}

</style>
