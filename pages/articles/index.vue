<template>
	<div>
		<h2 align="center" class="mt-10 text-h2">Mes articles</h2>
		<br />
		<div align="center" class="mb-5">
			Articles, tutoriels, documentations techniques, revues, rapport,
			recherches, cours..
			<br />
			L'ensemble de ma bibliographie est ici.
		</div>

		<!-- This is the categories part where it is possible to sort articles by cat.
		This part might not be definitive as I'd like to turn this into a component 
		Although I'm still not sure how I want to handle the "flag" part, when you click the cat you want. -->

		<v-toolbar class="d-none d-md-block elevation-0 rounded mb-5">
			<v-spacer />
			<v-btn-toggle dense v-model="toggleCat" group>
				<v-btn
					v-for="(category, index) in categories"
					:key="index"
					class="accent--text text-h6 text-capitalize rounded"
					@click="sortArticles(category.name)"
				>
					{{ category.name }}
				</v-btn>
			</v-btn-toggle>
			<v-spacer />
		</v-toolbar>

		<articles-by-year
			v-for="(item, i) in articles_to_display"
			:key="i"
			:year="item.year"
			:articles="item.articles_list"
		/>
	</div>
</template>
<script>
import ArticlesByYear from '~/components/ArticlesByYear.vue'
import Api from '../../services/api/api'

export default {
	components: { ArticlesByYear },
	data() {
		return {
			categories: [],
			articles: [],
			flag: 'all',
			toggleCat: [],
		}
	},
	methods: {
		// seting up the selected category
		sortArticles(category) {
			if (this.flag === category) {
				this.flag = 'all'
			} else {
				this.flag = category
			}
		},
	},
	async mounted() {
		// retrieving data from api
		this.articles = (await Api.getArticles()).data
		// sorting articles by newest so my articles are displayed in the right order
		// the articles_to_display function that will push the top articles to the end of the array
		// first to go first to be displayed
		this.articles.sort(
			(a, b) =>
				new Date(b.publication_date) - new Date(a.publication_date)
		)
		this.categories = (await Api.getCategories()).data
	},
	computed: {
		// this is the computed property that will display articles depending on year and category
		articles_to_display() {
			// I use an array with objects inside, each object being a year (string) and a articles_list (array of articles) for that year
			const article_display = []
			this.articles.forEach((article) => {
				// testing if the article category is in the selected category
				if (
					this.flag === 'all' ||
					this.flag === article.category.name
				) {
					const article_year = article.publication_date.substring(
						0,
						4
					)
					// testing if year already in articles_by_year list => pushing the article into the linked list
					if (
						article_display.some(
							(elem) => elem.year === article_year
						)
					) {
						const index = article_display.findIndex(
							(elem) => elem.year === article_year
						)
						article_display[index].articles_list.push(article)

						// else it means year is not in the list so pushing a new year to the list with its linked empty array
						// I'm using the fact that .push() returns the new length of the list to substract 1 giving me access to the last element of this array (being our new object)
						// then I can push the article into the new empty articles_list I just created
					} else {
						article_display[
							article_display.push({
								year: article_year,
								articles_list: [],
							}) - 1
						].articles_list.push(article)
					}
				}
			})
			return article_display
		},
	},
}
</script>
<style>
</style>