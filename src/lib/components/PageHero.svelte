<script>
	export let title = '';
	export let subtitle = '';
	export let breadcrumbs = [];
	export let tags = [];
	export let variant = 'default'; // 'default', 'detail', 'large'
	export let backgroundGradient = 'from-background via-muted/10 to-primary/5';
</script>

<section class="py-16 md:py-20 lg:py-24 {variant === 'large' ? 'lg:py-32' : ''} bg-gradient-to-br {backgroundGradient} relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
	<div class="container mx-auto px-4 relative">
		<div class="max-w-4xl mx-auto {variant === 'detail' ? '' : 'text-center'}">
			
			<!-- Breadcrumbs (for detail pages) -->
			{#if breadcrumbs && breadcrumbs.length > 0}
				<nav class="mb-8">
					<ol class="flex items-center space-x-2 text-sm text-muted-foreground">
						{#each breadcrumbs as crumb, index}
							<li>
								{#if crumb.href}
									<a href={crumb.href} class="hover:text-primary transition-colors">
										{crumb.label}
									</a>
								{:else}
									<span class="text-foreground">{crumb.label}</span>
								{/if}
							</li>
							{#if index < breadcrumbs.length - 1}
								<li class="text-primary/50">/</li>
							{/if}
						{/each}
					</ol>
				</nav>
			{/if}

			<!-- Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl {variant === 'large' ? 'xl:text-7xl' : ''} font-bold text-primary playfair-display-bold mb-6 leading-tight">
				{title}
			</h1>

			<!-- Subtitle -->
			{#if subtitle}
				<p class="text-lg md:text-xl text-foreground/80 mb-8 {variant === 'detail' ? '' : 'max-w-2xl mx-auto'} leading-relaxed">
					{subtitle}
				</p>
			{/if}

			<!-- Tags -->
			{#if tags && tags.length > 0}
				<div class="flex flex-wrap {variant === 'detail' ? 'justify-start' : 'justify-center'} gap-4 text-sm text-muted-foreground">
					{#each tags as tag}
						<span class="bg-primary/10 px-4 py-2 rounded-full">
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Slot for additional content -->
			<slot />
		</div>
	</div>
</section>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
</style>