<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ConcertCard from '$lib/components/ConcertCard.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import FeaturedContent from '$lib/components/FeaturedContent.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
	
	export let data;
	
	// Helper function to format dates
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}
	
	function formatTime(timeString) {
		if (!timeString) return '';
		const [hours, minutes] = timeString.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	}
	
	// Get featured upcoming concert for hero
	const featuredConcert = data.featuredConcerts.find(c => c.status === 'upcoming') || data.upcomingConcerts[0];
</script>

<svelte:head>
	<title>Concerts - Shamim Minoo | Upcoming Performances & Concert Schedule</title>
	<meta name="description" content="Discover Shamim Minoo's upcoming concert performances, recitals, and special events. Book tickets and experience world-class harp artistry." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<PageHero
		title="Concert Schedule"
		subtitle="Experience the ethereal beauty of classical harp through intimate recitals and grand concert performances across the world's most prestigious venues."
		tags={['🎼 Solo Recitals', '🏛️ Prestigious Venues', '🎫 Book Now', '🌍 International Tours']}
		variant="large"
	/>

	<!-- Featured Concert Section -->
	{#if featuredConcert}
		<ContentSection
			title="Featured Performance"
			subtitle="Don't miss this exceptional concert experience"
			variant="primary"
		>
			<FeaturedContent
				title={featuredConcert.title}
				subtitle={`${formatDate(featuredConcert.date)}${featuredConcert.time ? ' • ' + formatTime(featuredConcert.time) : ''}`}
				image={featuredConcert.image}
				imageAlt={featuredConcert.title}
				badges={featuredConcert.featured ? [{type: 'featured', text: 'Featured'}] : []}
				actions={[
					...(featuredConcert.tickets && featuredConcert.status === 'upcoming' ? [
						{href: featuredConcert.tickets, text: 'Buy Tickets', variant: 'primary', external: true}
					] : []),
					{href: `/concerts/${featuredConcert.slug}`, text: 'Learn More', variant: 'secondary'}
				]}
			>
				<!-- Venue Info -->
				<div class="mb-4">
					<p class="text-lg font-semibold text-foreground/90">{featuredConcert.venue}</p>
					<p class="text-muted-foreground">{featuredConcert.location}</p>
				</div>
				
				<!-- Description -->
				<p class="text-foreground/80 leading-relaxed mb-4">
					{featuredConcert.description}
				</p>
				
				<!-- Program Highlights -->
				{#if featuredConcert.program && featuredConcert.program.length > 0}
					<div>
						<h4 class="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Program Highlights</h4>
						<ul class="space-y-2">
							{#each featuredConcert.program.slice(0, 3) as piece}
								<li class="text-sm text-foreground/70">
									{piece}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</FeaturedContent>
		</ContentSection>
	{/if}

	<!-- Upcoming Concerts Section -->
	{#if data.upcomingConcerts.length > 0}
		<ContentSection
			title="Upcoming Concerts"
			subtitle="Mark your calendar for these exceptional performances"
			variant="default"
		>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{#each data.upcomingConcerts as concert}
					<ConcertCard {concert} />
				{/each}
			</div>
		</ContentSection>
	{/if}

	<!-- Past Concerts Section -->
	{#if data.pastConcerts.length > 0}
		<ContentSection
			title="Past Performances"
			subtitle="Relive memorable concert experiences"
			variant="muted"
		>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{#each data.pastConcerts.slice(0, 6) as concert}
					<ConcertCard {concert} isPast={true} />
				{/each}
			</div>
			
			{#if data.pastConcerts.length > 6}
				<div class="text-center mt-12">
					<button class="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full">
						View All Past Concerts
					</button>
				</div>
			{/if}
		</ContentSection>
	{/if}

	<!-- Concert Information & Booking -->
	<ContentSection
		title="Concert Information"
		subtitle="Everything you need to know for the perfect concert experience"
		variant="gradient"
		maxWidth="max-w-6xl"
	>
		<div class="grid md:grid-cols-3 gap-6">
			<SectionCard
				icon="🎫"
				title="Tickets & Booking"
				description="Secure your seats for upcoming performances through our official ticket partners."
				href="#tickets"
				linkText="Book Now"
				variant="hover"
			/>
			
			<SectionCard
				icon="🏛️"
				title="Venues & Locations"
				description="Performing at the world's most prestigious concert halls and intimate venues."
				href="#venues"
				linkText="Explore Venues"
				variant="hover"
			/>
			
			<SectionCard
				icon="📧"
				title="Stay Updated"
				description="Subscribe to receive notifications about new concerts and exclusive presales."
				href="#newsletter"
				linkText="Subscribe"
				variant="hover"
			/>
		</div>
	</ContentSection>
</main>

<Footer />

<style>
	:global(body) {
		font-family: 'Roboto Slab', serif;
		background-color: hsl(210, 15%, 4%);
		color: hsl(210, 10%, 85%);
	}
	
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
</style>
