<template>
	<v-container>
		<h2>Mes articles</h2>
		<v-card v-for="article in articles" :key="article.id" :to="`/articles/${article.slug}`" >
			<v-card-title primary-title>
				{{ article.title }}
			</v-card-title>
		</v-card>
	</v-container>
</template>
<script>
import Api from "../../services/api/api"

async function getArticlesPromise() {
	return await Api.getArticles()
} 

export default {
	data() {
		return {
			articles: []
		}
	},
	async mounted() {
		this.articles = (await getArticlesPromise()).data
	},
}
</script>
<style>
	
</style>