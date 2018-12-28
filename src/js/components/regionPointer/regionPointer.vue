<template>
	<div>
		<img src="img/worldmap.svg">
		<div class="pointer" :style="pointerStyle"></div>
	</div>
</template>

<script>
	import CONSTANTS from '../../utils/constants';
	export default {
		name: 'regionPointer',
		props: {
			region: {
				type: String,
				required: true,
			},
		},
		computed: {
			latlng(){
                return CONSTANTS.REGIONS[this.region].latlng; //second
			},
            pointerStyle() {
                return {
			        top: CONSTANTS.REGIONS[this.region].position[0] + '%',
					left: CONSTANTS.REGIONS[this.region].position[1] + '%'
				};
			}
		}
	};

</script>

<style lang="scss">
	div {
		position: relative;
		padding: 0;
		img {
			display: block;
			width: 100%;
		}
		.pointer {
			position: absolute;
			width: 10px;
			height: 10px;
			margin-top:-5px;
			margin-left:-5px;
			background-color: #ffff00;
			border-radius: 10px;
			opacity: 1;
			transition: all 1000ms;
			animation: ripple 700ms infinite;
		}

		@-webkit-keyframes ripple {
			from {
				opacity: 1;
				transform: scale(1);
			}
			to {
				opacity: 0;
				transform: scale(2.0);
			}
		}

		@keyframes ripple {
			from {
				opacity: 1;
				transform: scale(1);
			}
			to {
				opacity: 0;
				transform: scale(2.0);
			}
		}
	}
</style>