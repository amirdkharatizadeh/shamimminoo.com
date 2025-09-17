import type { Concert } from '$lib/contents'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		// Load the specific concert markdown file
		const module = await import(`../../../../contents/conserts/${params.slug}.md`)
		
		const concert: Concert = {
			slug: params.slug,
			title: module.metadata.title,
			date: module.metadata.date,
			time: module.metadata.time,
			venue: module.metadata.venue,
			location: module.metadata.location,
			image: module.metadata.image,
			description: module.metadata.description,
			program: module.metadata.program,
			tickets: module.metadata.tickets,
			status: module.metadata.status,
			featured: module.metadata.featured,
			component: module.default
		}

		return {
			concert,
			component: module.default,
			frontmatter: module.metadata
		}
	} catch (e) {
		console.error('Error loading concert:', e)
		throw error(404, 'Concert not found')
	}
}