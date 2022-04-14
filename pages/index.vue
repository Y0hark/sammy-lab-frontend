<template>
	<div>
		<h1 align="center" class="mt-10 text-h1">{{ homepage.title }}</h1>
		<br />

		<ComponentViewer :content="homepage.content" />
	</div>
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
			console.error(
				`Couldn't get homepage content. Got this error: ${error}`
			)
		}
	},
}
</script>