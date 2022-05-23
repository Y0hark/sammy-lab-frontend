<template>
	<div>
		<h1 align="center" class="mt-10 text-h1">
			{{ homepage.title }}
		</h1>
		<br />

		<ComponentViewer :content="homepage.content" />

		<v-carousel hide-delimiters height="auto">
			<v-carousel-item v-for="tweet in tweets" :key="tweet.id">
				<template>
					<Tweet :tweet="tweet" />
				</template>
			</v-carousel-item>
		</v-carousel>
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