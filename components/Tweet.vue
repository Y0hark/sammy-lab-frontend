<template>
	<div>
		<v-card class="ma-2 pl-10 pr-10">
			<v-card-title primary-title>
				{{ tweet.title }}
			</v-card-title>
			<!-- //NOSONAR --><v-card-text align="start" v-html="tweet.copy">
			</v-card-text>
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