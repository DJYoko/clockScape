<template>
	<div id="view">
		<select name="region" v-model="region">
			<option value="-1">select Region</option>
			<option value="en">London</option>
			<option value="us">New York</option>
			<option value="ja">Tokyo</option>
		</select>
		<analog-watch :datetime="datetime" style="margin: 40px auto;"></analog-watch>
	</div>

</template>

<script>
	import analogWatch from '../analog_watch/';
	import {
		mapState
	} from 'vuex';

	export default {
		components: {
			analogWatch,
		},
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
		created() {
			this.changed.region = this.region;
			this.changed.datetime = this.datetime;
		},
	};

</script>

<style lang="scss">
	#view {
		background-color: #000;
		height: 100%;
		text-align: center;
	}

</style>
