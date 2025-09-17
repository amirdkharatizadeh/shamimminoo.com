<script>
	import { formatDate } from '$lib/utils';
	import StatusBadge from './StatusBadge.svelte';

	export let article;
	export let variant = 'default'; // 'default', 'featured', 'compact'

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

<article class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 {variant === 'featured' ? 'md:col-span-2' : ''}">
	<!-- Article Image -->
	<div class="overflow-hidden relative">
		{#if article.image}
			<img
				src={article.image}
				alt={article.title}
				class="w-full {variant === 'compact' ? 'h-32' : 'h-48'} object-cover group-hover:scale-105 transition-transform duration-500"
			/>
		{:else}
			<div class="w-full {variant === 'compact' ? 'h-32' : 'h-48'} bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
				<div class="text-center">
					<div class="text-6xl text-primary mb-2">📰</div>
					<p class="text-sm text-muted-foreground">News</p>
				</div>
			</div>
		{/if}

		<!-- Category Badge -->
		<div class="absolute top-4 left-4 flex gap-2">
			<StatusBadge type={badgeType} text={article.category} size="small" />
			{#if article.featured}
				<StatusBadge type="featured" text="Featured" size="small" />
			{/if}
		</div>

		<!-- Read Time -->
		{#if article.readTime}
			<div class="absolute top-4 right-4">
				<span class="bg-background/80 text-foreground px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm">
					{article.readTime}
				</span>
			</div>
		{/if}
	</div>

	<!-- Article Content -->
	<div class="p-6 space-y-4">
		<!-- Date and Author -->
		<div class="flex items-center justify-between text-xs text-muted-foreground">
			<time class="font-semibold uppercase tracking-wider">
				{formatDate(article.date)}
			</time>
			{#if article.author}
				<span>By {article.author}</span>
			{/if}
		</div>

		<!-- Title -->
		<h3 class="text-xl {variant === 'featured' ? 'md:text-2xl' : ''} font-bold text-foreground/90 playfair-display-bold group-hover:text-primary transition-colors leading-tight">
			{article.title}
		</h3>

		<!-- Excerpt -->
		<p class="text-sm text-foreground/70 leading-relaxed {variant === 'compact' ? 'line-clamp-2' : 'line-clamp-3'}">
			{article.excerpt}
		</p>

		<!-- Tags -->
		{#if article.tags && article.tags.length > 0 && variant !== 'compact'}
			<div class="flex flex-wrap gap-2">
				{#each article.tags.slice(0, 3) as tag}
					<span class="bg-primary/10 text-primary px-2 py-1 text-xs rounded-full font-medium">
						{tag}
					</span>
				{/each}
				{#if article.tags.length > 3}
					<span class="text-xs text-muted-foreground py-1">
						+{article.tags.length - 3} more
					</span>
				{/if}
			</div>
		{/if}

		<!-- Read More Link -->
		<div class="pt-2">
			<a
				href="/news/{article.slug}"
				class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
			>
				Read More
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
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