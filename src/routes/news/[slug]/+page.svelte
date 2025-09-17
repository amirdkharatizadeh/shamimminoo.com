<script>
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';

	export let data;

	const article = data.article;

	// Category badge type mapping
	const categoryTypes = {
		'Achievement': 'success',
		'Performance': 'info',
		'Tour': 'primary',
		'Cultural': 'info',
		'Press': 'default',
		'Award': 'success'
	};
	
	$: badgeType = categoryTypes[article.category] || 'default';
</script>

<svelte:head>
	<title>{article.title} - Shamim Minoo</title>
	<meta content={article.excerpt} name="description" />

	<meta content={article.title} property="og:title" />
	{#if article.image}
		<meta content={article.image} property="og:image" />
	{/if}
	<meta content={article.excerpt} property="og:description" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={article.title} name="twitter:title" />
	<meta content={article.excerpt} name="twitter:description" />
	{#if article.image}
		<meta content={article.image} name="twitter:image" />
	{/if}
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<PageHero
		title={article.title}
		subtitle={`${formatDate(article.date)} • ${article.category}${article.readTime ? ' • ' + article.readTime : ''}`}
		breadcrumbs={[
			{href: '/', label: 'Home'},
			{href: '/news', label: 'News'},
			{label: article.title}
		]}
		variant="detail"
		backgroundGradient="from-background via-muted/10 to-primary/5"
	>
		<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
			<!-- Article Image -->
			<div class="lg:col-span-5">
				<div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
					{#if article.image}
						<img 
							src={article.image} 
							alt={article.title}
							class="w-full h-full object-cover"
						/>
					{:else}
						<div class="w-full h-full bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
							<div class="text-center">
								<div class="text-8xl text-primary mb-4">📰</div>
								<p class="text-lg text-foreground/80">News Article</p>
							</div>
						</div>
					{/if}

					<!-- Status Badges -->
					<div class="absolute top-4 left-4 flex gap-2">
						<StatusBadge type={badgeType} text={article.category} />
						{#if article.featured}
							<StatusBadge type="featured" text="Featured" />
						{/if}
					</div>

					<!-- Read Time -->
					{#if article.readTime}
						<div class="absolute top-4 right-4">
							<span class="bg-background/80 text-foreground px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm shadow-lg">
								{article.readTime}
							</span>
						</div>
					{/if}
				</div>
			</div>
			
			<!-- Article Details -->
			<div class="lg:col-span-7 space-y-6">
				<!-- Author & Date Information -->
				<div class="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border-l-4 border-primary">
					<div class="space-y-2">
						{#if article.author}
							<p class="text-lg font-semibold text-foreground">By {article.author}</p>
						{/if}
						<p class="text-muted-foreground flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							Published {formatDate(article.date)}
						</p>
					</div>
				</div>

				<!-- Article Excerpt -->
				<p class="text-lg text-foreground/80 leading-relaxed">
					{article.excerpt}
				</p>

				<!-- Tags -->
				{#if article.tags && article.tags.length > 0}
					<div>
						<h4 class="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Tags</h4>
						<div class="flex flex-wrap gap-2">
							{#each article.tags as tag}
								<span class="bg-primary/10 text-primary px-3 py-1 text-sm rounded-full font-medium">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Action Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<a
						href="/news"
						class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center rounded-full"
					>
						← Back to News
					</a>
					<button
						on:click={() => window.print()}
						class="bg-primary/20 text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary/30 transition-all duration-300 text-center rounded-full"
					>
						Print Article
					</button>
				</div>
			</div>
		</div>
	</PageHero>

	<!-- Article Content -->
	<ContentSection variant="default" maxWidth="max-w-4xl">
		<article class="prose prose-invert prose-lg max-w-none">
			<svelte:component this={data.component} />
		</article>
	</ContentSection>

	<!-- Share & Related Articles -->
	<ContentSection
		title="Share This Article"
		variant="muted"
		maxWidth="max-w-6xl"
	>
		<div class="grid md:grid-cols-4 gap-6 mb-12">
			<SectionCard
				icon="🐦"
				title="Share on Twitter"
				description="Share this article with your Twitter followers"
				href="https://twitter.com/intent/tweet?text={encodeURIComponent(article.title)}&url={encodeURIComponent(`https://shamimminoo.com/news/${article.slug}`)}"
				linkText="Tweet"
				variant="hover"
			/>
			
			<SectionCard
				icon="📘"
				title="Share on Facebook"
				description="Share this article on your Facebook timeline"
				href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(`https://shamimminoo.com/news/${article.slug}`)}"
				linkText="Share"
				variant="hover"
			/>
			
			<SectionCard
				icon="💼"
				title="Share on LinkedIn"
				description="Share this professional update on LinkedIn"
				href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(`https://shamimminoo.com/news/${article.slug}`)}"
				linkText="Post"
				variant="hover"
			/>
			
			<SectionCard
				icon="📧"
				title="Email Article"
				description="Send this article via email"
				href="mailto:?subject={encodeURIComponent(article.title)}&body={encodeURIComponent(`Check out this article: ${article.title}\n\n${article.excerpt}\n\nRead more: https://shamimminoo.com/news/${article.slug}`)}"
				linkText="Email"
				variant="hover"
			/>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-4">Stay Updated</h3>
			<p class="text-muted-foreground mb-6">
				Don't miss the latest news and updates from Shamim's musical journey.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/news"
					class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
				>
					Read More News
				</a>
				<a
					href="/concerts"
					class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full"
				>
					View Concerts
				</a>
			</div>
		</div>
	</ContentSection>
</main>

<Footer />

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}

	:global(.prose) {
		color: var(--color-foreground);
	}

	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		color: var(--color-primary);
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}

	:global(.prose p) {
		color: hsl(from var(--color-foreground) h s l / 0.8);
		line-height: 1.7;
	}

	:global(.prose strong) {
		color: var(--color-foreground);
		font-weight: 600;
	}

	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: none;
		border-bottom: 1px solid hsl(from var(--color-primary) h s l / 0.3);
		transition: all 0.2s ease;
	}

	:global(.prose a:hover) {
		border-bottom-color: var(--color-primary);
	}

	/* Print styles */
	@media print {
		.prose {
			color: #000 !important;
		}
		
		.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
			color: #333 !important;
		}
	}
</style>