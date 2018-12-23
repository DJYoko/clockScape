<template>
	<div class="panel_mark" :style="markStyle" :class="markClass"></div>
</template>

<script>
	export default {
		name: 'panelMark',
		props: {
			index: {
				type: Number,
				required: true,
			}
		},
		computed: {
			markClass() {
				return {
					bold: this.index % 15 === 0,
				}
			},
			markStyle() {
				return {
					transform: 'rotateZ(' + this.index * 6 + 'deg)',
				}
			},
		}
	};

</script>
<style>
	.panel_mark {
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
