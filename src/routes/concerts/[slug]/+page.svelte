<script>
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// import * as config from '$lib/site/config'

	export let data;

	function formatTime(timeString) {
		if (!timeString) return '';
		const [hours, minutes] = timeString.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	}

	const concert = data.concert;
	const concertDate = new Date(concert.date);
	const now = new Date();
	const isUpcoming = concertDate >= now;

	// let editUrl = `${config.fileUrl}/concerts/${concert.slug}.md`
	// let image = `${config.postImage}${encodeURIComponent(concert.title)}.png`
</script>

<svelte:head>
	<title>{concert.title} - Shamim Minoo</title>
	<meta content={concert.description} name="description" />

	<meta content={concert.title} property="og:title" />
	{#if concert.image}
		<meta content={concert.image} property="og:image" />
	{/if}
	<meta content={concert.description} property="og:description" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={concert.title} name="twitter:title" />
	<meta content={concert.description} name="twitter:description" />
	{#if concert.image}
		<meta content={concert.image} name="twitter:image" />
	{/if}
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-4xl mx-auto">
				<!-- Breadcrumb -->
				<nav class="mb-8">
					<ol class="flex items-center space-x-2 text-sm text-muted-foreground">
						<li><a href="/" class="hover:text-primary transition-colors">Home</a></li>
						<li class="text-primary/50">/</li>
						<li><a href="/concerts" class="hover:text-primary transition-colors">Concerts</a></li>
						<li class="text-primary/50">/</li>
						<li class="text-foreground">{concert.title}</li>
					</ol>
				</nav>

				<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
					<!-- Concert Image -->
					<div class="lg:col-span-5">
						<div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
							{#if concert.image}
								<img 
									src={concert.image} 
									alt={concert.title}
									class="w-full h-full object-cover"
								/>
							{:else}
								<div class="w-full h-full bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
									<div class="text-center">
										<div class="text-8xl text-primary mb-4">🎼</div>
										<p class="text-lg text-foreground/80">Concert</p>
									</div>
								</div>
							{/if}

							<!-- Status Badge -->
							<div class="absolute top-4 left-4 flex gap-2">
								{#if concert.featured}
									<span class="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold uppercase rounded-full shadow-lg">
										Featured
									</span>
								{/if}
								{#if isUpcoming}
									<span class="bg-green-600 text-white px-3 py-1 text-sm font-bold uppercase rounded-full shadow-lg">
										Upcoming
									</span>
								{:else}
									<span class="bg-muted text-muted-foreground px-3 py-1 text-sm font-bold uppercase rounded-full shadow-lg">
										Past Event
									</span>
								{/if}
							</div>
						</div>
					</div>
					
					<!-- Concert Details -->
					<div class="lg:col-span-7 space-y-6">
						<div>
							<p class="text-sm text-primary font-bold uppercase tracking-wider mb-3">
								{formatDate(concert.date)}
								{#if concert.time}
									• {formatTime(concert.time)}
								{/if}
							</p>
							<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-4 leading-tight">
								{concert.title}
							</h1>
							
							<!-- Venue Information -->
							<div class="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border-l-4 border-primary">
								<div class="space-y-2">
									<p class="text-lg font-semibold text-foreground">{concert.venue}</p>
									<p class="text-muted-foreground flex items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										{concert.location}
									</p>
								</div>
							</div>
						</div>

						<p class="text-lg text-foreground/80 leading-relaxed">
							{concert.description}
						</p>

						<!-- Action Buttons -->
						<div class="flex flex-col sm:flex-row gap-4 pt-4">
							{#if concert.tickets && isUpcoming}
								<a
									href={concert.tickets}
									target="_blank"
									rel="noopener noreferrer"
									class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl rounded-full"
								>
									Buy Tickets
								</a>
							{/if}
							<a
								href="/concerts"
								class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center rounded-full"
							>
								← Back to Concerts
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Program Section -->
	{#if concert.program && concert.program.length > 0}
		<section class="py-16 md:py-20 bg-gradient-to-br from-muted/5 to-primary/5">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold text-primary playfair-display-bold mb-8 text-center">
						Program
					</h2>
					
					<div class="bg-gradient-to-br from-background/80 to-muted/20 rounded-2xl p-8 border border-primary/20">
						<ul class="space-y-4">
							{#each concert.program as piece, index}
								<li class="flex items-start gap-4">
									<span class="flex-shrink-0 w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
										{index + 1}
									</span>
									<div class="flex-grow">
										<p class="text-foreground font-medium leading-relaxed">{piece}</p>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Concert Description Content -->
	<section class="py-16 md:py-20 bg-background">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<article class="prose prose-invert prose-lg max-w-none">
					<svelte:component this={data.component} />
				</article>
			</div>
		</div>
	</section>

	<!-- Related Concerts -->
	<section class="py-16 md:py-20 bg-gradient-to-br from-muted/10 to-primary/5">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold text-primary playfair-display-bold mb-8">
					More Concerts
				</h2>
				<p class="text-muted-foreground mb-8">Discover other performances by Shamim Minoo</p>
				
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/concerts"
						class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
					>
						View All Concerts
					</a>
					<a
						href="/"
						class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full"
					>
						Back to Home
					</a>
				</div>
			</div>
		</div>
	</section>
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
</style>