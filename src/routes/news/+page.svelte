<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	// News data structure
	const featuredNews = {
		id: 'gold-medal-2025',
		title: 'Shamim Minoo Makes History with Gold Medal Victory',
		subtitle: 'First Iranian harpist to win USA International Harp Competition',
		date: '2025-07-22',
		category: 'Achievement',
		image: '/img/logo.jpg',
		excerpt: 'In a groundbreaking moment for classical music, 20-year-old Shamim Minoo became the first Iranian harpist to win the prestigious USA International Harp Competition, earning both the Gold Medal and the coveted Renié Prize.',
		content: `The victory represents a historic milestone not only for Shamim personally but for Iranian representation in international classical music competitions. Her winning performance of Duphly's "La Pothouin" captivated judges and audiences alike with its technical brilliance and emotional depth.

		"This achievement opens doors for future generations of Iranian musicians," said Shamim after her victory. "I hope my success inspires young artists from my homeland to pursue their dreams on the international stage."

		The competition, held in Bloomington, Indiana, attracted 127 participants from 34 countries, making Shamim's victory all the more remarkable. Her journey to this moment began at age 6 when she first picked up the harp in Iran, later moving to Paris at 15 to pursue advanced studies.`,
		tags: ['Gold Medal', 'USA International', 'Historic Win', 'Renié Prize']
	};
	
	const newsCategories = [
		{
			title: 'Recent Achievements',
			articles: [
				{
					id: 'conservatoire-graduation',
					title: 'Outstanding Graduate Recognition at Conservatoire National',
					date: '2025-06-15',
					category: 'Academic',
					excerpt: 'Shamim receives highest honors for her graduate recital performance, earning praise from faculty including Isabelle Moretti and Geneviève Létang.',
					image: '/img/logo.jpg',
					readTime: '3 min'
				},
				{
					id: 'european-tour-announcement',
					title: 'European Concert Tour Announced for Fall 2025',
					date: '2025-08-10',
					category: 'Performance',
					excerpt: 'Following her competition victory, Shamim announces a 12-city European tour featuring solo recitals and orchestra collaborations.',
					image: '/img/logo.jpg',
					readTime: '4 min'
				}
			]
		},
		{
			title: 'Press Coverage',
			articles: [
				{
					id: 'classical-music-magazine',
					title: 'Classical Music Magazine Feature: Rising Star Profile',
					date: '2025-08-05',
					category: 'Media',
					excerpt: 'In-depth interview and photo spread highlighting Shamim\'s journey from Tehran to international recognition.',
					image: '/img/logo.jpg',
					readTime: '8 min'
				},
				{
					id: 'bbc-interview',
					title: 'BBC Radio 3 Interview: "Music Without Borders"',
					date: '2025-07-28',
					category: 'Media',
					excerpt: 'Shamim discusses her cultural heritage and how it influences her interpretation of classical repertoire.',
					image: '/img/logo.jpg',
					readTime: '15 min'
				},
				{
					id: 'le-figaro-review',
					title: 'Le Figaro: "Une étoile montante de la harpe"',
					date: '2025-07-25',
					category: 'Review',
					excerpt: 'French critics praise Shamim\'s "exceptional musicality" and "profound artistic maturity" following her competition win.',
					image: '/img/logo.jpg',
					readTime: '5 min'
				}
			]
		},
		{
			title: 'Upcoming Events',
			articles: [
				{
					id: 'carnegie-hall-debut',
					title: 'Carnegie Hall Debut Performance Scheduled',
					date: '2025-11-15',
					category: 'Performance',
					excerpt: 'Shamim will make her Carnegie Hall debut as part of the "Young Artists Series" featuring contemporary and classical works.',
					image: '/img/logo.jpg',
					readTime: '2 min'
				},
				{
					id: 'masterclass-series',
					title: 'International Masterclass Series Launch',
					date: '2025-09-20',
					category: 'Education',
					excerpt: 'New educational initiative bringing Shamim\'s expertise to aspiring harpists worldwide through virtual and in-person sessions.',
					image: '/img/logo.jpg',
					readTime: '3 min'
				}
			]
		},
		{
			title: 'Cultural Impact',
			articles: [
				{
					id: 'iranian-music-bridge',
					title: 'Building Bridges: Iranian Music Meets Western Classical',
					date: '2025-08-01',
					category: 'Cultural',
					excerpt: 'Exploring Shamim\'s role in fostering cultural exchange between Iranian musical traditions and Western classical music.',
					image: '/img/logo.jpg',
					readTime: '6 min'
				},
				{
					id: 'youth-inspiration',
					title: 'Inspiring the Next Generation of Iranian Musicians',
					date: '2025-07-30',
					category: 'Impact',
					excerpt: 'How Shamim\'s success is motivating young musicians in Iran to pursue classical music education abroad.',
					image: '/img/logo.jpg',
					readTime: '4 min'
				}
			]
		}
	];

	// Helper function to format dates
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}
</script>

<svelte:head>
	<title>News - Shamim Minoo | Latest Updates & Press Coverage</title>
	<meta name="description" content="Stay updated with Shamim Minoo's latest achievements, press coverage, upcoming performances, and cultural impact in classical music." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary playfair-display-bold mb-6 leading-tight">
					Latest News
				</h1>
				<p class="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
					Follow Shamim's remarkable journey as she continues to make history 
					in the world of classical harp performance.
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
					<span class="bg-primary/10 px-4 py-2 rounded-full">📰 Press Coverage</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🏆 Achievements</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎼 Upcoming Events</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🌍 Cultural Impact</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured News Section -->
	<section class="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-muted/10 relative">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">Breaking News</h2>
					<p class="text-lg text-muted-foreground">Historic achievement making headlines worldwide</p>
				</div>
				
				<article class="bg-gradient-to-br from-background/80 to-muted/20 rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
					<div class="grid lg:grid-cols-12 gap-8">
						<div class="lg:col-span-5">
							<div class="aspect-[4/3] lg:aspect-auto lg:h-full bg-muted/20 relative">
								<img 
									src={featuredNews.image} 
									alt="Shamim Minoo with gold medal"
									class="w-full h-full object-cover"
								/>
								<div class="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
									{featuredNews.category}
								</div>
							</div>
						</div>
						
						<div class="lg:col-span-7 p-6 lg:p-8">
							<div class="space-y-6">
								<div>
									<h3 class="text-3xl lg:text-4xl font-bold text-foreground playfair-display-bold leading-tight mb-3">
										{featuredNews.title}
									</h3>
									<p class="text-xl text-primary font-semibold mb-4">
										{featuredNews.subtitle}
									</p>
									<div class="flex items-center gap-4 text-sm text-muted-foreground mb-6">
										<time datetime={featuredNews.date}>
											{formatDate(featuredNews.date)}
										</time>
										<span>•</span>
										<span>Featured Story</span>
									</div>
								</div>
								
								<p class="text-lg text-foreground/80 leading-relaxed">
									{featuredNews.excerpt}
								</p>
								
								<div class="flex flex-wrap gap-2 mb-6">
									{#each featuredNews.tags as tag}
										<span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
											{tag}
										</span>
									{/each}
								</div>
								
								<a href="#read-more" class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full">
									Read Full Story
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- News Categories -->
	{#each newsCategories as category}
		<section class="py-16 md:py-20 {category.title.includes('Recent') ? 'bg-background' : category.title.includes('Press') ? 'bg-gradient-to-br from-muted/10 to-primary/5' : category.title.includes('Upcoming') ? 'bg-gradient-to-br from-primary/5 to-background' : 'bg-gradient-to-br from-background to-muted/10'}">
			<div class="container mx-auto px-4">
				<div class="max-w-7xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">
							{category.title}
						</h2>
					</div>
					
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{#each category.articles as article}
							<article class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30">
								<div class="aspect-[16/10] bg-muted/20 relative overflow-hidden">
									<img 
										src={article.image} 
										alt={article.title}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div class="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
										{article.category}
									</div>
									<div class="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
										{article.readTime}
									</div>
								</div>
								
								<div class="p-6">
									<time class="text-xs text-muted-foreground uppercase tracking-wider">
										{formatDate(article.date)}
									</time>
									<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold group-hover:text-primary transition-colors leading-tight">
										{article.title}
									</h3>
									<p class="text-foreground/70 text-sm mb-4 leading-relaxed">
										{article.excerpt}
									</p>
									
									<a href="#read-{article.id}" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
										Read More
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
										</svg>
									</a>
								</div>
							</article>
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/each}

	<!-- Newsletter Signup -->
	<section class="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-muted/20 relative">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-6">Stay Informed</h2>
				<p class="text-lg text-foreground/80 mb-8 leading-relaxed">
					Be the first to know about Shamim's latest performances, achievements, 
					and cultural initiatives. Subscribe to our newsletter for exclusive updates.
				</p>
				
				<div class="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
					<form class="space-y-4">
						<div>
							<label for="email" class="sr-only">Email address</label>
							<input 
								type="email" 
								id="email" 
								name="email" 
								placeholder="Enter your email address"
								class="w-full px-6 py-4 bg-background/80 border border-primary/30 rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
								required
							/>
						</div>
						<button 
							type="submit"
							class="w-full bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
						>
							Subscribe to Newsletter
						</button>
					</form>
					
					<p class="text-xs text-muted-foreground mt-4">
						We respect your privacy. Unsubscribe at any time.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Press Kit & Media Resources -->
	<section class="py-16 md:py-20 bg-background relative">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-6">Media Resources</h2>
					<p class="text-lg text-muted-foreground">Professional materials for press and media coverage</p>
				</div>
				
				<div class="grid md:grid-cols-3 gap-6">
					<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl text-primary mb-4">📸</div>
						<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">Press Photos</h3>
						<p class="text-foreground/70 text-sm mb-4">High-resolution professional photographs for media use</p>
						<a href="#press-photos" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
							Download Photos
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</a>
					</div>
					
					<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl text-primary mb-4">📄</div>
						<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">Biography & EPK</h3>
						<p class="text-foreground/70 text-sm mb-4">Complete electronic press kit and professional biography</p>
						<a href="#epk" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
							Download EPK
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</a>
					</div>
					
					<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl text-primary mb-4">🎵</div>
						<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">Audio Samples</h3>
						<p class="text-foreground/70 text-sm mb-4">Professional recordings and performance samples</p>
						<a href="#audio" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
							Listen & Download
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</a>
					</div>
				</div>
				
				<div class="text-center mt-12">
					<p class="text-muted-foreground mb-6">For media inquiries and interview requests:</p>
					<a href="mailto:press@shamimminoo.com" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl">
						Contact Press Team
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	:global(body) {
		font-family: 'Roboto Slab', serif;
		background-color: hsl(210, 15%, 4%);
		color: hsl(210, 10%, 85%);
	}
	
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
	
	/* Form styling */
	input:focus {
		box-shadow: 0 0 0 3px rgba(140, 121, 86, 0.1);
	}
	
	/* Article hover effects */
	article:hover img {
		filter: brightness(1.1);
	}
	
	/* Newsletter background pattern */
	section:nth-child(6) {
		background-image: radial-gradient(circle at 20% 80%, rgba(140, 121, 86, 0.1) 0%, transparent 50%),
		                  radial-gradient(circle at 80% 20%, rgba(140, 121, 86, 0.05) 0%, transparent 50%);
	}
</style>