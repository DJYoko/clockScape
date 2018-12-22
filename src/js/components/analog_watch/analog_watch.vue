<template>
	<p>{{datetime}}</p>
</template>

<script>
	export default {
		name: 'analogWatch',
		props: {
			datetime: {
				type: String,
				required: true,
			}
		}
	};

</script>
