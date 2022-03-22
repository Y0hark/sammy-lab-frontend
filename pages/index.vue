<template>
	<v-container class=".col-md-6 .offset-md-3">
		<v-row no-gutters>
			<v-col
				md="6"
				offset-md="3"
			>
				<h1 align="center" class="mt-10">{{ homepage.title }}</h1>
				<br>

			<ComponentViewer :content="homepage.content" />

			</v-col>
		</v-row>
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
		try {
			this.homepage = (await getHomepagePromise()).data
		} catch (error) {
			console.error(`Couldn't get homepage content. Got this error: ${error}`)
		}
	},
}
</script>