import axios from 'axios'

export const BASE_URL = 'http://yohark.de:1338/'

class Http {
	constructor() {}
	static async get(url, params = {}) {
		return await axios.get(
			BASE_URL + url, {params: params}
		)
	}

	static async post(url, params = {}) {
		return await axios.post(
			BASE_URL + url, params
		)
	}

	static async put(url, params = {}) {
		return await axios.put(
			BASE_URL + url, params
		)
	}

	static async delete(url, params = {}) {
		return await axios.delete(
			BASE_URL + url, params
		)
	}
}

export default class Api {
	constructor() {}

	// articles api

	static async getArticles() {
		return await Http.get("articles")
	}

	static async getArticleBySlug(slug) {
		return await Http.get("articles/", {slug: slug})
	}

	static async getArticlesCount() {
		return await Http.get("articles/count")
	}

	// categories api

	static async getCategories() {
		return await Http.get("categories")
	}

	static async getCategoryBySlug(slug) {
		return await Http.get("categories/", {slug: slug})
	}

	static async getCategoriesCount() {
		return await Http.get("categories/count")
	}

	// dicoverme api

	static async getDiscoverme() {
		return await Http.get("discoverme")
	}

	// homepage api

	static async getHomePage() {
		return await Http.get("home")
	}

	// tweets api

	static async getTweets() {
		return await Http.get("tweets")
	}

	static async getTweetsById(id) {
		return await Http.get("tweets/", {id: id})
	}

	static async getTweetsCount() {
		return await Http.get("tweets/count")
	}
}