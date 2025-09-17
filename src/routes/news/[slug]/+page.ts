import type { NewsArticle } from '$lib/contents'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		// Load the specific news article markdown file
		const module = await import(`../../../../contents/news/${params.slug}.md`)
		
		const article: NewsArticle = {
			slug: params.slug,
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

		return {
			article,
			component: module.default,
			frontmatter: module.metadata
		}
	} catch (e) {
		console.error('Error loading news article:', e)
		throw error(404, 'Article not found')
	}
}