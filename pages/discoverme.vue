<template>
	<div>
		<h2 align="center" class="mt-10 text-h2">{{ discoverme.title }}</h2>
		<br />

		<ComponentViewer :content="discoverme.content" />

		<!-- Contacts -->
	</div>
</template>
<script>
import ComponentViewer from '../components/ComponentViewer.vue'
import Api from '../services/api/api'

async function getDiscovermePromise() {
	return await Api.getDiscoverme()
}

export default {
	components: { ComponentViewer },
	data() {
		return {
			discoverme: {},
		}
	},
	async mounted() {
		this.discoverme = (await getDiscovermePromise()).data
	},
}
</script>
<style>
</style>