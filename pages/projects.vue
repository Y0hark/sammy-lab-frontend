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
				<v-card>
					<v-card-text>
						<div class="text-h4 primary--text">
							{{ project.title }}
						</div>
						<div v-if="project.cover" class="mb-1">
							<img
								:src="project.cover.url"
								:alt="project.title"
								:title="project.title"
								height="180"
								class="img-fluid"
							/>
						</div>
						<div class="mb-1">
							{{ project.description }}
						</div>
						<div class="mb-1">
							<span
								v-for="tag in project.tags"
								:key="tag.id"
								class="
									tag
									ml-1
									mr-1
									d-inline-block
									accent--text
								"
								>{{ tag.name }}
							</span>
						</div>
						<div>
							<v-btn
								v-if="project.link"
								color="info"
								:to="project.link"
								class="ma-1"
								>Le projet</v-btn
							>
							<v-btn
								v-if="project.git"
								color="info"
								class="ma-1"
								:to="project.git"
								>GitHub</v-btn
							>
							<v-btn
								v-if="project.article"
								color="info"
								class="ma-1"
								:to="'articles/' + project.article.slug"
								>En savoir +</v-btn
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