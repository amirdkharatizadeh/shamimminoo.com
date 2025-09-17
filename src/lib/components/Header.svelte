<script>
	import { navigation, siteConfig } from '../config';
	
	let isMenuOpen = false;
	
	function toggleMobileMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="fixed top-0 left-0 right-0 z-50 p-4 md:px-8 md:py-6 bg-black/20 backdrop-blur-sm">
	<div class="container mx-auto flex justify-between items-center">
		<a href="/" class="text-xl font-bold text-white playfair-display-bold">
			{siteConfig.name}
		</a>
		<nav class="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
			{#each navigation as item}
				<a href={item.href} class="text-gray-300 hover:text-white transition-colors">{item.name}</a>
			{/each}
		</nav>
		<div class="hidden md:flex items-center gap-4">
			<a href="#" class="bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase hover:bg-primary/80 transition-colors">Play Album</a>
		</div>
		<!-- Mobile Menu Button -->
		<button class="md:hidden text-white" on:click={toggleMobileMenu}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
			</svg>
		</button>
	</div>
	
	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
			<nav class="container mx-auto py-4 px-4 flex flex-col gap-4">
				{#each navigation as item}
					<a href={item.href} class="text-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wider">{item.name}</a>
				{/each}
				<a href="#" class="bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase hover:bg-primary/80 transition-colors text-center">Play Album</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
</style>
