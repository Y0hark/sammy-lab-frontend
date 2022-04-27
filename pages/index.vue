<template>
	<div>
		<h1 align="center" class="mt-10 text-h1">
			{{ homepage.title }}
		</h1>
		<br />

		<ComponentViewer :content="homepage.content" />

		<Tweet
			v-for="(tweet, index) in tweets"
			:key="index"
			:tweet="tweet"
			align="center"
		/>
	</div>
</template>
<script>
import ComponentViewer from '../components/ComponentViewer.vue'
import Tweet from '../components/Tweet.vue'
import Api from '../services/api/api'

export default {
	components: { ComponentViewer, Tweet },
	data() {
		return {
			homepage: {},
			tweets: [],
		}
	},
	async mounted() {
		try {
			this.homepage = (await Api.getHomePage()).data
			this.tweets = (await Api.getTweets()).data
		} catch (error) {
			console.error(
				`Couldn't get homepage content. Got this error: ${error}`
			)
		}
	},
}
</script>