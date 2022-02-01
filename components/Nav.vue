<template>
	<v-navigation-drawer
		app left width="90px" fixed permanent
	>
		<v-list
		nav
		dense
		>
			<v-list-item v-for="(item, key) in menuItems" :key="key">
				<v-tooltip right>
					<template v-slot:activator="{on, attrs}">
						<v-btn block :to="item.link" v-bind="attrs" v-on="on" >
							<v-icon>{{ item.icon }}</v-icon>
						</v-btn>
					</template>
					<span>{{ item.name }}</span>
				</v-tooltip>
				
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
export default {
	data() {
		return {
			menuItems: [
				{ name: "Home", link: "/", icon: "mdi-home" },
				{ name: "Articles", link: "/articles", icon: "mdi-text" },
				{ name: "Discover.me", link: "/discoverme", icon: "mdi-information" }
			]
		}
	},
}
</script>
<style>
	
</style>