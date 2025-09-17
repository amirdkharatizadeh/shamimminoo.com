<script>
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';

	export let data;

	const page = data.page;

	// Category badge type mapping
	const categoryTypes = {
		'Biography': 'info',
		'Professional': 'primary',
		'Contact': 'default',
		'About': 'info',
		'Press': 'default'
	};
	
	$: badgeType = categoryTypes[page.category] || 'default';
</script>

<svelte:head>
	<title>{page.title} - Shamim Minoo</title>
	<meta content={page.excerpt} name="description" />

	<meta content={page.title} property="og:title" />
	{#if page.image}
		<meta content={page.image} property="og:image" />
	{/if}
	<meta content={page.excerpt} property="og:description" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={page.title} name="twitter:title" />
	<meta content={page.excerpt} name="twitter:description" />
	{#if page.image}
		<meta content={page.image} name="twitter:image" />
	{/if}
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<PageHero
		title={page.title}
		subtitle={page.excerpt}
		breadcrumbs={[
			{href: '/', label: 'Home'},
			{label: page.title}
		]}
		variant="detail"
		backgroundGradient="from-background via-muted/10 to-primary/5"
	>
		<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
			<!-- Page Image -->
			<div class="lg:col-span-4">
				<div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
					{#if page.image}
						<img 
							src={page.image} 
							alt={page.title}
							class="w-full h-full object-cover"
						/>
					{:else}
						<div class="w-full h-full bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
							<div class="text-center">
								<div class="text-8xl text-primary mb-4">📄</div>
								<p class="text-lg text-foreground/80">{page.category}</p>
							</div>
						</div>
					{/if}

					<!-- Status Badge -->
					<div class="absolute top-4 left-4">
						<StatusBadge type={badgeType} text={page.category} />
					</div>

					<!-- Read Time -->
					{#if page.readTime}
						<div class="absolute top-4 right-4">
							<span class="bg-background/80 text-foreground px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm shadow-lg">
								{page.readTime}
							</span>
						</div>
					{/if}
				</div>
			</div>
			
			<!-- Page Details -->
			<div class="lg:col-span-8 space-y-6">
				<!-- Meta Information -->
				<div class="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border-l-4 border-primary">
					<div class="space-y-2">
						{#if page.author}
							<p class="text-lg font-semibold text-foreground">{page.author}</p>
						{/if}
						<p class="text-muted-foreground flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							Last updated {formatDate(page.date)}
						</p>
					</div>
				</div>

				<!-- Tags -->
				{#if page.tags && page.tags.length > 0}
					<div>
						<h4 class="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Topics</h4>
						<div class="flex flex-wrap gap-2">
							{#each page.tags as tag}
								<span class="bg-primary/10 text-primary px-3 py-1 text-sm rounded-full font-medium">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Navigation Actions -->
				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<a
						href="/"
						class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center rounded-full"
					>
						← Back to Home
					</a>
					<button
						on:click={() => window.print()}
						class="bg-primary/20 text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary/30 transition-all duration-300 text-center rounded-full"
					>
						Print Page
					</button>
				</div>
			</div>
		</div>
	</PageHero>

	<!-- Page Content -->
	<ContentSection variant="default" maxWidth="max-w-4xl">
		<article class="prose prose-invert prose-lg max-w-none">
			<svelte:component this={data.component} />
		</article>
	</ContentSection>

	<!-- Related Links -->
	<ContentSection
		title="Related Pages"
		subtitle="Explore more about Shamim Minoo"
		variant="muted"
		maxWidth="max-w-6xl"
	>
		<div class="grid md:grid-cols-3 gap-6">
			{#if page.slug !== 'about'}
				<a
					href="/p/about"
					class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
				>
					<div class="text-4xl text-primary mb-4">👤</div>
					<h3 class="text-lg font-bold text-foreground mb-2 playfair-display-bold group-hover:text-primary transition-colors">About</h3>
					<p class="text-sm text-foreground/70">Learn about Shamim's journey and artistic vision</p>
				</a>
			{/if}
			
			{#if page.slug !== 'biography'}
				<a
					href="/p/biography"
					class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
				>
					<div class="text-4xl text-primary mb-4">📋</div>
					<h3 class="text-lg font-bold text-foreground mb-2 playfair-display-bold group-hover:text-primary transition-colors">Biography</h3>
					<p class="text-sm text-foreground/70">Professional biography for press and media</p>
				</a>
			{/if}
			
			{#if page.slug !== 'contact'}
				<a
					href="/p/contact"
					class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
				>
					<div class="text-4xl text-primary mb-4">📧</div>
					<h3 class="text-lg font-bold text-foreground mb-2 playfair-display-bold group-hover:text-primary transition-colors">Contact</h3>
					<p class="text-sm text-foreground/70">Get in touch for bookings and inquiries</p>
				</a>
			{/if}
			
			<a
				href="/concerts"
				class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
			>
				<div class="text-4xl text-primary mb-4">🎼</div>
				<h3 class="text-lg font-bold text-foreground mb-2 playfair-display-bold group-hover:text-primary transition-colors">Concerts</h3>
				<p class="text-sm text-foreground/70">View upcoming performances and events</p>
			</a>
			
			<a
				href="/news"
				class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
			>
				<div class="text-4xl text-primary mb-4">📰</div>
				<h3 class="text-lg font-bold text-foreground mb-2 playfair-display-bold group-hover:text-primary transition-colors">News</h3>
				<p class="text-sm text-foreground/70">Latest updates and press coverage</p>
			</a>
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

	:global(.prose ul) {
		list-style: disc;
		padding-left: 1.5em;
	}

	:global(.prose li) {
		margin: 0.5em 0;
	}

	/* Print styles */
	@media print {
		:global(.prose) {
			color: #000 !important;
		}
		
		:global(.prose h1), :global(.prose h2), :global(.prose h3), :global(.prose h4), :global(.prose h5), :global(.prose h6) {
			color: #333 !important;
		}
	}
</style>