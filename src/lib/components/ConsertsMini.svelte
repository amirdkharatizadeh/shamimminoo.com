<script lang="ts">
	import type { Concert } from '$lib/contents';

	export let concerts: Concert[] = [];
	export let showAll: boolean = false;
	export let maxItems: number = 3;

	$: displayedConcerts = showAll ? concerts : concerts.slice(0, maxItems);
	$: hasUpcoming = concerts.some(c => c.status === 'upcoming');

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function formatTime(timeString?: string): string {
		if (!timeString) return '';
		const [hours, minutes] = timeString.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	}
</script>

<section id="concerts" class="py-20 md:py-24 bg-muted/20">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h3 class="text-4xl font-bold mb-4 text-primary playfair-display-bold">
				Concerts
			</h3>
			
			{#if !hasUpcoming}
				<div class="max-w-md mx-auto border-t-2 border-primary/50 pt-8 mt-8">
					<p class="text-muted-foreground text-lg mb-8">
						No upcoming events scheduled yet. Stay tuned!
					</p>
					<a
						href="/concerts"
						class="border-2 border-primary text-primary px-8 py-3 font-semibold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
					>
						All Concerts
						<i class="fas fa-long-arrow-alt-right"></i>
					</a>
				</div>
			{/if}
		</div>

		{#if hasUpcoming}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each displayedConcerts as concert}
					<div class="bg-background group border border-muted/20 hover:border-primary/30 transition-colors duration-300">
						<!-- Concert Image -->
						{#if concert.image}
							<div class="overflow-hidden">
								<img
									src={concert.image}
									alt={concert.title}
									class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
						{:else}
							<div class="w-full h-48 bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
								<div class="text-center">
									<div class="text-6xl text-primary mb-2">🎼</div>
									<p class="text-sm text-muted-foreground">Concert</p>
								</div>
							</div>
						{/if}

						<!-- Concert Info -->
						<div class="p-6">
							<!-- Date & Status -->
							<div class="flex items-center justify-between mb-3">
								<p class="text-xs text-primary font-semibold uppercase tracking-wider">
									{formatDate(concert.date)}
									{#if concert.time}
										• {formatTime(concert.time)}
									{/if}
								</p>
								{#if concert.featured}
									<span class="bg-primary text-primary-foreground px-2 py-1 text-xs font-bold uppercase rounded">
										Featured
									</span>
								{/if}
							</div>

							<!-- Title -->
							<h4 class="text-xl font-semibold mb-3 text-foreground/90 playfair-display-bold group-hover:text-primary transition-colors">
								{concert.title}
							</h4>

							<!-- Venue -->
							<div class="mb-4">
								<p class="text-sm font-semibold text-foreground/80">
									{concert.venue}
								</p>
								<p class="text-xs text-muted-foreground">
									{concert.location}
								</p>
							</div>

							<!-- Description -->
							<p class="text-sm text-foreground/70 mb-4 roboto-slab-regular line-clamp-3">
								{concert.description}
							</p>

							<!-- Program Preview -->
							{#if concert.program && concert.program.length > 0}
								<div class="mb-4">
									<p class="text-xs text-muted-foreground uppercase tracking-wider mb-2">Program Highlights</p>
									<ul class="text-xs text-foreground/60 space-y-1">
										{#each concert.program.slice(0, 2) as piece}
											<li class="truncate">• {piece}</li>
										{/each}
										{#if concert.program.length > 2}
											<li class="text-primary">• And more...</li>
										{/if}
									</ul>
								</div>
							{/if}

							<!-- Actions -->
							<div class="flex flex-col sm:flex-row gap-2">
								{#if concert.tickets && concert.status === 'upcoming'}
									<a
										href={concert.tickets}
										target="_blank"
										rel="noopener noreferrer"
										class="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold uppercase hover:bg-primary/90 transition-colors text-center"
									>
										Buy Tickets
									</a>
								{/if}
								<a
									href="/concerts/{concert.slug}"
									class="border border-primary text-primary px-4 py-2 text-sm font-semibold uppercase hover:bg-primary hover:text-primary-foreground transition-colors text-center"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- View All Button -->
			{#if !showAll && concerts.length > maxItems}
				<div class="text-center mt-12">
					<a
						href="/concerts"
						class="border-2 border-primary text-primary px-8 py-3 font-semibold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
					>
						All Concerts
						<i class="fas fa-long-arrow-alt-right"></i>
					</a>
				</div>
			{/if}
		{/if}
	</div>
</section>

<style>
	.playfair-display-bold {
		font-family: "Playfair Display", serif;
		font-weight: 700;
	}
	
	.roboto-slab-regular {
		font-family: "Roboto Slab", serif;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>