<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	// Video data structure
	const featuredVideo = {
		id: 'featured-performance',
		title: 'Gold Medal Performance - USA International Harp Competition 2025',
		description: 'Shamim\'s historic winning performance that made her the first Iranian harpist to receive this prestigious recognition.',
		videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
		thumbnail: '/img/logo.jpg',
		duration: '8:45',
		date: '2025-07-20',
		location: 'Bloomington, Indiana',
		category: 'Competition'
	};
	
	const videoCategories = [
		{
			title: 'Competition Performances',
			videos: [
				{
					id: 'harp-comp-2025',
					title: 'Duphly - La Pothouin',
					description: 'Award-winning interpretation of this baroque masterpiece',
					videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
					thumbnail: '/img/logo.jpg',
					duration: '8:45',
					date: '2025-07-20',
					location: 'USA International Harp Competition'
				},
				{
					id: 'semifinal-2025',
					title: 'Mozart - Concerto in C Major',
					description: 'Semifinal performance showcasing classical technique',
					videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
					thumbnail: '/img/logo.jpg',
					duration: '12:30',
					date: '2025-07-18',
					location: 'USA International Harp Competition'
				}
			]
		},
		{
			title: 'Recitals & Concerts',
			videos: [
				{
					id: 'paris-recital-2024',
					title: 'Solo Recital at Conservatoire National',
					description: 'Graduate recital featuring works by Debussy and Ravel',
					videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
					thumbnail: '/img/logo.jpg',
					duration: '45:20',
					date: '2024-12-15',
					location: 'Paris, France'
				},
				{
					id: 'chamber-music-2024',
					title: 'Chamber Music Collaboration',
					description: 'Quintet performance with string quartet',
					videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
					thumbnail: '/img/logo.jpg',
					duration: '25:18',
					date: '2024-10-08',
					location: 'Salle Cortot, Paris'
				}
			]
		},
		{
			title: 'Masterclasses & Education',
			videos: [
				{
					id: 'masterclass-2024',
					title: 'Harp Technique Masterclass',
					description: 'Teaching session on advanced harp techniques',
					videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
					thumbnail: '/img/logo.jpg',
					duration: '35:45',
					date: '2024-11-20',
					location: 'Conservatoire National, Paris'
				}
			]
		},
		{
			title: 'Cultural Collaborations',
			videos: [
				{
					id: 'persian-fusion-2024',
					title: 'East Meets West - Persian Fusion',
					description: 'Innovative blend of Persian and Western classical traditions',
					videoUrl: '/vid/Duphly_La_Pothouin_optimized.webm',
					thumbnail: '/img/logo.jpg',
					duration: '18:30',
					date: '2024-09-15',
					location: 'Cultural Center, Paris'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Videos - Shamim Minoo | Performance Gallery</title>
	<meta name="description" content="Watch Shamim Minoo's captivating harp performances, competition wins, recitals, and cultural collaborations. Experience the artistry of this rising star." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary playfair-display-bold mb-6 leading-tight">
					Performance Gallery
				</h1>
				<p class="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
					Experience Shamim's musical journey through captivating performances, 
					from competition victories to intimate recitals.
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
					<span class="bg-primary/10 px-4 py-2 rounded-full">🏆 Competition Wins</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎼 Solo Recitals</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🌍 Cultural Fusion</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎓 Educational Content</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Video Section -->
	<section class="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-muted/10 relative">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">Featured Performance</h2>
					<p class="text-lg text-muted-foreground">Historic gold medal winning performance</p>
				</div>
				
				<div class="bg-gradient-to-br from-background/80 to-muted/20 rounded-2xl p-6 lg:p-8 shadow-2xl border border-primary/20">
					<div class="grid lg:grid-cols-12 gap-8 items-center">
						<div class="lg:col-span-7">
							<div class="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-muted/20">
								<video 
									controls 
									class="w-full h-full object-cover"
									poster={featuredVideo.thumbnail}
								>
									<source src={featuredVideo.videoUrl} type="video/webm" />
									<track kind="captions" src="" label="English captions" srclang="en" default />
									<p class="text-center text-muted-foreground p-8">
										Your browser doesn't support video playback. 
										<a href={featuredVideo.videoUrl} class="text-primary underline">Download the video</a>
									</p>
								</video>
								<div class="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
									{featuredVideo.duration}
								</div>
							</div>
						</div>
						
						<div class="lg:col-span-5">
							<div class="space-y-4">
								<h3 class="text-2xl lg:text-3xl font-bold text-foreground playfair-display-bold leading-tight">
									{featuredVideo.title}
								</h3>
								<p class="text-foreground/80 leading-relaxed">
									{featuredVideo.description}
								</p>
								
								<div class="grid grid-cols-2 gap-4 py-4">
									<div class="bg-primary/10 p-4 rounded-lg">
										<div class="text-xs uppercase tracking-wider text-muted-foreground mb-1">Date</div>
										<div class="font-semibold text-foreground">July 20, 2025</div>
									</div>
									<div class="bg-primary/10 p-4 rounded-lg">
										<div class="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</div>
										<div class="font-semibold text-foreground">Bloomington, IN</div>
									</div>
								</div>
								
								<div class="flex flex-wrap gap-2">
									<span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
										🏆 Gold Medal
									</span>
									<span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
										🎖️ Renié Prize
									</span>
									<span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
										🌟 Historic First
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Video Categories -->
	{#each videoCategories as category}
		<section class="py-16 md:py-20 {category.title.includes('Competition') ? 'bg-background' : category.title.includes('Recitals') ? 'bg-gradient-to-br from-muted/10 to-primary/5' : category.title.includes('Masterclasses') ? 'bg-gradient-to-br from-primary/5 to-background' : 'bg-gradient-to-br from-background to-muted/10'}">
			<div class="container mx-auto px-4">
				<div class="max-w-7xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">
							{category.title}
						</h2>
					</div>
					
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{#each category.videos as video}
							<div class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30">
								<div class="relative aspect-video bg-muted/20">
									<video 
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										poster={video.thumbnail}
										preload="metadata"
									>
										<source src={video.videoUrl} type="video/webm" />
										<track kind="captions" src="" label="English captions" srclang="en" default />
									</video>
									<div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="bg-primary/90 text-primary-foreground rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
											<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
												<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
											</svg>
										</div>
									</div>
									<div class="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
										{video.duration}
									</div>
								</div>
								
								<div class="p-6">
									<h3 class="text-xl font-bold text-foreground mb-2 playfair-display-bold group-hover:text-primary transition-colors">
										{video.title}
									</h3>
									<p class="text-foreground/70 text-sm mb-4 leading-relaxed">
										{video.description}
									</p>
									
									<div class="flex justify-between items-center text-xs text-muted-foreground">
										<span>{new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
										<span>{video.location}</span>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/each}

	<!-- Stats Section -->
	<section class="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-muted/20 relative">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-5xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">By The Numbers</h2>
					<p class="text-lg text-muted-foreground">Shamim's growing digital presence and impact</p>
				</div>
				
				<div class="grid md:grid-cols-4 gap-6">
					<div class="text-center bg-background/60 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl font-bold text-primary playfair-display-bold mb-2">25+</div>
						<div class="text-sm uppercase tracking-wider text-muted-foreground">Performance Videos</div>
					</div>
					<div class="text-center bg-background/60 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl font-bold text-primary playfair-display-bold mb-2">150K+</div>
						<div class="text-sm uppercase tracking-wider text-muted-foreground">Total Views</div>
					</div>
					<div class="text-center bg-background/60 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl font-bold text-primary playfair-display-bold mb-2">8</div>
						<div class="text-sm uppercase tracking-wider text-muted-foreground">Countries Reached</div>
					</div>
					<div class="text-center bg-background/60 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl font-bold text-primary playfair-display-bold mb-2">5K+</div>
						<div class="text-sm uppercase tracking-wider text-muted-foreground">Subscribers</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="py-16 md:py-20 bg-background relative">
		<div class="container mx-auto px-4 text-center">
			<div class="max-w-3xl mx-auto">
				<h2 class="text-3xl md:text-4lg:text-5xl font-bold text-primary playfair-display-bold mb-6">Stay Connected</h2>
				<p class="text-lg text-foreground/80 mb-8 leading-relaxed">
					Be the first to watch new performances and follow Shamim's musical journey 
					as she continues to break boundaries in classical harp performance.
				</p>
				
				<div class="flex flex-col sm:flex-row justify-center gap-4">
					<a href="#subscribe" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 inline-flex items-center gap-3 rounded-full shadow-lg hover:shadow-xl">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 017.5-7.5H19a2 2 0 012 2v1" />
						</svg>
						Subscribe for Updates
					</a>
					<a href="#social" class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-3 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
						</svg>
						Follow on Social Media
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
	
	video {
		background-color: hsl(210, 15%, 8%);
	}
	
	.aspect-video {
		aspect-ratio: 16 / 9;
	}
	
	/* Custom scrollbar for video elements */
	video::-webkit-media-controls-panel {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>