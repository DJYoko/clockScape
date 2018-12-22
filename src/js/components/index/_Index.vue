<template>
	<div id="hello">
		<select name="region">
			<option>Tokyo</option>
			<option>London</option>
			<option>New York</option>
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
		}
	};

</script>
