<template>
	<v-container>
		<v-card>
			<v-card-text>
				<h2>{{ discoverme.title }}</h2>
			</v-card-text>
			<ComponentViewer :component="discoverme.components" />
		</v-card>

		<!-- Contacts -->
	</v-container>
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