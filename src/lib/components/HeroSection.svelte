<script>
	export let video;
	export let showVideo = false;
	export let onPlayVideo;
</script>

<!-- Hero Section -->
<section class="relative h-screen w-full overflow-hidden">
	{#if showVideo && video}
		<div class="absolute top-0 left-0 w-full h-full z-10">
			<iframe 
				class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
				src="{video.embedUrl}?autoplay=1&mute=0&controls=1" 
				title={video.title}
				frameborder="0" 
				allow="autoplay; encrypted-media" 
				allowfullscreen>
			</iframe>
		</div>
	{:else}
		<!-- Hero content without video -->
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-muted/40 to-primary/20"></div>
		<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
			<div class="text-center px-4">
				<div class="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shadow-deep border border-primary/20">
					<div class="text-6xl text-primary">🎵</div>
				</div>
				<h1 class="text-6xl md:text-8xl font-bold mb-6 text-foreground playfair-display-bold">Shamim Minoo</h1>
				<p class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
					Redefining the classical harp with Gold Medal virtuosity and soulful artistry.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button 
						on:click={onPlayVideo}
						class="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-deep hover:shadow-natural transition-all duration-300 font-semibold text-lg"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
						</svg>
						Watch Performance
					</button>
					<a 
						href={video?.url || "#"} 
						target="_blank"
						class="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
						Open YouTube
					</a>
				</div>
			</div>
		</div>
	{/if}
	<div class="absolute top-0 left-0 w-full h-full bg-black/20"></div>
</section>
