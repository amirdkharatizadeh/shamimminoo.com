<script>
	import StatusBadge from './StatusBadge.svelte';
	
	export let title = '';
	export let subtitle = '';
	export let image = '';
	export let imageAlt = '';
	export let badges = []; // Array of {type, text}
	export let actions = []; // Array of {href, text, variant}
	export let variant = 'default'; // 'default', 'large', 'compact'
	export let imagePosition = 'left'; // 'left', 'right', 'top'
</script>

<article class="bg-gradient-to-br from-background/80 to-muted/20 rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
	<div class="grid {imagePosition === 'top' ? 'grid-cols-1' : 'lg:grid-cols-12'} gap-8">
		
		<!-- Image Section -->
		<div class="{imagePosition === 'top' ? 'w-full' : imagePosition === 'left' ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-2'}">
			<div class="aspect-[4/3] {imagePosition === 'top' ? '' : 'lg:aspect-auto lg:h-full'} bg-muted/20 relative overflow-hidden">
				{#if image}
					<img 
						src={image} 
						alt={imageAlt}
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
					/>
				{:else}
					<div class="w-full h-full bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
						<div class="text-center">
							<div class="text-8xl text-primary mb-4">🎼</div>
							<p class="text-lg text-foreground/80">Content</p>
						</div>
					</div>
				{/if}
				
				<!-- Status Badges -->
				{#if badges && badges.length > 0}
					<div class="absolute top-4 left-4 flex gap-2 flex-wrap">
						{#each badges as badge}
							<StatusBadge type={badge.type} text={badge.text} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
		
		<!-- Content Section -->
		<div class="{imagePosition === 'top' ? 'w-full' : imagePosition === 'left' ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-1'} p-6 lg:p-8">
			<div class="space-y-6">
				
				<!-- Title and Subtitle -->
				<div>
					{#if subtitle}
						<p class="text-sm text-primary font-bold uppercase tracking-wider mb-2">
							{subtitle}
						</p>
					{/if}
					<h3 class="text-3xl md:text-4xl font-bold text-foreground mb-4 playfair-display-bold">
						{title}
					</h3>
				</div>
				
				<!-- Main Content Slot -->
				<div class="prose-content">
					<slot />
				</div>
				
				<!-- Actions -->
				{#if actions && actions.length > 0}
					<div class="flex flex-col sm:flex-row gap-4 pt-4">
						{#each actions as action}
							<a
								href={action.href}
								class="{action.variant === 'primary' 
									? 'bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl rounded-full'
									: 'border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center rounded-full'}"
								{...action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
							>
								{action.text}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</article>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
	
	.prose-content :global(p) {
		color: hsl(from var(--color-foreground) h s l / 0.8);
		line-height: 1.6;
		margin-bottom: 1rem;
	}
	
	.prose-content :global(ul) {
		list-style: none;
		margin: 1rem 0;
	}
	
	.prose-content :global(li) {
		padding: 0.25rem 0;
		border-left: 2px solid hsl(from var(--color-primary) h s l / 0.3);
		padding-left: 0.75rem;
		margin-bottom: 0.5rem;
	}
</style>