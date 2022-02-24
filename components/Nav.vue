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
			<v-btn to="/" text>
				Sammy's Lab
			</v-btn>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-tooltip v-for="(item, key) in menuItems" :key="key" bottom >
			<template v-slot:activator="{on, attrs}">
				<v-btn :to="item.link" v-bind="attrs" v-on="on" elevation="0" class="ma-2">
					<v-img width="25px" height="auto" class="mr-1" :src="require(`~/assets/images/${item.icon}.png`)" />
					{{ item.name }}
				</v-btn>
			</template>
			<span>{{ item.tooltip }}</span>
		</v-tooltip>

		<v-spacer></v-spacer>

		<v-tooltip v-for="item in menuIcons" :key="item.name" bottom >
			<template v-slot:activator="{on, attrs}">
				<v-btn :href="item.link" v-bind="attrs" v-on="on" elevation="0" class="ma-2">
					<v-img width="25px" height="auto" class="mr-1" :src="require(`~/assets/images/${item.icon}.png`)" />
				</v-btn>
			</template>
			<span>{{ item.tooltip }}</span>
		</v-tooltip>

    </v-toolbar>
</div>
</template>
<script>
export default {
	data() {
		return {
			menuItems: [
				{ name: "Articles", link: "/articles", icon: "nav-blog", tooltip: "see my latest articles" },
				{ name: "My Projects", link: "/projects", icon: "nav-projects", tooltip: "take a look at my projects" },
				{ name: "Discover.me", link: "/discoverme", icon: "nav-floppy", tooltip: "find my infos"}
			],
			menuIcons: [
				{ name: "Search", link: "", icon: "nav-search", tooltip: "look for something" },
				{ name: "Twitter", link: "https://twitter.com/Sammysterieux", icon: "nav-twitter", tooltip: "find me on twitter" },
				{ name: "GitHub", link: "https://github.com/Y0hark", icon: "nav-github", tooltip: "there goes my github" },
			]
		}
	},
}
</script>
<style>
	
</style>