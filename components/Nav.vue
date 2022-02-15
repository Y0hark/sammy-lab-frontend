<template>
<div>

	<!-- <v-navigation-drawer
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
	</v-navigation-drawer> -->

	<v-toolbar
    >
		<v-app-bar-nav-icon></v-app-bar-nav-icon>

		<v-toolbar-title>
			<v-btn to="/">
				Sammy'Space
			</v-btn>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-tooltip v-for="(item, key) in menuItems" :key="key" bottom >
			<template v-slot:activator="{on, attrs}">
				<v-btn :to="item.link" v-bind="attrs" v-on="on" elevation="0" class="ma-2">
					<v-img width="25px" height="auto" :src="require(`~/assets/images/${item.icon}.png`)" />
					{{ item.name }}
				</v-btn>
			</template>
			<span>{{ item.name }}</span>
		</v-tooltip>

		<v-spacer></v-spacer>

    </v-toolbar>
</div>
</template>
<script>
export default {
	data() {
		return {
			menuItems: [
				{ name: "Articles", link: "/articles", icon: "nav-blog" },
				{ name: "My Projects", link: "/projects", icon: "nav-projects" },
				{ name: "Discover.me", link: "/discoverme", icon: "nav-floppy" }
			],
		}
	},
}
</script>
<style>
	
</style>