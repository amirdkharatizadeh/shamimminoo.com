import type { Video } from '$lib/contents'

export async function load() {
	console.log('Loading videos page...');
	
	try {
		// Load all video markdown files using glob (like news)
		const videoModules = import.meta.glob('/contents/videos/*.md');
		console.log('Found video modules:', Object.keys(videoModules));
		
		const videos: Video[] = []

		for (const path in videoModules) {
			try {
				console.log(`Loading video from path: ${path}`);
				const module = await videoModules[path]() as any;
				console.log(`Loaded module:`, module);
				
				const slug = path.split('/').pop()?.replace('.md', '') || '';
				console.log(`Processing slug: ${slug}`);
				
				if (module.metadata) {
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
					}
					videos.push(video);
					console.log(`Added video: ${video.title} (featured: ${video.featured})`);
				} else {
					console.error(`No metadata found in module for ${path}`);
				}
			} catch (e) {
				console.error(`Failed to load video from ${path}:`, e);
			}
		}

		console.log(`Total videos loaded: ${videos.length}`);

		// Sort videos by date (newest first)
		videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

		const featuredVideos = videos.filter(v => v.featured);
		console.log(`Featured videos: ${featuredVideos.length}`);

		const result = {
			videos,
			featuredVideos,
			recentVideos: videos.slice(0, 6),
			categories: [...new Set(videos.map(v => v.category))]
		}
		
		console.log('Returning videos data:', result);
		return result;
	} catch (e) {
		console.error('Error in videos page loader:', e)
		return {
			videos: [],
			featuredVideos: [],
			recentVideos: [],
			categories: []
		}
	}
}