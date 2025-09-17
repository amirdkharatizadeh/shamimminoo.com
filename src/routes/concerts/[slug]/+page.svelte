<script>
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
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
	<PageHero
		title={concert.title}
		subtitle={`${formatDate(concert.date)}${concert.time ? ' • ' + formatTime(concert.time) : ''}`}
		breadcrumbs={[
			{href: '/', label: 'Home'},
			{href: '/concerts', label: 'Concerts'},
			{label: concert.title}
		]}
		variant="detail"
		backgroundGradient="from-background via-muted/10 to-primary/5"
	>
		<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
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
							<StatusBadge type="featured" text="Featured" />
						{/if}
						{#if isUpcoming}
							<StatusBadge type="upcoming" text="Upcoming" />
						{:else}
							<StatusBadge type="past" text="Past Event" />
						{/if}
					</div>
				</div>
			</div>
			
			<!-- Concert Details -->
			<div class="lg:col-span-7 space-y-6">
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
	</PageHero>

	<!-- Program Section -->
	{#if concert.program && concert.program.length > 0}
		<ContentSection
			title="Program"
			variant="muted"
			maxWidth="max-w-4xl"
		>
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
		</ContentSection>
	{/if}	<!-- Concert Description Content -->
	<ContentSection variant="default" maxWidth="max-w-4xl">
		<article class="prose prose-invert prose-lg max-w-none">
			<svelte:component this={data.component} />
		</article>
	</ContentSection>

	<!-- Related Concerts -->
	<ContentSection
		title="More Concerts"
		subtitle="Discover other performances by Shamim Minoo"
		variant="muted"
		maxWidth="max-w-6xl"
	>
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
</style>