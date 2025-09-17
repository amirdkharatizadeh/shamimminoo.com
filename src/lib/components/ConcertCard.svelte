<script>
	import { formatDate } from '$lib/utils';
	import StatusBadge from './StatusBadge.svelte';

	export let concert;
	export let isPast = false;

	function formatTime(timeString) {
		if (!timeString) return '';
		const [hours, minutes] = timeString.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	}

	// Determine if concert is upcoming or past based on date
	const concertDate = new Date(concert.date);
	const now = new Date();
	const isUpcoming = concertDate >= now;
</script>

<article class="group bg-gradient-to-br from-background/80 to-muted/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 {isPast ? 'opacity-90' : ''}">
	<!-- Concert Image -->
	<div class="overflow-hidden relative">
		{#if concert.image}
			<img
				src={concert.image}
				alt={concert.title}
				class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 {isPast ? 'grayscale-[30%]' : ''}"
			/>
		{:else}
			<div class="w-full h-48 bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center {isPast ? 'opacity-80' : ''}">
				<div class="text-center">
					<div class="text-6xl text-primary mb-2">🎼</div>
					<p class="text-sm text-muted-foreground">Concert</p>
				</div>
			</div>
		{/if}

		<!-- Status Badges -->
		<div class="absolute top-4 left-4 flex gap-2">
			{#if concert.featured}
				<StatusBadge type="featured" text="Featured" />
			{/if}
			{#if isPast || concert.status === 'past'}
				<StatusBadge type="past" text="Past Event" />
			{:else if concert.status === 'upcoming'}
				<StatusBadge type="upcoming" text="Upcoming" />
			{/if}
		</div>
	</div>

	<!-- Concert Info -->
	<div class="p-6 space-y-4">
		<!-- Date & Status -->
		<div class="flex items-center justify-between">
			<p class="text-xs text-primary font-semibold uppercase tracking-wider">
				{formatDate(concert.date)}
				{#if concert.time}
					• {formatTime(concert.time)}
				{/if}
			</p>
		</div>

		<!-- Title -->
		<h3 class="text-xl font-bold text-foreground/90 playfair-display-bold group-hover:text-primary transition-colors leading-tight">
			{concert.title}
		</h3>

		<!-- Venue -->
		<div class="space-y-1">
			<p class="text-sm font-semibold text-foreground/80">
				{concert.venue}
			</p>
			<p class="text-xs text-muted-foreground flex items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				{concert.location}
			</p>
		</div>

		<!-- Description -->
		<p class="text-sm text-foreground/70 leading-relaxed line-clamp-3">
			{concert.description}
		</p>

		<!-- Program Preview -->
		{#if concert.program && concert.program.length > 0}
			<div class="border-l-2 border-primary/30 pl-3">
				<p class="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Program Highlights</p>
				<ul class="text-xs text-foreground/60 space-y-1">
					{#each concert.program.slice(0, 2) as piece}
						<li class="truncate">• {piece}</li>
					{/each}
					{#if concert.program.length > 2}
						<li class="text-primary font-semibold">• And {concert.program.length - 2} more...</li>
					{/if}
				</ul>
			</div>
		{/if}

		<!-- Actions -->
		<div class="flex flex-col gap-2 pt-2">
			{#if concert.tickets && (isUpcoming || concert.status === 'upcoming') && !isPast}
				<a
					href={concert.tickets}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-primary text-primary-foreground px-4 py-2.5 text-sm font-bold uppercase hover:bg-primary/90 transition-colors text-center rounded shadow-lg hover:shadow-xl"
				>
					Buy Tickets
				</a>
			{/if}
			<a
				href="/concerts/{concert.slug}"
				class="border border-primary text-primary px-4 py-2.5 text-sm font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-colors text-center rounded"
			>
				{isPast || concert.status === 'past' ? 'View Details' : 'Learn More'}
			</a>
		</div>
	</div>
</article>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>