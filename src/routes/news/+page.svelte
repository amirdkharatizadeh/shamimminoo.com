<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import FeaturedContent from '$lib/components/FeaturedContent.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';
	
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
	
	// Get featured article for hero
	const featuredArticle = data.featuredArticles[0];
</script>

<svelte:head>
	<title>News - Shamim Minoo | Latest Updates & Press Coverage</title>
	<meta name="description" content="Stay updated with Shamim Minoo's latest achievements, press coverage, upcoming performances, and cultural impact in classical music." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<PageHero
		title="Latest News"
		subtitle="Follow Shamim's remarkable journey as she continues to make history in the world of classical harp performance."
		tags={['📰 Press Coverage', '🏆 Achievements', '🎼 Upcoming Events', '🌍 Cultural Impact']}
		variant="large"
	/>

	<!-- Featured Article Section -->
	{#if featuredArticle}
		<ContentSection
			title="Breaking News"
			subtitle="Historic achievement making headlines worldwide"
			variant="primary"
		>
			<FeaturedContent
				title={featuredArticle.title}
				subtitle={`${formatDate(featuredArticle.date)} • ${featuredArticle.category}`}
				image={featuredArticle.image}
				imageAlt={featuredArticle.title}
				badges={featuredArticle.featured ? [{type: 'featured', text: 'Featured'}] : []}
				actions={[
					{href: `/news/${featuredArticle.slug}`, text: 'Read Full Article', variant: 'primary'}
				]}
			>
				<!-- Article Details -->
				{#if featuredArticle.author}
					<div class="mb-4">
						<p class="text-sm font-semibold text-foreground/80">By {featuredArticle.author}</p>
						{#if featuredArticle.readTime}
							<p class="text-xs text-muted-foreground">{featuredArticle.readTime} read</p>
						{/if}
					</div>
				{/if}
				
				<!-- Excerpt -->
				<p class="text-foreground/80 leading-relaxed mb-4">
					{featuredArticle.excerpt}
				</p>
				
				<!-- Tags -->
				{#if featuredArticle.tags && featuredArticle.tags.length > 0}
					<div>
						<h4 class="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Tags</h4>
						<div class="flex flex-wrap gap-2">
							{#each featuredArticle.tags.slice(0, 4) as tag}
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

	<!-- Recent Articles Section -->
	{#if data.recentArticles.length > 0}
		<ContentSection
			title="Recent Updates"
			subtitle="Latest news and announcements"
			variant="default"
		>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{#each data.recentArticles.filter(a => !a.featured || a.slug !== featuredArticle?.slug) as article}
					<NewsCard {article} />
				{/each}
			</div>
		</ContentSection>
	{/if}

	<!-- News Categories Section -->
	{#if data.categories.length > 0}
		<ContentSection
			title="News Categories"
			subtitle="Browse news by category"
			variant="muted"
			maxWidth="max-w-6xl"
		>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each data.categories as category}
					{@const categoryCount = data.articles.filter(a => a.category === category).length}
					<SectionCard
						icon={category === 'Achievement' ? '🏆' : category === 'Performance' ? '🎼' : category === 'Tour' ? '🌍' : category === 'Cultural' ? '🎭' : '📰'}
						title={category}
						description={`${categoryCount} article${categoryCount !== 1 ? 's' : ''} in this category`}
						href="/news?category={category.toLowerCase()}"
						linkText="View Articles"
						variant="hover"
					/>
				{/each}
			</div>
		</ContentSection>
	{/if}

	<!-- Newsletter & Media Resources Section -->
	<ContentSection
		title="Stay Informed"
		subtitle="Get the latest updates and media resources"
		variant="gradient"
		maxWidth="max-w-6xl"
	>
		<div class="grid md:grid-cols-3 gap-6">
			<SectionCard
				icon="📧"
				title="Newsletter"
				description="Subscribe to receive the latest news and exclusive updates directly to your inbox."
				href="#newsletter"
				linkText="Subscribe Now"
				variant="hover"
			/>
			
			<SectionCard
				icon="📸"
				title="Press Kit"
				description="High-resolution photos, biography, and press materials for media professionals."
				href="#press-kit"
				linkText="Download"
				variant="hover"
			/>
			
			<SectionCard
				icon="📱"
				title="Social Media"
				description="Follow Shamim on social media for real-time updates and behind-the-scenes content."
				href="#social"
				linkText="Follow"
				variant="hover"
			/>
		</div>
		
		<!-- Newsletter Signup Form -->
		<div class="mt-12 bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
			<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-4 text-center">Subscribe to Newsletter</h3>
			<p class="text-muted-foreground mb-6 text-center">
				Be the first to know about Shamim's latest performances, achievements, and exclusive content.
			</p>
			
			<form class="space-y-4">
				<div class="grid md:grid-cols-2 gap-4">
					<input 
						type="text" 
						placeholder="First Name" 
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
				<button 
					type="submit"
					class="w-full bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
				>
					Subscribe to Newsletter
				</button>
			</form>
			
			<p class="text-xs text-muted-foreground mt-4 text-center">
				We respect your privacy. Unsubscribe at any time.
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
	
	/* Form styling */
	input:focus {
		box-shadow: 0 0 0 3px rgba(140, 121, 86, 0.1);
	}
</style>