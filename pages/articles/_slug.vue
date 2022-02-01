<template>
	<v-container max-width="80vw">
		<v-card-text class="mt-16">
			<span>{{ article.title }}</span> <span>{{ category }}</span>
		</v-card-text>
		<v-divider class="mb-6"/>
			<ComponentViewer :component="article.component" />
	</v-container>
</template>
<script>
import ComponentViewer from '../../components/ComponentViewer.vue'
import Api from '../../services/api/api'

async function getArticlePromise(slug) {
	return await Api.getArticleBySlug(slug)
}

export default {
	components: { ComponentViewer },
	data() {
		return {
			article: {},
			category: '',
			loading: true,
		}
	},
	async mounted() {
		try {
			this.article = (
				await getArticlePromise(this.$route.params.slug)
			).data[0]
			this.category = this.article.category.name
			this.loading = false
		} catch (error) {
			console.error(
				'Impossible to get the article. Got this error: ' + error
			)
		}
	},
}
</script>
<style>
</style>