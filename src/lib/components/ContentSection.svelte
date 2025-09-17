<script>
	export let title = '';
	export let subtitle = '';
	export let variant = 'default'; // 'default', 'primary', 'muted', 'gradient'
	export let padding = 'py-16 md:py-20'; // Custom padding classes
	export let maxWidth = 'max-w-7xl'; // Container max width
	export let titleCentered = true;
	
	// Background variants
	const backgroundClasses = {
		default: 'bg-background',
		primary: 'bg-gradient-to-br from-primary/5 to-muted/10',
		muted: 'bg-gradient-to-br from-muted/10 to-primary/5',
		gradient: 'bg-gradient-to-br from-background to-muted/10'
	};
	
	$: backgroundClass = backgroundClasses[variant] || backgroundClasses.default;
</script>

<section class="{padding} {backgroundClass}">
	<div class="container mx-auto px-4">
		<div class="{maxWidth} mx-auto">
			
			<!-- Section Header -->
			{#if title}
				<div class="{titleCentered ? 'text-center' : ''} mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4">
						{title}
					</h2>
					{#if subtitle}
						<p class="text-lg text-muted-foreground {titleCentered ? 'max-w-2xl mx-auto' : ''}">
							{subtitle}
						</p>
					{/if}
				</div>
			{/if}
			
			<!-- Content Slot -->
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