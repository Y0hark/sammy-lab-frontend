<template>
	<div>
		<v-card class="ma-2" max-width="30vw">
			<v-card-title primary-title>
				{{ tweet.title }}
			</v-card-title>
			<v-card-text v-html="tweet.copy"> </v-card-text>
		</v-card>
	</div>
</template>
<script>
export default {
	name: 'Tweet',
	props: {
		tweet: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style>
</style>