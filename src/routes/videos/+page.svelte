<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import FeaturedContent from '$lib/components/FeaturedContent.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
	import VideoCard from '$lib/components/VideoCard.svelte';
	
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
	
	// Debug: Log the data to see what we're getting
	console.log('Videos page data:', data);
	
	// Get featured video for hero (with fallback)
	const featuredVideo = data.featuredVideos && data.featuredVideos.length > 0 ? data.featuredVideos[0] : null;
</script>

<svelte:head>
	<title>Videos - Shamim Minoo | Performances & Educational Content</title>
	<meta name="description" content="Watch Shamim Minoo's performances, masterclasses, and educational videos showcasing classical harp artistry and cultural bridge-building." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<PageHero
		title="Video Gallery"
		subtitle="Explore performances, masterclasses, and behind-the-scenes content showcasing the artistry and cultural bridge-building that defines Shamim's musical journey."
		tags={['🎥 Performances', '🎓 Masterclasses', '🌍 Cultural Content', '▶️ YouTube']}
		variant="large"
	/>

	<!-- Featured Video Section -->
	{#if featuredVideo}
		<ContentSection
			title="Featured Performance"
			subtitle="Don't miss this exceptional video content"
			variant="primary"
		>
			<FeaturedContent
				title={featuredVideo.title}
				subtitle={`${formatDate(featuredVideo.date)} • ${featuredVideo.category}${featuredVideo.duration ? ' • ' + featuredVideo.duration : ''}`}
				image={featuredVideo.image || `https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
				imageAlt={featuredVideo.title}
				badges={featuredVideo.featured ? [{type: 'featured', text: 'Featured'}] : []}
				actions={[
					{href: `https://www.youtube.com/watch?v=${featuredVideo.youtubeId}${featuredVideo.startTime ? `&t=${featuredVideo.startTime}s` : ''}`, text: 'Watch on YouTube', variant: 'primary', external: true},
					{href: `/videos/${featuredVideo.slug}`, text: 'Learn More', variant: 'secondary'}
				]}
			>
				<!-- Video Details -->
				<div class="mb-4 space-y-2">
					{#if featuredVideo.composer}
						<p class="text-sm font-semibold text-foreground/80">🎼 {featuredVideo.composer}</p>
					{/if}
					{#if featuredVideo.venue && featuredVideo.location}
						<p class="text-xs text-muted-foreground">📍 {featuredVideo.venue}, {featuredVideo.location}</p>
					{/if}
					{#if featuredVideo.duration}
						<p class="text-xs text-muted-foreground">⏱️ Duration: {featuredVideo.duration}</p>
					{/if}
					{#if featuredVideo.startTime && featuredVideo.startTime > 0}
						<p class="text-xs text-primary">🎯 Performance starts at {Math.floor(featuredVideo.startTime / 60)}:{(featuredVideo.startTime % 60).toString().padStart(2, '0')}</p>
					{/if}
				</div>
				
				<!-- Excerpt -->
				<p class="text-foreground/80 leading-relaxed mb-4">
					{featuredVideo.excerpt}
				</p>
				
				<!-- Tags -->
				{#if featuredVideo.tags && featuredVideo.tags.length > 0}
					<div>
						<h4 class="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Tags</h4>
						<div class="flex flex-wrap gap-2">
							{#each featuredVideo.tags.slice(0, 4) as tag}
								<span class="bg-primary/10 text-primary px-3 py-1 text-sm rounded-full font-medium">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/if}
			</FeaturedContent>
		</ContentSection>
	{/if}

	<!-- All Videos Section (if no featured or as fallback) -->
	{#if data.videos && data.videos.length > 0}
		<ContentSection
			title={featuredVideo ? "All Videos" : "Video Collection"}
			subtitle={featuredVideo ? "Complete video library" : "Explore performances, masterclasses, and cultural content"}
			variant="default"
		>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{#each data.videos as video}
					<VideoCard {video} />
				{/each}
			</div>
		</ContentSection>
	{:else}
		<!-- Debug/Error Section -->
		<ContentSection
			title="Videos Loading..."
			subtitle="Checking for available videos"
			variant="default"
		>
			<div class="text-center p-8">
				<p class="text-muted-foreground mb-4">
					Debug Info: 
					Videos count: {data.videos ? data.videos.length : 'undefined'}
					Featured count: {data.featuredVideos ? data.featuredVideos.length : 'undefined'}
				</p>
				<p class="text-foreground/80">
					No videos found. Please check the video content files in <code>contents/videos/</code>
				</p>
			</div>
		</ContentSection>
	{/if}

	<!-- Video Categories Section -->
	{#if data.categories && data.categories.length > 0}
		<ContentSection
			title="Video Categories"
			subtitle="Browse videos by category"
			variant="muted"
			maxWidth="max-w-6xl"
		>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each data.categories as category}
					{@const categoryCount = data.videos ? data.videos.filter(v => v.category === category).length : 0}
					<SectionCard
						icon={category === 'Performance' ? '🎼' : category === 'Masterclass' ? '🎓' : category === 'Cultural' ? '🌍' : category === 'Interview' ? '🎤' : '🎥'}
						title={category}
						description={`${categoryCount} video${categoryCount !== 1 ? 's' : ''} in this category`}
						href="/videos?category={category.toLowerCase()}"
						linkText="View Videos"
						variant="hover"
					/>
				{/each}
			</div>
		</ContentSection>
	{/if}

	<!-- YouTube Channel & Subscribe Section -->
	<ContentSection
		title="Follow the Journey"
		subtitle="Subscribe for the latest performances and educational content"
		variant="gradient"
		maxWidth="max-w-6xl"
	>
		<div class="grid md:grid-cols-3 gap-6">
			<SectionCard
				icon="📺"
				title="YouTube Channel"
				description="Subscribe to Shamim's YouTube channel for the latest videos and performances."
				href="https://youtube.com/@shamimminoo"
				linkText="Subscribe"
				variant="hover"
			/>
			
			<SectionCard
				icon="🔔"
				title="Notifications"
				description="Turn on notifications to be the first to see new video releases and premieres."
				href="#notifications"
				linkText="Get Notified"
				variant="hover"
			/>
			
			<SectionCard
				icon="🎓"
				title="Educational Content"
				description="Access masterclasses, technique videos, and educational resources for harpists."
				href="#educational"
				linkText="Learn More"
				variant="hover"
			/>
		</div>
		
		<!-- Video Submission Form -->
		<div class="mt-12 bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
			<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-4 text-center">Request a Performance</h3>
			<p class="text-muted-foreground mb-6 text-center">
				Interested in commissioning a video performance or requesting specific repertoire? Get in touch.
			</p>
			
			<form class="space-y-4">
				<div class="grid md:grid-cols-2 gap-4">
					<input 
						type="text" 
						placeholder="Your Name" 
						class="w-full px-4 py-3 bg-background/80 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground"
						required
					/>
					<input 
						type="email" 
						placeholder="Email Address" 
						class="w-full px-4 py-3 bg-background/80 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground"
						required
					/>
				</div>
				<textarea 
					placeholder="Describe your video request or preferred repertoire..."
					rows="4"
					class="w-full px-4 py-3 bg-background/80 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground resize-none"
					required
				></textarea>
				<button 
					type="submit"
					class="w-full bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
				>
					Send Request
				</button>
			</form>
			
			<p class="text-xs text-muted-foreground mt-4 text-center">
				Responses within 48 hours for all professional inquiries.
			</p>
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