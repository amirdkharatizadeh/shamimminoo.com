import type { NewsArticle } from '$lib/contents'

export async function load() {
	try {
		// Load all news markdown files
		const newsModules = import.meta.glob('/contents/news/*.md')
		const articles: NewsArticle[] = []

		for (const path in newsModules) {
			const module = await newsModules[path]() as any
			const slug = path.split('/').pop()?.replace('.md', '') || ''
			
			const article: NewsArticle = {
				slug,
				title: module.metadata.title,
				date: module.metadata.date,
				category: module.metadata.category,
				image: module.metadata.image,
				excerpt: module.metadata.excerpt,
				featured: module.metadata.featured,
				author: module.metadata.author,
				readTime: module.metadata.readTime,
				tags: module.metadata.tags,
				component: module.default
			}
			articles.push(article)
		}

		// Sort articles by date (newest first)
		articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

		return {
			articles,
			featuredArticles: articles.filter(a => a.featured),
			recentArticles: articles.slice(0, 6),
			categories: [...new Set(articles.map(a => a.category))]
		}
	} catch (e) {
		console.error('Error loading news articles:', e)
		return {
			articles: [],
			featuredArticles: [],
			recentArticles: [],
			categories: []
		}
	}
}