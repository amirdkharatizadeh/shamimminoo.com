import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Video } from '$lib/contents';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		// Import the markdown file dynamically
		const module = await import(`../../../../contents/videos/${slug}.md`);
		
		const video: Video = {
			slug,
			title: module.metadata.title,
			date: module.metadata.date,
			category: module.metadata.category,
			youtubeId: module.metadata.youtubeId,
			startTime: module.metadata.startTime,
			duration: module.metadata.duration,
			image: module.metadata.image,
			excerpt: module.metadata.excerpt,
			featured: module.metadata.featured,
			venue: module.metadata.venue,
			location: module.metadata.location,
			composer: module.metadata.composer,
			arrangement: module.metadata.arrangement,
			readTime: module.metadata.readTime,
			tags: module.metadata.tags,
			component: module.default
		};

		return {
			video,
			component: module.default,
			frontmatter: module.metadata
		};
	} catch (e) {
		console.error('Error loading video:', e);
		throw error(404, `Video not found: ${slug}`);
	}
};