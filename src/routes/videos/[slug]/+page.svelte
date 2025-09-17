<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	
	export let data;
	
	const video = data.video;
	
	// Helper function to format dates
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}
	
	// Generate YouTube embed URL with start time
	function getYouTubeEmbedUrl(youtubeId, startTime) {
		let url = `https://www.youtube.com/embed/${youtubeId}`;
		if (startTime && startTime > 0) {
			url += `?start=${startTime}`;
		}
		return url;
	}
	
	// Format duration from seconds to MM:SS
	function formatDuration(seconds) {
		if (!seconds) return '';
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}	// Generate breadcrumbs
	const breadcrumbs = [
		{ text: 'Home', href: '/' },
		{ text: 'Videos', href: '/videos' },
		{ text: video.title || 'Video', href: `/videos/${video.slug}` }
	];
</script>

<svelte:head>
	<title>{video.title} - Shamim Minoo | Video Gallery</title>
	<meta name="description" content={video.excerpt || `Watch ${video.title} by Shamim Minoo. ${video.category} performance${video.venue ? ` at ${video.venue}` : ''}.`} />
	
	<!-- Open Graph meta tags for better social sharing -->
	<meta property="og:title" content="{video.title} - Shamim Minoo" />
	<meta property="og:description" content={video.excerpt || `Watch this ${video.category.toLowerCase()} performance by Shamim Minoo.`} />
	<meta property="og:image" content={video.image || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} />
	<meta property="og:type" content="video.other" />
	<meta property="og:url" content="https://shamimminoo.com/videos/{video.slug}" />
	
	<!-- YouTube-specific meta tags -->
	{#if video.youtubeId}
		<meta property="og:video" content="https://www.youtube.com/watch?v={video.youtubeId}" />
		<meta property="og:video:secure_url" content="https://www.youtube.com/watch?v={video.youtubeId}" />
		<meta property="og:video:type" content="text/html" />
		<meta property="og:video:width" content="1280" />
		<meta property="og:video:height" content="720" />
	{/if}
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section with Video Info -->
	<PageHero
		title={video.title}
		subtitle={video.excerpt}
		tags={video.featured ? ['🌟 Featured'] : []}
		variant="detail"
		{breadcrumbs}
	/>

	<!-- Main Video Section -->
	<ContentSection
		title="Watch Performance"
		subtitle={video.composer ? `${video.composer}${video.venue ? ` • ${video.venue}` : ''}` : ''}
		variant="default"
		maxWidth="max-w-6xl"
	>
		<!-- Video Player -->
		<div class="mb-8">
			{#if video.youtubeId}
				<div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted/20 border border-primary/20">
					<iframe
						class="w-full h-full"
						src={getYouTubeEmbedUrl(video.youtubeId, video.startTime)}
						title={video.title}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			{:else if video.videoUrl}
				<div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted/20 border border-primary/20">
					<video 
						controls 
						class="w-full h-full object-cover"
						poster={video.image || video.thumbnail}
					>
						<source src={video.videoUrl} type="video/webm" />
						<source src={video.videoUrl} type="video/mp4" />
						<track kind="captions" src="" label="English captions" srclang="en" default />
						<p class="text-center text-muted-foreground p-8">
							Your browser doesn't support video playback. 
							<a href={video.videoUrl} class="text-primary underline">Download the video</a>
						</p>
					</video>
				</div>
			{:else}
				<div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted/20 border border-primary/20 flex items-center justify-center">
					<div class="text-center text-muted-foreground">
						<div class="text-6xl mb-4">🎥</div>
						<p>Video coming soon</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- Video Metadata Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			{#if video.date}
				<div class="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
					<div class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">📅 Date</div>
					<div class="text-lg font-bold text-foreground">{formatDate(video.date)}</div>
				</div>
			{/if}
			
			{#if video.duration}
				<div class="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
					<div class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">⏱️ Duration</div>
					<div class="text-lg font-bold text-foreground">{video.duration}</div>
				</div>
			{/if}
			
			{#if video.venue && video.location}
				<div class="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
					<div class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">📍 Venue</div>
					<div class="text-lg font-bold text-foreground">{video.venue}</div>
					<div class="text-sm text-muted-foreground">{video.location}</div>
				</div>
			{/if}
			
			{#if video.category}
				<div class="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
					<div class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">🎭 Category</div>
					<div class="text-lg font-bold text-foreground">{video.category}</div>
				</div>
			{/if}
		</div>

		<!-- Performance Details -->
		{#if video.startTime && video.startTime > 0}
			<div class="bg-primary/10 border border-primary/30 p-6 rounded-xl mb-8">
				<div class="flex items-center gap-3 mb-2">
					<div class="text-primary text-2xl">🎯</div>
					<h3 class="text-lg font-bold text-primary">Performance Start Time</h3>
				</div>
				<p class="text-foreground/80">
					The main performance begins at <strong>{Math.floor(video.startTime / 60)}:{(video.startTime % 60).toString().padStart(2, '0')}</strong>.
					{#if video.youtubeId}
						The embedded video above will automatically start at this time.
					{/if}
				</p>
			</div>
		{/if}
	</ContentSection>

	<!-- Video Description & Details -->
	{#if data.component || video.composer || video.tags}
		<ContentSection
			title="About This Performance"
			variant="muted"
			maxWidth="max-w-4xl"
		>
			<div class="space-y-8">
				<!-- Composer Information -->
				{#if video.composer}
					<div>
						<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-4">🎼 Composer</h3>
						<p class="text-lg text-foreground/80">{video.composer}</p>
						{#if video.piece}
							<p class="text-lg text-foreground/80 font-semibold mt-2">{video.piece}</p>
						{/if}
					</div>
				{/if}

				<!-- Description Content -->
				{#if data.component}
					<article class="prose prose-invert prose-lg max-w-none">
						<svelte:component this={data.component} />
					</article>
				{/if}

				<!-- Tags -->
				{#if video.tags && video.tags.length > 0}
					<div>
						<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-4">🏷️ Tags</h3>
						<div class="flex flex-wrap gap-3">
							{#each video.tags as tag}
								<StatusBadge type="primary" text={tag} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</ContentSection>
	{/if}

	<!-- Actions Section -->
	<ContentSection
		title="Share & Connect"
		subtitle="Enjoy this performance? Share it with others and follow for more"
		variant="gradient"
		maxWidth="max-w-4xl"
	>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- YouTube Actions -->
			{#if video.youtubeId}
				<div class="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
					<h3 class="text-xl font-bold text-primary playfair-display-bold mb-4">🎬 YouTube</h3>
					<div class="space-y-4">
						<a
							href="https://www.youtube.com/watch?v={video.youtubeId}{video.startTime ? `&t=${video.startTime}s` : ''}"
							target="_blank"
							rel="noopener noreferrer"
							class="block w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
						>
							Watch on YouTube
						</a>
						<div class="flex gap-2">
							<a
								href="https://www.youtube.com/channel/UCxxxxx?sub_confirmation=1"
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg font-semibold text-center text-sm transition-colors duration-300"
							>
								Subscribe
							</a>
							<a
								href="https://www.youtube.com/watch?v={video.youtubeId}"
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg font-semibold text-center text-sm transition-colors duration-300"
							>
								Like & Comment
							</a>
						</div>
					</div>
				</div>
			{/if}

			<!-- Share Options -->
			<div class="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
				<h3 class="text-xl font-bold text-primary playfair-display-bold mb-4">📤 Share</h3>
				<div class="space-y-4">
					<button
						on:click={() => {
							if (navigator.share) {
								navigator.share({
									title: video.title,
									url: window.location.href
								});
							} else {
								navigator.clipboard.writeText(window.location.href);
								alert('Link copied to clipboard!');
							}
						}}
						class="w-full bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
					>
						Share This Video
					</button>
					<div class="grid grid-cols-3 gap-2">
						<a
							href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(video.title)}&url=${encodeURIComponent('https://shamimminoo.com/videos/' + video.slug)}`}
							target="_blank"
							rel="noopener noreferrer"
							class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg text-center text-sm font-semibold transition-colors duration-300"
						>
							Twitter
						</a>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://shamimminoo.com/videos/' + video.slug)}`}
							target="_blank"
							rel="noopener noreferrer"
							class="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg text-center text-sm font-semibold transition-colors duration-300"
						>
							Facebook
						</a>
						<button
							on:click={() => {
								navigator.clipboard.writeText(window.location.href);
								alert('Link copied to clipboard!');
							}}
							class="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg text-center text-sm font-semibold transition-colors duration-300"
						>
							Copy Link
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Back to Videos -->
		<div class="mt-8 text-center">
			<a 
				href="/videos"
				class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
				</svg>
				Back to Video Gallery
			</a>
		</div>
	</ContentSection>
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
	
	/* Custom prose styling for video descriptions */
	.prose {
		--tw-prose-body: hsl(210, 10%, 85%);
		--tw-prose-headings: hsl(40, 25%, 55%);
		--tw-prose-lead: hsl(210, 10%, 75%);
		--tw-prose-links: hsl(40, 25%, 55%);
		--tw-prose-bold: hsl(210, 10%, 95%);
		--tw-prose-counters: hsl(210, 10%, 65%);
		--tw-prose-bullets: hsl(210, 10%, 65%);
		--tw-prose-hr: hsl(210, 15%, 20%);
		--tw-prose-quotes: hsl(210, 10%, 85%);
		--tw-prose-quote-borders: hsl(210, 15%, 20%);
		--tw-prose-captions: hsl(210, 10%, 65%);
		--tw-prose-code: hsl(210, 10%, 95%);
		--tw-prose-pre-code: hsl(210, 10%, 75%);
		--tw-prose-pre-bg: hsl(210, 15%, 8%);
		--tw-prose-th-borders: hsl(210, 15%, 20%);
		--tw-prose-td-borders: hsl(210, 15%, 15%);
	}
</style>