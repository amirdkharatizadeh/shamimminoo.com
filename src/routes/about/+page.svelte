<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About Shamim Minoo – Iranian Harpist</title>
	<meta name="description" content="The official biography of Shamim Minoo, an acclaimed Iranian harpist and Gold Medal winner of the USA International Harp Competition." />
</svelte:head>

<Header />

<main class="pt-80">

	<!-- Introduction Section -->
	<section class="text-center py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h3 class="text-lg uppercase tracking-widest text-gray-500 font-light">Biography</h3>
			<h1 class="text-6xl md:text-7xl font-serif mt-4">Shamim Minoo</h1>
			<h2 class="text-3xl md:text-4xl text-gray-700 font-light mt-2">Iranian harpist</h2>
			<div class="w-24 h-px bg-gray-300 mx-auto my-12"></div>
		</div>
	</section>

	<!-- First Image Section -->
	<section class="container mx-auto px-4 my-8">
		<img 
			src="img/IMG_3636.JPEG" 
			alt="Shamim Minoo performing on the harp in a concert hall." 
			class="w-full h-auto object-cover"
		>
	</section>

	<!-- Main Biography Text Section -->
	<section class="py-16 px-4">
		<div class="max-w-5xl mx-auto">
			<h3 class="text-2xl font-semibold text-center text-gray-800">Harp Column Magazine :</h3>
			<h3 class="text-3xl font-serif text-center mt-4 mb-12 leading-snug">
				Iranian harpist Shamim Minoo stands out among a talented field of performers to take home the gold at the 13th USA International Harp Competition
			</h3>

			<div class="grid md:grid-cols-2 gap-12 text-base md:text-lg text-gray-700 leading-relaxed font-light">
				<div>
					<p class="mb-6">
						Shamim Minoo, born in 2004 in Tehran, is the first in her family to pursue a career in music. She began her musical journey at the age of six in Iran, studying both harp and singing. By twelve, she was performing with major Iranian orchestras, including the Iranian Youth Orchestra, where she played Mozart’s Concerto for Flute and Harp. In the following years, she performed with the Tehran Symphony Orchestra, the Iranian National Orchestra, and the Tehran Philharmonic Orchestra.
					</p>
					<p class="mb-6">
						After winning First Prize at the Excellence Level at the “Concours Français de la Harpe”, new doors were opened for Shamim with recital opportunities in Limoges and Paris. She then moved to Paris in 2020 to study harp under the tutelage of Ghislaine Petit-Volta at the Conservatoire à Rayonnement Régional (CRR). Shamim’s commitment to excellence eventually led her to the renowned Conservatoire National Supérieur de Musique et de Danse de Paris (CNSMDP), where she has been studying under the tutelage of the world’s foremost harpists, Isabelle Moretti and Geneviève Létang.
					</p>
					<p>
						Throughout 2024, Shamim has been performing solo recitals across Italy and France, including notable appearances at the Harpissima event and the Camac Music Festival. She was also awarded the Rossetti Prize, which led Shamim to perform Castelnuovo-Tedesco’s Concertino for Harp and Orchestra with the Nuovo Orchestra Scarlatti in Italy. During the summer of 2024, Shamim was awarded a full scholarship to the Aspen Music Festival. There, she studied and performed alongside renowned harpist Nancy Allen, gaining invaluable experience. During her time there, she had the opportunity to perform with several well-known musicians including Roderick Cox and Robert Spano, among others.
					</p>
				</div>
				<div>
					<p class="mb-6">
						Shamim’s international recognition continued to grow as she was awarded some of the highest distinctions and prizes. She won the Gold Medal and the prestigious Renié Prize at the 13th USA International Harp Competition (2025), establishing her as one of the most accomplished young harpists of her generation. She had previously been awarded First Prize at the Szeged International Harp Competition (under-25 category) in Hungary (2022), and First Prize at the 2023 Suoni d’Arpa Competition (Category C) in Italy. She also performed at the Philharmonie de Paris with the Conservatoire Orchestra under the direction of Kirill Karabits and Lionel Bringuier, further confirming her artistic maturity on major international stages.
					</p>
					<p class="mb-6">
						Her talent and dedication have been recognized through numerous scholarships and institutional awards. Shamim has been named a laureate of the Société générale, Ministère de la Culture (France), Fondation de l’Or du Rhin, the Safran Foundation, and the Prix de harp Monique Rollin (Fondation de France), each acknowledging her exceptional promise and contribution to the arts.
					</p>
					<p>
						Shamim’s passion for music is complemented by a deep commitment to expressing emotions through her performances.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Quote Section -->
	<section class="text-center py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="w-24 h-px bg-gray-300 mx-auto mb-12"></div>
			<h3 class="text-2xl font-light text-gray-600">find your personality in the music.</h3>
			<h1 class="text-4xl md:text-5xl font-serif my-6 leading-tight">Don’t compete just to win a prize. Please! It doesn’t work.</h1>
			<h2 class="text-3xl md:text-4xl text-gray-800 font-light">Go to improve yourself. Go to make progress.</h2>
		</div>
	</section>

	<!-- Contact CTA Section -->
	<section class="text-center pb-24 px-4">
		<div class="flex flex-col items-center">
			<!-- This image from the HTML seems to be a signature or decorative element -->
			<img 
				src="img/image.png" 
				alt="Artistic signature element" 
				class="max-w-8xl h-auto my-8"
			>
			
			<a href="/contact" class="inline-block bg-black text-white uppercase tracking-wider font-semibold py-3 px-8 hover:bg-gray-800 transition-colors duration-300">
				Contact Us
			</a>
		</div>
	</section>

</main>	

<Footer />

<style>
	:global(body) {
		font-family: 'Roboto Slab', serif;
		background-color: #000; /* Changement du fond en noir */
		color: hsl(210, 10%, 85%);
	}
	
	.playfair-display-bold {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}
	
	.roboto-slab-regular {
		font-family: 'Roboto Slab', serif;
	}
	
	.prose :global(.drop-cap::first-letter) {
		font-size: 5em;
		font-weight: bold;
		float: left;
		line-height: 0.8;
		margin-right: 0.15em;
		margin-top: 0.1em;
		color: var(--color-primary);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}
	
	/* Timeline styling */
	.border-l-4 {
		position: relative;
	}
	
	.border-l-4::before {
		content: '';
		position: absolute;
		left: -8px;
		top: 0;
		width: 14px;
		height: 14px;
		background-color: var(--color-primary);
		border-radius: 50%;
		border: 3px solid var(--color-background);
		box-shadow: 0 0 0 3px var(--color-primary), 0 4px 8px rgba(0, 0, 0, 0.3);
	}
	
	/* Enhanced desktop interactions */
	@media (min-width: 1024px) {
		.container {
			max-width: 1400px;
		}
		
		/* Parallax-like effect for backgrounds */
		section:nth-child(even) {
			background-attachment: fixed;
		}
		
		/* Smooth scrolling anchor offset */
		html {
			scroll-padding-top: 100px;
		}
		
		/* Enhanced hover states */
		.group:hover .transform {
			transform: translateY(-4px) scale(1.02);
		}
		
		/* Better text selection */
		::selection {
			background: var(--color-primary);
			color: var(--color-background);
		}
	}
	
	@media (min-width: 1536px) {
		.container {
			max-width: 1600px;
		}
		
		/* Ultra-wide screen optimizations */
		.max-w-8xl {
			max-width: 1800px;
		}
	}
	
	/* High-resolution display optimizations */
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.prose :global(.drop-cap::first-letter) {
			font-size: 4.5em;
		}
		
		/* Sharper shadows */
		.shadow-deep {
			box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
		}
	}
	
	/* Add custom utility classes */
	.bg-gradient-radial {
		background-image: radial-gradient(circle, var(--tw-gradient-stops));
	}
	
	/* Add FontAwesome for social icons */
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
