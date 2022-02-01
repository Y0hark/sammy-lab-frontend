<template>
	<v-container>
		<v-card>
			<v-card-text>
				<h1>{{ homepage.title }}</h1>
			</v-card-text>
			<v-card-text>
				{{ homepage.description }}
			</v-card-text>

			<ComponentViewer :content="homepage.content" />
		</v-card>

		<!-- Short description -->

		<!-- Flashy well designed news -->

		<!-- Homepage Content -->
	</v-container>
</template>
<script>
import ComponentViewer from '../components/ComponentViewer.vue'
import Api from '../services/api/api'

async function getHomepagePromise() {
	return await Api.getHomePage()
}

export default {
	components: { ComponentViewer },
	data() {
		return {
			homepage: {},
		}
	},
	async mounted() {
		this.homepage = (await getHomepagePromise()).data
	},
}
</script>