<script>
	import { footer, socialLinks, newsletter } from '../../../contents/config';
</script>

<footer id="contact" class="bg-background">
	<!-- Subscription Section -->
	<div class="py-16 px-4 bg-muted/20">
		<div class="container mx-auto">
			<div class="grid md:grid-cols-3 gap-8 items-center">
				<div class="md:col-span-1 text-center md:text-left">
					<h4 class="text-lg uppercase text-muted-foreground tracking-wider">{newsletter.subtitle}</h4>
					<h3 class="text-4xl font-bold playfair-display-bold text-white">{newsletter.title}</h3>
				</div>
				<div class="md:col-span-2">
					<form class="flex flex-col sm:flex-row gap-4 items-center">
						<input type="email" placeholder={newsletter.placeholder} class="w-full bg-input border border-border text-foreground/80 px-4 py-3 focus:ring-primary focus:border-primary flex-grow">
						<button type="submit" class="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 font-bold uppercase hover:bg-primary/80 transition-colors">{newsletter.buttonText}</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Footer -->
	<div class="py-12 px-4">
		<div class="container mx-auto text-center text-muted-foreground">
			<div class="flex justify-center gap-6 mb-8">
				{#each socialLinks as social}
					<a href={social.href} class="hover:text-primary transition-colors">
						<i class="{social.icon} text-xl"></i>
					</a>
				{/each}
			</div>
			<div class="flex justify-center gap-4 md:gap-8 text-xs uppercase tracking-wider mb-8">
				{#each footer.links as link}
					<a href={link.href} class="hover:text-primary transition-colors">{link.name}</a>
				{/each}
			</div>
			<p class="text-xs">{footer.copyright}</p>
		</div>
	</div>
</footer>

<style>
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
</style>
