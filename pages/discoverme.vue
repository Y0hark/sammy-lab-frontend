<template>
	<v-container class=".col-md-6 .offset-md-3">
		<v-row no-gutters>
			<v-col
				md="6"
				offset-md="3"
			>
				<h2 align="center">{{ discoverme.title }}</h2>
				<v-card>
					<ComponentViewer :content="discoverme.content" />
				</v-card>

		<!-- Contacts -->
			</v-col>
		</v-row>
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