<script>
	export let icon = '🎯';
	export let title = '';
	export let description = '';
	export let href = '#';
	export let linkText = 'Learn More';
	export let variant = 'default'; // 'default', 'hover', 'gradient'
</script>

<div class="text-center bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors {variant === 'hover' ? 'hover:shadow-lg hover:-translate-y-1' : ''}">
	<div class="text-4xl text-primary mb-4">{icon}</div>
	<h3 class="text-xl font-bold text-foreground mb-3 playfair-display-bold">{title}</h3>
	<p class="text-foreground/70 text-sm mb-4">{description}</p>
	
	{#if href !== '#'}
		<a href={href} class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
			{linkText}
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</a>
	{/if}

	<!-- Slot for custom content -->
	<slot />
</div>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
</style>