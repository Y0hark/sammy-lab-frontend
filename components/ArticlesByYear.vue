<template>
	<div>
		<h2>{{ year }}</h2>
		<v-divider></v-divider>
		<v-btn block text nuxt v-for="article in articles" :key="article.title" :to="`/articles/${article.slug}`">
			{{ article.title }} <v-spacer></v-spacer> {{ article.publication_date }}
		</v-btn>
	</div>
</template>
<script>
export default {
	props: {
		year: "",
		articles: []
	}
}
</script>
<style>
	
</style>