<template>
	<div id="view">
		<select name="region" v-model="region">
			<option value="-1">select Region</option>
			<option value="en">London</option>
			<option value="us">New York</option>
			<option value="ja">Tokyo</option>
		</select>
		<analog-clock :datetime="datetime" style="margin: 40px auto;"></analog-clock>
		<digital-clock :datetime="datetime" style="margin: 40px auto;"></digital-clock>
	</div>

</template>

<script>
	import analogClock from '../analogClock/';
	import digitalClock from '../digitalClock/';
	import {
		mapState
	} from 'vuex';

	export default {
		components: {
			analogClock,
			digitalClock,
		},
		data() {
			return {
				current: {
					region: '',
					datetime: this.currentDatetime,
				}
			}
		},
		computed: {
			...mapState([
				'region',
				'datetime'
			]),
			currentDatetime() {
				return new Date();
			},
		},
		mounted() {
			setInterval(() => {
				this.$store.dispatch('updateTime', new Date());
			}, 1000);
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
