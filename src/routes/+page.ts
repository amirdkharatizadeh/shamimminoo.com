import type { PageLoad } from './$types';
import type { Concert } from '$lib/contents';

export const load: PageLoad = async () => {
	try {
		// Load all concert markdown files
		const concertModules = import.meta.glob('/contents/conserts/*.md');
		const concerts: Concert[] = [];

		for (const path in concertModules) {
			const module = await concertModules[path]() as any;
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			
			const concert: Concert = {
				slug,
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
				featured: module.metadata.featured
			};
			concerts.push(concert);
		}

		// Sort concerts by date (upcoming first)
		concerts.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			const now = new Date();
			
			// If both are upcoming or both are past, sort by date
			if ((dateA >= now && dateB >= now) || (dateA < now && dateB < now)) {
				return dateA.getTime() - dateB.getTime();
			}
			// Otherwise, upcoming concerts first
			return dateA >= now ? -1 : 1;
		});

		// Get upcoming concerts for the home page
		const upcomingConcerts = concerts.filter(c => new Date(c.date) >= new Date());
		
		// Use upcoming concerts if available, otherwise show recent concerts
		const concertsToShow = upcomingConcerts.length > 0 ? upcomingConcerts : concerts;

		return {
			concerts: concertsToShow
		};
	} catch (e) {
		console.error('Error loading concerts for home page:', e);
		return {
			concerts: []
		};
	}
};