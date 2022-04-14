<template>
	<div>
		<h2 align="center" class="mt-10 text-h2">Mes Projets</h2>
		<br />
		<div align="center" class="mb-5">
			L'ensemble de mes projets OpenSource que vous pourrez retrouver sur
			<a href="https://github.com/Y0hark?tab=repositories">GitHub</a>.
		</div>
		<v-row align="stretch">
			<v-col
				v-for="(project, index) in projects"
				:key="index"
				xs="12"
				sm="6"
				md="6"
				xl="6"
				align="center"
			>
				<!-- TODO - Samuel GALIERE : need CSS on these lines to get to a better overall view of the project -->
				<v-card>
					<v-card-text>
						<div class="text-h6 secondary--text">
							{{ project.title }}
						</div>
						<div v-if="project.cover" class="mb-1">
							{{ project.cover }}
						</div>
						<div class="mb-1">
							{{ project.description }}
						</div>
						<div class="mb-1">
							<!-- TODO - Samuel GALIERE : Need CSS to make tags and links look better -->
							<span
								v-for="tag in project.tags"
								:key="tag.id"
								class="tag ml-1 mr-1 d-inline-block"
								>{{ tag.name }}
							</span>
						</div>
						<div>
							<!-- TODO - Samuel GALIERE : Need CSS to make tags and links look better -->
							<v-btn
								v-if="project.link"
								color="primary"
								:to="project.link"
								>{{ project.title }}</v-btn
							>
							<v-btn
								v-if="project.git"
								color="primary"
								:to="project.git"
								>GitHub</v-btn
							>
							<v-btn
								v-if="project.article"
								color="primary"
								:to="project.article"
								>Read more</v-btn
							>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import Api from '../services/api/api.js'

// preparing function to retrieve projects correctly

async function getProjectsPromise() {
	return await Api.getProjects()
}

export default {
	data() {
		return {
			projects: [],
			tags: [],
		}
	},
	async mounted() {
		try {
			this.projects = (await getProjectsPromise()).data
		} catch (error) {
			console.error(
				`Couldn't get the project list. Got this error: ${error}`
			)
		}
	},
}
</script>
<style>
</style>