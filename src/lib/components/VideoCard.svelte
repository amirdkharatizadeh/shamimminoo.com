<script>
	import { formatDate } from '$lib/utils';
	import StatusBadge from './StatusBadge.svelte';

	export let video;
	export let variant = 'default'; // 'default', 'featured', 'compact'

	// Category badge type mapping
	const categoryTypes = {
		'Performance': 'primary',
		'Masterclass': 'info',
		'Cultural': 'success',
		'Interview': 'default',
		'Behind the Scenes': 'info'
	};
	
	$: badgeType = categoryTypes[video.category] || 'default';
	
	// Generate YouTube thumbnail URL
	$: thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
</script>

<article class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 {variant === 'featured' ? 'md:col-span-2' : ''}">
	<!-- Video Thumbnail -->
	<div class="relative overflow-hidden">
		<div class="aspect-video relative">
			<img
				src={video.image || thumbnailUrl}
				alt={video.title}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				loading="lazy"
			/>
			
			<!-- Video Overlay -->
			<div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
				<!-- Play Button -->
				<div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-1" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
			
			<!-- Duration Badge -->
			{#if video.duration}
				<div class="absolute bottom-4 right-4">
					<span class="bg-black/80 text-white px-2 py-1 text-xs font-medium rounded backdrop-blur-sm">
						{video.duration}
					</span>
				</div>
			{/if}
			
			<!-- Start Time Indicator -->
			{#if video.startTime && video.startTime > 0}
				<div class="absolute bottom-4 left-4">
					<span class="bg-primary/80 text-primary-foreground px-2 py-1 text-xs font-medium rounded backdrop-blur-sm">
						Starts at {Math.floor(video.startTime / 60)}:{(video.startTime % 60).toString().padStart(2, '0')}
					</span>
				</div>
			{/if}
		</div>

		<!-- Category and Featured Badges -->
		<div class="absolute top-4 left-4 flex gap-2">
			<StatusBadge type={badgeType} text={video.category} size="small" />
			{#if video.featured}
				<StatusBadge type="featured" text="Featured" size="small" />
			{/if}
		</div>
	</div>

	<!-- Video Content -->
	<div class="p-6 space-y-4">
		<!-- Date and Venue -->
		<div class="flex items-center justify-between text-xs text-muted-foreground">
			<time class="font-semibold uppercase tracking-wider">
				{formatDate(video.date)}
			</time>
			{#if video.venue}
				<span>{video.venue}</span>
			{/if}
		</div>

		<!-- Title -->
		<h3 class="text-xl {variant === 'featured' ? 'md:text-2xl' : ''} font-bold text-foreground/90 playfair-display-bold group-hover:text-primary transition-colors leading-tight">
			{video.title}
		</h3>

		<!-- Composer/Location Info -->
		{#if video.composer || video.location}
			<div class="text-sm text-muted-foreground space-y-1">
				{#if video.composer}
					<p class="font-medium">🎼 {video.composer}</p>
				{/if}
				{#if video.location}
					<p>📍 {video.location}</p>
				{/if}
			</div>
		{/if}

		<!-- Excerpt -->
		<p class="text-sm text-foreground/70 leading-relaxed {variant === 'compact' ? 'line-clamp-2' : 'line-clamp-3'}">
			{video.excerpt}
		</p>

		<!-- Tags -->
		{#if video.tags && video.tags.length > 0 && variant !== 'compact'}
			<div class="flex flex-wrap gap-2">
				{#each video.tags.slice(0, 3) as tag}
					<span class="bg-primary/10 text-primary px-2 py-1 text-xs rounded-full font-medium">
						{tag}
					</span>
				{/each}
				{#if video.tags.length > 3}
					<span class="text-xs text-muted-foreground py-1">
						+{video.tags.length - 3} more
					</span>
				{/if}
			</div>
		{/if}

		<!-- Action Buttons -->
		<div class="flex flex-col sm:flex-row gap-2 pt-2">
			<a
				href="https://www.youtube.com/watch?v={video.youtubeId}{video.startTime ? `&t=${video.startTime}s` : ''}"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase hover:bg-red-700 transition-colors text-center rounded flex items-center justify-center gap-2"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
				</svg>
				Watch on YouTube
			</a>
			<a
				href="/videos/{video.slug}"
				class="border border-primary text-primary px-4 py-2 text-sm font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-colors text-center rounded"
			>
				Learn More
			</a>
		</div>
	</div>
</article>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}

	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>