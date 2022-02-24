<template>
	<v-container class=".col-md-6 .offset-md-3">
		<v-row no-gutters>
			<v-col
				md="6"
				offset-md="3"
			>
				<v-card-text class="mt-16" align="center">
					Écrit par <span>{{ writer }}</span> le <span>{{ article.publication_date }}</span>
				</v-card-text>
				<ComponentViewer :content="article.content" />
			</v-col>
		</v-row>
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
			writer: '',
			loading: true,
		}
	},
	async mounted() {
		try {
			const article = (
				await getArticlePromise(this.$route.params.slug)
			).data[0]
			this.category = article.category.name
			this.writer = article.writer.name + " " + article.writer.surname
			this.loading = false
			this.article = article
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