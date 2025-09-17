import type { Page } from '$lib/contents'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		// Load the specific page markdown file
		const module = await import(`../../../../contents/pages/${params.slug}.md`)
		
		const page: Page = {
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
			page,
			component: module.default,
			frontmatter: module.metadata
		}
	} catch (e) {
		console.error('Error loading page:', e)
		throw error(404, 'Page not found')
	}
}