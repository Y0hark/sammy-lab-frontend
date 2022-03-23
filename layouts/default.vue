<template>
	<v-app dark>
		<Nav />
		<v-main>
			<v-container>
				<v-row no-gutters>
					<v-col md="6" offset-md="3">
						<Nuxt />
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Nav from '../components/Nav'

export default {
	components: {
		Nav,
	},
}
</script>
