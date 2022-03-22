<template>
	<v-container class=".col-md-6 .offset-md-3">
		<v-row no-gutters>
			<v-col
				md="6"
				offset-md="3"
			>
				<h2 align="center" class="mt-10">Mes Projets</h2>
				<br>
				<div align="center" class="mb-5">
					L'ensemble de mes projets OpenSource que vous pourrez retrouver sur <a href="https://github.com/Y0hark?tab=repositories">GitHub</a>.
				</div>
				<v-row align="stretch">
					<v-col
					v-for="(project, index) in projects"
					:key="index"
					xs="12"
					sm="6"
					md="4"
					xl="4"
					align="center"
					
					>
						<!-- TODO - Samuel GALIERE : need CSS on these lines to get to a better overall view of the project -->
						<v-card>
							<v-card-text>
								{{ project.title }}
							</v-card-text>
							<v-card-text v-if="project.cover">
								{{ project.cover }}
							</v-card-text>
							<v-card-text>
								{{ project.description }}
							</v-card-text>
							<v-card-text>
								<!-- TODO - Samuel GALIERE : Need CSS to make tags and links look better -->
								<span v-for="tag in project.tags" :key="tag.id" cl>{{ tag.name }} </span>
							</v-card-text>
							<v-card-text>
								<!-- TODO - Samuel GALIERE : Need CSS to make tags and links look better -->
								<v-btn v-if="project.link" color="secondary" :to="project.link">{{ project.title }}</v-btn>
								<v-btn v-if="project.git" color="secondary" :to="project.git">GitHub</v-btn>
								<v-btn v-if="project.article" color="secondary" :to="project.article">Read more</v-btn>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Api from "../services/api/api.js"

// preparing function to retrieve projects correctly

async function getProjectsPromise() {
	return await Api.getProjects()
}

export default {
	data() {
		return {
			projects: [],
			tags: []
		}
	},
	async mounted() {
		try {
			this.projects = (await getProjectsPromise()).data
		} catch (error) {
			console.error(`Couldn't get the project list. Got this error: ${error}`)
		}
	}
}
</script>
<style>
	
</style>