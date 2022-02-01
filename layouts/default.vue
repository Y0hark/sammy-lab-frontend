<template>
  <v-app dark>
	<Nav />
	<v-main>
		<Nuxt />
	</v-main>
  </v-app>
</template>

<script>
import Nav from "../components/Nav"

export default {
	components : {
		Nav
	}
}
</script>
