export interface Concert {
	slug: string;
	title: string;
	date: string;
	time?: string;
	venue: string;
	location: string;
	image?: string;
	description: string;
	program?: string[];
	tickets?: string;
	status: 'upcoming' | 'past' | 'cancelled';
	featured?: boolean;
	component?: any; // Svelte component for rendered markdown
}

// Dummy concert data
export const concerts: Concert[] = [
	{
		slug: '1',
		title: "Harp Recital: Bach & Beyond",
		date: "2024-03-15",
		time: "19:30",
		venue: "Carnegie Hall - Weill Recital Hall",
		location: "New York, NY",
		image: "/img/concert-bach-beyond.jpg",
		description: "An intimate evening featuring works by J.S. Bach, Debussy, and contemporary composers, showcasing the versatility of the classical harp.",
		program: [
			"J.S. Bach - Partita No. 2 in D minor (arr. for harp)",
			"Claude Debussy - Danses sacrée et profane",
			"Carlos Salzedo - Chanson dans la nuit"
		],
		tickets: "https://www.carnegiehall.org/tickets",
		status: "upcoming",
		featured: true
	},
	{
		slug: '2',
		title: "Romantic Harp: Chopin & Liszt",
		date: "2024-04-20",
		time: "20:00",
		venue: "Musikverein - Brahms Saal",
		location: "Vienna, Austria",
		image: "/img/concert-romantic.jpg",
		description: "A romantic evening featuring masterful arrangements of Chopin and Liszt, demonstrating the harp's expressive range in the Romantic repertoire.",
		program: [
			"F. Chopin - Ballade No. 1 in G minor (arr. for harp)",
			"F. Liszt - Liebestraum No. 3 (arr. for harp)",
			"E. Parish Alvars - Serenade, Op. 83"
		],
		tickets: "https://www.musikverein.at",
		status: "upcoming",
		featured: false
	},
	{
		slug: '3',
		title: "Contemporary Voices",
		date: "2024-02-10",
		time: "19:00",
		venue: "Walt Disney Concert Hall",
		location: "Los Angeles, CA",
		image: "/img/concert-contemporary.jpg",
		description: "World premieres and contemporary works that push the boundaries of harp performance and composition.",
		program: [
			"World Premiere: New commission by Jennifer Higdon",
			"Ginastera - Harp Concerto, Op. 25 (solo arrangement)",
			"Takemitsu - Toward the Sea III"
		],
		tickets: "https://www.laphil.com",
		status: "past",
		featured: true
	}
];

// Helper functions
export function getUpcomingConcerts(): Concert[] {
	return concerts
		.filter(concert => concert.status === 'upcoming')
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getFeaturedConcerts(): Concert[] {
	return concerts.filter(concert => concert.featured);
}

export function getAllConcerts(): Concert[] {
	return concerts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getConcertBySlug(slug: string): Concert | undefined {
	return concerts.find(concert => concert.slug === slug);
}