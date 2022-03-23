<template>
	<div>
		<h2 align="center" class="mt-10">Mes articles</h2>
		<br />
		<div align="center" class="mb-5">
			Articles, tutoriels, documentations techniques, revues, rapport,
			recherches, cours..
			<br />
			L'ensemble de ma bibliographie est ici.
		</div>
		<articles-by-year
			v-for="(item, i) in articles_by_year"
			:key="i"
			:year="item.year"
			:articles="item.articles_list"
		/>
	</div>
</template>
<script>
import ArticlesByYear from '~/components/ArticlesByYear.vue'
import Api from '../../services/api/api'

// preparing a function to use api efficiently
async function getArticlesPromise() {
	return await Api.getArticles()
}

export default {
	components: { ArticlesByYear },
	data() {
		return {
			articles: [],
			articles_by_year: [],
		}
	},
	async mounted() {
		// retrieving data from api
		this.articles = (await getArticlesPromise()).data
		// sorting articles just retrieved by year of publication
		// I use an array with objects inside, each object being a year (string) and a articles_list (array of articles) for that year
		this.articles.forEach((article) => {
			const article_year = article.publication_date.substring(0, 4)
			// testing if year already in articles_by_year list => pushing the article into the linked list
			if (
				this.articles_by_year.some((elem) => elem.year === article_year)
			) {
				const index = this.articles_by_year.findIndex(
					(elem) => elem.year === article_year
				)
				this.articles_by_year[index].articles_list.push(article)

				// else it means year is not in the list so pushing a new year to the list with its linked empty array
				// I'm using the fact that .push() returns the new length of the list to substract 1 giving me access to the last element of this array (being our new object)
				// then I can push the article into the new empty articles_list I just created
			} else {
				this.articles_by_year[
					this.articles_by_year.push({
						year: article_year,
						articles_list: [],
					}) - 1
				].articles_list.push(article)
			}
		})
	},
}
</script>
<style>
</style>