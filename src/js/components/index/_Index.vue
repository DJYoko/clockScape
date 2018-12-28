<template>
	<div id="view" :style="viewStyle">
		<p class="text-right info-link">
			<span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#info_modal"></span>
		</p>
		<div class="blackbox">
			<div class="region_selector_wrapper">
				<region-selector :region="region" @change="onRegionChange"></region-selector>
			</div>
			<clocks :unixtime="currentUnixtime" :region="region"></clocks>
		</div>
		<photo-info :region="region"></photo-info>
	</div>
</template>
<script>
	import CONSTANTS from '../../utils/constants';
	import clocks from '../clocks/';
	import regionSelector from '../regionSelector/';
	import photoInfo from '../photoInfo/';
	import {
		mapState
	} from 'vuex';

	export default {
		components: {
			clocks,
			regionSelector,
			photoInfo,
		},
		data() {
			return {
				regions: CONSTANTS.REGIONS,
			}
		},
		computed: {
			...mapState([
				'region',
				'currentUnixtime',
			]),
			viewStyle() {
				const style = {
					padding: '10px',
					backgroundImage: 'url(img/region/' + this.region + '.jpg)',
				};
				return style;
			}
		},
		created() {
			const payload = {};
			this.syncRegion();
			payload.callback = () => {
				setInterval(() => {
					this.$store.dispatch('updateTime');
				}, 1000);
			};
			this.$store.dispatch('loadServerTime', payload);
		},
		updated() {
			this.syncRegion();
		},
		methods: {
			onRegionChange(payload) {
				this.$store.dispatch('selectRegion', payload);
			},
			syncRegion() {
				if (this.region === this.$route.params.region) {
					return false;
				}
				const init_region = (this.$route.params.region) ? this.$route.params.region : 'Tokyo';
				
				this.$store.dispatch('selectRegion', {
					region: init_region
				});
			},
		},
	};

</script>

<style lang="scss">
	#view {
		background-color: #000;
		height: 100%;
		text-align: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.blackbox {
		width: 320px;
		margin: 0 0 0 auto;
		padding: 20px 0;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 4px;
	}

	.region_selector_wrapper {
		text-align: right;
		padding-right: 20px;
		margin-bottom: 20px;
	}



	.info-link {

		.glyphicon {
			cursor: pointer;
			background: rgba(255, 255, 255, 0.5);
			font-size: 16px;
			padding: 4px 4px 2px;
			border-radius: 16px;
			color: #262626;

			&:hover {
				opacity: 0.75;
			}
		}
	}

</style>
