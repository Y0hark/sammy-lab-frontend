<template>
	<div>
		<h2 class="secondary--text">{{ year }}</h2>
		<v-divider class="mb-2"></v-divider>
		<v-btn
			class="no-uppercase"
			block
			text
			nuxt
			v-for="article in articles"
			:key="article.title"
			:to="`/articles/${article.slug}`"
		>
			<span>{{ article.title }}</span> <v-spacer></v-spacer>
			<span class="text-lowercase primary--text">{{
				readableDate(article.publication_date)
			}}</span>
		</v-btn>
	</div>
</template>
<script>
export default {
	props: {
		year: '',
		articles: [],
	},
	methods: {
		// setting date in a more readable format
		readableDate(date) {
			date = new Date(date)
			return (
				date.getDate() +
				' ' +
				date.toLocaleString('default', { month: 'long' })
			)
		},
	},
}
</script>
<style>
.no-uppercase {
	text-transform: unset;
}
</style>