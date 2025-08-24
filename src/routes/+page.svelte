<script>
	import Header from '$lib/components/Header.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { heroVideo } from '$lib/config.js';
	
	let showVideo = false;
	let videoSection = false;
	
	function playHeroVideo() {
		showVideo = true;
	}
	
	function playVideoSection() {
		videoSection = true;
	}
</script>

<svelte:head>
	<title>Shamim Minoo – Redefining the classical harp with Gold Medal virtuosity and soulful artistry.</title>
	<meta name="description" content="Internationally recognized Iranian harpist Shamim Minoo, Gold Medalist at the 13th USA International Harp Competition." />
</svelte:head>

<Header />

<main class="bg-background text-foreground">
	<HeroSection video={heroVideo} {showVideo} onPlayVideo={playHeroVideo} />

	<AboutSection />
	
	<!-- Concerts Section -->
	<section id="concerts" class="py-20 md:py-24 bg-muted/20">
		<div class="container mx-auto text-center px-4">
			<h3 class="text-4xl font-bold mb-4 text-primary playfair-display-bold">Concerts</h3>
			<div class="max-w-md mx-auto border-t-2 border-primary/50 pt-8 mt-8">
				<p class="text-muted-foreground text-lg mb-8">
					No upcoming events scheduled yet. Stay tuned!
				</p>
				<a href="#" class="border-2 border-primary text-primary px-8 py-3 font-semibold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2">
					All Concerts
					<i class="fas fa-long-arrow-alt-right"></i>
				</a>
			</div>
		</div>
	</section>

	<!-- Video Section -->
	<section id="media" class="py-20 md:py-32 bg-background text-center">
		<div class="container mx-auto px-4">
			<h3 class="text-4xl font-bold text-primary playfair-display-bold mb-4">Video</h3>
			<h4 class="text-xl text-foreground/90 font-semibold mb-2">J.S. Bach - Ciaccona, Partita n.2 in Re minore</h4>
			<p class="text-sm uppercase tracking-widest text-muted-foreground mb-12">BY ANASTASIYA PETRYSHAK</p>
			
			{#if videoSection}
				<div class="relative max-w-4xl mx-auto aspect-video shadow-deep">
					<iframe 
						class="w-full h-full"
						src="https://www.youtube.com/embed/_uBShpnpRiw?autoplay=1" 
						title="Bach - Ciaccona Performance"
						frameborder="0" 
						allow="autoplay" 
						allowfullscreen>
					</iframe>
				</div>
			{:else}
				<div class="relative max-w-4xl mx-auto aspect-video shadow-deep group cursor-pointer" on:click={playVideoSection}>
					<!-- Video thumbnail -->
					<div class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
						<div class="text-center">
							<div class="text-8xl text-primary mb-4">🎼</div>
							<p class="text-lg text-foreground/80 mb-2">Bach - Ciaccona</p>
							<p class="text-sm text-muted-foreground">Click to play video</p>
						</div>
					</div>
					<div class="absolute inset-0 bg-black/30"></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<button class="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
			{/if}

			<!-- Alternative links -->
			<div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="https://www.youtube.com/watch?v=_uBShpnpRiw" 
					target="_blank"
					class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
					</svg>
					Watch on YouTube
				</a>
				<button 
					on:click={playVideoSection}
					class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
					</svg>
					Play Embedded
				</button>
			</div>
		</div>
	</section>

	<!-- Press Release Section -->
	<section id="press" class="py-20 md:py-24 bg-muted/20">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center mb-12">
				<h3 class="text-4xl font-bold text-primary playfair-display-bold">Press Release</h3>
				<a href="#" class="border-2 border-primary text-primary px-6 py-2 text-xs font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">All News</a>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- News Item 1 -->
				<div class="bg-background group">
					<div class="overflow-hidden">
						<img src="https://shamimminoo.com/wp-content/uploads/2017/02/maskatomb_wide-559x314.jpg" alt="News" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
					</div>
					<div class="p-8 text-left">
						<p class="text-xs text-muted-foreground mb-4">October 26, 2017</p>
						<h4 class="text-xl font-semibold mb-4 text-foreground/90 hover:text-primary transition-colors"><a href="#">We are finalist @ the International Music Festival</a></h4>
						<p class="text-sm text-foreground/70 mb-6 roboto-slab-regular">Picanha ball tip prosciutto shoulder turducken pig alcatra chuck pork meatball cupim doner tenderloin...</p>
						<a href="#" class="font-bold text-primary text-sm uppercase tracking-wider">Read More</a>
					</div>
				</div>
				<!-- News Item 2 -->
				<div class="bg-background group">
					<div class="overflow-hidden">
						<img src="https://shamimminoo.com/wp-content/uploads/2017/04/Indiana_wide-559x314.jpg" alt="News" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
					</div>
					<div class="p-8 text-left">
						<p class="text-xs text-muted-foreground mb-4">October 25, 2017</p>
						<h4 class="text-xl font-semibold mb-4 text-foreground/90 hover:text-primary transition-colors"><a href="#">New Album Release by Ultrasonic</a></h4>
						<p class="text-sm text-foreground/70 mb-6 roboto-slab-regular">Following an already impressive catalog that includes last year’s “Primus EP”on NBGS, “High Key” is...</p>
						<a href="#" class="font-bold text-primary text-sm uppercase tracking-wider">Read More</a>
					</div>
				</div>
				<!-- News Item 3 -->
				<div class="bg-background group">
					<div class="overflow-hidden">
						<img src="https://shamimminoo.com/wp-content/uploads/2017/04/adele_wide-559x314.jpg" alt="News" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
					</div>
					<div class="p-8 text-left">
						<p class="text-xs text-muted-foreground mb-4">October 24, 2017</p>
						<h4 class="text-xl font-semibold mb-4 text-foreground/90 hover:text-primary transition-colors"><a href="#">Additional North American Dates Announced</a></h4>
						<p class="text-sm text-foreground/70 mb-6 roboto-slab-regular">Sonaar WordPress Theme is pleased to announce additional dates to our North American tour! Spicy jalapeno...</p>
						<a href="#" class="font-bold text-primary text-sm uppercase tracking-wider">Read More</a>
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
	.roboto-slab-regular {
		font-family: 'Roboto Slab', serif;
	}
	.prose :global(.drop-cap::first-letter) {
		font-size: 4em;
		font-weight: bold;
		float: left;
		line-height: 0.8;
		margin-right: 0.1em;
		color: var(--color-primary);
	}
	/* Add FontAwesome for social icons */
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>