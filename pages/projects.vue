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
						<v-card>
							<v-card-text>
								{{ project.title }}
							</v-card-text>
							<v-card-text>
								{{ project.thumbnail }}
							</v-card-text>
							<v-card-text>
								{{ project.description }}
							</v-card-text>
							<v-card-text>
								{{ project.tags }}
							</v-card-text>
							<v-card-text>
								<v-btn v-if="project.link" color="success" :to="project.link">{{ project.title }}</v-btn>
								<v-btn v-if="project.git" color="success" :to="project.git">{{ project.gitName }}</v-btn>
								<v-btn v-if="project.article" color="success" :to="project.article">Read more</v-btn>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	data() {
		return {
			projects: []
		}
	},
}
</script>
<style>
	
</style>