<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ConcertCard from '$lib/components/ConcertCard.svelte';
	
	export let data;
	
	// Helper function to format dates
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}
	
	function formatTime(timeString) {
		if (!timeString) return '';
		const [hours, minutes] = timeString.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	}
	
	// Get featured upcoming concert for hero
	const featuredConcert = data.featuredConcerts.find(c => c.status === 'upcoming') || data.upcomingConcerts[0];
</script>

<svelte:head>
	<title>Concerts - Shamim Minoo | Upcoming Performances & Concert Schedule</title>
	<meta name="description" content="Discover Shamim Minoo's upcoming concert performances, recitals, and special events. Book tickets and experience world-class harp artistry." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary playfair-display-bold mb-6 leading-tight">
					Concert Schedule
				</h1>
				<p class="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
					Experience the ethereal beauty of classical harp through intimate recitals 
					and grand concert performances across the world's most prestigious venues.
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎼 Solo Recitals</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🏛️ Prestigious Venues</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎫 Book Now</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🌍 International Tours</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Concert Section -->
	{#if featuredConcert}
		<section class="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-muted/10 relative">
			<div class="container mx-auto px-4">
				<div class="max-w-6xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">Featured Performance</h2>
						<p class="text-lg text-muted-foreground">Don't miss this exceptional concert experience</p>
					</div>
					
					<article class="bg-gradient-to-br from-background/80 to-muted/20 rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
						<div class="grid lg:grid-cols-12 gap-8">
							<div class="lg:col-span-5">
								<div class="aspect-[4/3] lg:aspect-auto lg:h-full bg-muted/20 relative overflow-hidden">
									{#if featuredConcert.image}
										<img 
											src={featuredConcert.image} 
											alt={featuredConcert.title}
											class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
										/>
									{:else}
										<div class="w-full h-full bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
											<div class="text-center">
												<div class="text-8xl text-primary mb-4">🎼</div>
												<p class="text-lg text-foreground/80">Featured Concert</p>
											</div>
										</div>
									{/if}
									{#if featuredConcert.featured}
										<div class="absolute top-4 left-4">
											<span class="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold uppercase rounded-full shadow-lg">
												Featured
											</span>
										</div>
									{/if}
								</div>
							</div>
							
							<div class="lg:col-span-7 p-6 lg:p-8">
								<div class="space-y-6">
									<div>
										<p class="text-sm text-primary font-bold uppercase tracking-wider mb-2">
											{formatDate(featuredConcert.date)}
											{#if featuredConcert.time}
												• {formatTime(featuredConcert.time)}
											{/if}
										</p>
										<h3 class="text-3xl md:text-4xl font-bold text-foreground mb-4 playfair-display-bold">
											{featuredConcert.title}
										</h3>
										<div class="mb-4">
											<p class="text-lg font-semibold text-foreground/90">{featuredConcert.venue}</p>
											<p class="text-muted-foreground">{featuredConcert.location}</p>
										</div>
									</div>
									
									<p class="text-foreground/80 leading-relaxed">
										{featuredConcert.description}
									</p>
									
									{#if featuredConcert.program && featuredConcert.program.length > 0}
										<div>
											<h4 class="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Program Highlights</h4>
											<ul class="space-y-2">
												{#each featuredConcert.program.slice(0, 3) as piece}
													<li class="text-sm text-foreground/70 border-l-2 border-primary/30 pl-3">
														{piece}
													</li>
												{/each}
											</ul>
										</div>
									{/if}
									
									<div class="flex flex-col sm:flex-row gap-4 pt-4">
										{#if featuredConcert.tickets && featuredConcert.status === 'upcoming'}
											<a
												href={featuredConcert.tickets}
												target="_blank"
												rel="noopener noreferrer"
												class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl rounded-full"
											>
												Buy Tickets
											</a>
										{/if}
										<a
											href="/concerts/{featuredConcert.slug}"
											class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center rounded-full"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/if}

	<!-- Upcoming Concerts Section -->
	{#if data.upcomingConcerts.length > 0}
		<section class="py-16 md:py-20 bg-background">
			<div class="container mx-auto px-4">
				<div class="max-w-7xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">
							Upcoming Concerts
						</h2>
						<p class="text-lg text-muted-foreground">Mark your calendar for these exceptional performances</p>
					</div>
					
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{#each data.upcomingConcerts as concert}
							<ConcertCard {concert} />
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Past Concerts Section -->
	{#if data.pastConcerts.length > 0}
		<section class="py-16 md:py-20 bg-gradient-to-br from-muted/10 to-primary/5">
			<div class="container mx-auto px-4">
				<div class="max-w-7xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">
							Past Performances
						</h2>
						<p class="text-lg text-muted-foreground">Relive memorable concert experiences</p>
					</div>
					
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{#each data.pastConcerts.slice(0, 6) as concert}
							<ConcertCard {concert} isPast={true} />
						{/each}
					</div>
					
					{#if data.pastConcerts.length > 6}
						<div class="text-center mt-12">
							<button class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full">
								View All Past Concerts
							</button>
						</div>
					{/if}
				</div>
			</div>
		</section>
	{/if}

	<!-- Concert Information & Booking -->
	<section class="py-16 md:py-20 bg-gradient-to-br from-background to-muted/10">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-6">Concert Information</h2>
					<p class="text-lg text-muted-foreground">Everything you need to know for the perfect concert experience</p>
				</div>
				
				<div class="grid md:grid-cols-3 gap-6">
					<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl text-primary mb-4">🎫</div>
						<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">Tickets & Booking</h3>
						<p class="text-foreground/70 text-sm mb-4">Secure your seats for upcoming performances through our official ticket partners.</p>
						<a href="#tickets" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
							Book Now
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>
					
					<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl text-primary mb-4">🏛️</div>
						<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">Venues & Locations</h3>
						<p class="text-foreground/70 text-sm mb-4">Performing at the world's most prestigious concert halls and intimate venues.</p>
						<a href="#venues" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
							Explore Venues
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>
					
					<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
						<div class="text-4xl text-primary mb-4">📧</div>
						<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">Stay Updated</h3>
						<p class="text-foreground/70 text-sm mb-4">Subscribe to receive notifications about new concerts and exclusive presales.</p>
						<a href="#newsletter" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
							Subscribe
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>
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
</style>
