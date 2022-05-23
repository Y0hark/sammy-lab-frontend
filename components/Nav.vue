<template>
	<div>
		<v-toolbar class="d-none d-sm-block">
			<v-toolbar-title>
				<v-btn to="/" text class="accent--text">Sammy's Lab</v-btn>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-tooltip v-for="(item, key) in menuItems" :key="key" bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						:to="item.link"
						v-bind="attrs"
						v-on="on"
						elevation="0"
						class="ma-2"
					>
						<v-img
							width="25px"
							height="auto"
							class="mr-1"
							:src="require(`~/assets/images/${item.icon}.png`)"
						/>
						<span class="d-none d-md-flex">{{ item.name }}</span>
					</v-btn>
				</template>
				<span>{{ item.tooltip }}</span>
			</v-tooltip>

			<v-spacer></v-spacer>

			<v-tooltip v-for="item in menuIcons" :key="item.name" bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						:href="item.link"
						v-bind="attrs"
						v-on="on"
						elevation="0"
						class="ma-2"
					>
						<v-img
							width="25px"
							height="auto"
							class="mr-1"
							:src="require(`~/assets/images/${item.icon}.png`)"
						/>
					</v-btn>
				</template>
				<span>{{ item.tooltip }}</span>
			</v-tooltip>
		</v-toolbar>
		<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item v-for="item in menuItems" :key="item.name">
						<v-btn
							nuxt
							:to="item.link"
							v-bind="attrs"
							elevation="0"
							class="ma-2"
							x-large
						>
							<v-img
								width="25px"
								height="auto"
								class="mr-1"
								:src="
									require(`~/assets/images/${item.icon}.png`)
								"
							/>
							<span>{{ item.name }}</span>
						</v-btn>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
<script>
export default {
	data() {
		return {
			drawer: false,
			menuItems: [
				{
					name: 'Articles',
					link: '/articles',
					icon: 'nav-blog',
					tooltip: 'voir mes articles',
				},
				{
					name: 'Mes Projets',
					link: '/projects',
					icon: 'nav-projects',
					tooltip: 'mes projets',
				},
				{
					name: 'Discover.me',
					link: '/discoverme',
					icon: 'nav-floppy',
					tooltip: 'qui je suis',
				},
			],
			menuIcons: [
				{
					name: 'Twitter',
					link: 'https://twitter.com/Sammysterieux',
					icon: 'nav-twitter',
					tooltip: 'retrouve moi sur twitter',
				},
				{
					name: 'GitHub',
					link: 'https://github.com/Y0hark',
					icon: 'nav-github',
					tooltip: 'mon github',
				},
			],
		}
	},
}
</script>
<style>
</style>