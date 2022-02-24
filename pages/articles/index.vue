<template>
	<v-container class=".col-md-6 .offset-md-3">
		<v-row no-gutters>
			<v-col
				md="6"
				offset-md="3"
			>
				<h2 align="center">Mes articles</h2>
				<br>
				<v-card v-for="article in articles" :key="article.id" :to="`/articles/${article.slug}`" >
					<v-card-title primary-title>
						{{ article.title }}
					</v-card-title>
				</v-card>
			</v-col>
		</v-row>
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