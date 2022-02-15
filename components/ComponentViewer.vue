<template>
	<div>
		<!-- component images viewer -->
		<div v-for="(component, key) in content" :key="key">
			<v-card-text
				v-if="component.__component == 'editor-components.images'"
				class="d-none d-md-block"
			>
				<v-row>
					<v-col
						v-for="(image, z) in component.images"
						:key="z"
						:cols="12 / component.images.length"
					>
						<v-img :src="image.url" />
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-text
				v-if="component.__component == 'editor-components.images'"
				class="d-md-none"
			>
				<v-carousel
					hide-delimiter-background
					delimiter-icon="mdi-minus"
					height="auto"
				>
					<v-carousel-item
						v-for="(image, m) in component.images"
						:key="m"
						:src="image.url"
					/>
				</v-carousel>
			</v-card-text>
			<!-- component text viewer -->
			<div v-if="component.__component == 'editor-components.text'" class="ck-content" v-html="component.text">
				
			</div>
			<pre v-if="component.__component == 'editor-components.code-block'">
				<code v-highlight :class="component.language">
{{ component.code }}
				</code>
			</pre>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		content: [],
	}
}
</script>
<style>
</style>