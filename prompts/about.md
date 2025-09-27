I want you to change a svelte and svelte kit page of my project for shamimminoo which is iraninan harpist 
please change this page (about page) to the html layout that I'm sending to you
also content of the page should be like the html layout 
keep in mind that this page is svelte and svelte kit page
(follow this project code base)
just like this html the code must use less colors
please return the full svelte page in answer



the svelte page that I want you to edit is :
```svelte

<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About Shamim Minoo – Gold Medal Harpist & Iranian Musical Ambassador</title>
	<meta name="description" content="Discover the journey of Shamim Minoo, Gold Medal winner at the 13th USA International Harp Competition, from her early beginnings in Iran to becoming an internationally acclaimed harpist." />
</svelte:head>

<Header />
<main class="bg-background text-foreground pt-20">
	<!-- Hero Section -->
	<section class="py-32 md:py-48 xl:py-56 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
		<div class="absolute inset-0 opacity-30">
			<div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><g fill=\'none\' fill-rule=\'evenodd\'><g fill=\'%23ffffff\' fill-opacity=\'0.05\'><circle cx=\'30\' cy=\'30\' r=\'2\'/></g></g></svg>'); background-size: 60px 60px;"></div>
		</div>
		<div class="container mx-auto px-4 text-center relative">
			<div class="max-w-7xl mx-auto">
				<h1 class="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-primary playfair-display-bold mb-12 tracking-tight leading-none">About</h1>
				<div class="max-w-5xl mx-auto">
					<p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground/90 roboto-slab-regular leading-relaxed mb-10">
						From the bustling streets of Iran to the prestigious concert halls of Paris
					</p>
					<p class="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto">
						Discover the extraordinary journey of a young harpist who redefined classical music with her soul, 
						becoming the first Iranian to win the Gold Medal at the USA International Harp Competition.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Biography Section -->
	<section class="py-24 md:py-32 lg:py-40 bg-background">
		<div class="container mx-auto px-4">
			<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start max-w-7xl mx-auto">
				<div class="lg:col-span-7">
					<div class="prose prose-invert prose-xl max-w-none roboto-slab text-foreground/85 space-y-8">
						<p class="drop-cap text-xl lg:text-2xl leading-relaxed">
							<b>Shamim Minoo</b> stands as one of the most compelling voices in contemporary classical music, 
							an Iranian harpist whose artistry transcends cultural boundaries and redefines the possibilities of her instrument. 
							At just 21 years old, she has already achieved what many musicians strive for throughout their entire careers.
						</p>
						
						<p class="text-lg lg:text-xl leading-relaxed">
							Her most notable achievement came in 2025 when she was awarded the <b class="text-primary">Gold Medal</b> and prestigious 
							<b class="text-primary">Renié Prize</b> at the <b class="text-primary">13th USA International Harp Competition</b>, marking a historic moment 
							as the first Iranian harpist to receive this honor. This victory was not merely a personal triumph 
							but a cultural milestone that brought Iranian musical heritage to the global stage.
						</p>

						<div class="border-l-4 border-primary pl-8 my-12 bg-primary/5 py-6 rounded-r-xl">
							<blockquote class="text-xl lg:text-2xl italic text-primary/90 leading-relaxed">
								"Music is not just about technical perfection—it's about storytelling, about connecting hearts across cultures and generations."
							</blockquote>
							<cite class="text-base text-muted-foreground mt-4 block">— Shamim Minoo</cite>
						</div>

						<h3 class="text-3xl lg:text-4xl font-bold text-primary playfair-display-bold mt-16 mb-8">Early Beginnings</h3>
						
						<p class="text-lg lg:text-xl leading-relaxed">
							Born in 2004 in Iran, Shamim's musical journey began at the tender age of six when she first 
							encountered the harp. What started as childhood curiosity quickly blossomed into an all-consuming 
							passion. Alongside her harp studies, she also trained in voice, developing the comprehensive 
							musicianship that would later distinguish her performances.
						</p>

						<p class="text-lg lg:text-xl leading-relaxed">
							Her talent was undeniable from the start. By her early teens, she was already performing 
							with Iran's most prestigious musical institutions, including the <b class="text-primary">Tehran Symphony Orchestra</b> 
							and the <b class="text-primary">Iranian National Orchestra</b>. These early experiences performing with seasoned 
							professionals shaped her understanding of ensemble playing and exposed her to the rich 
							tradition of Persian classical music.
						</p>
					</div>
				</div>
				
				<div class="lg:col-span-5">
					<div class="sticky top-8 space-y-8">
						<div class="relative group">
							<img 
								src="https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3632-scaled.jpeg" 
								alt="Shamim Minoo with her harp" 
								class="w-full h-auto object-cover shadow-deep rounded-2xl hover:shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"
							>
							<!-- Overlay on hover -->
							<div class="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
						</div>
						
						<div class="bg-gradient-to-br from-muted/30 to-primary/10 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm">
							<h4 class="text-xl font-bold text-primary playfair-display-bold mb-6">At a Glance</h4>
							<ul class="space-y-4 text-foreground/85">
								<li class="flex justify-between items-center py-2 border-b border-foreground/10">
									<span class="font-semibold text-foreground/70">Born</span>
									<span>2004, Iran</span>
								</li>
								<li class="flex justify-between items-center py-2 border-b border-foreground/10">
									<span class="font-semibold text-foreground/70">Started Music</span>
									<span>Age 6 (Harp & Voice)</span>
								</li>
								<li class="flex justify-between items-center py-2 border-b border-foreground/10">
									<span class="font-semibold text-foreground/70">Moved to Paris</span>
									<span>2020 (Age 15)</span>
								</li>
								<li class="flex justify-between items-center py-2 border-b border-foreground/10">
									<span class="font-semibold text-foreground/70">Gold Medal</span>
									<span>2025, USA Competition</span>
								</li>
								<li class="flex justify-between items-center py-2 border-b border-foreground/10">
									<span class="font-semibold text-foreground/70">Special Honor</span>
									<span>Renié Prize Winner</span>
								</li>
								<li class="flex justify-between items-center py-2">
									<span class="font-semibold text-foreground/70">Current Study</span>
									<span>Conservatoire National, Paris</span>
								</li>
							</ul>
							
							<div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/30">
								<div class="text-center">
									<div class="text-3xl text-primary mb-3">🏆</div>
									<p class="text-sm font-bold text-primary uppercase tracking-wider mb-2">Historic Achievement</p>
									<p class="text-xs text-foreground/70 leading-relaxed">
										First Iranian harpist to win USA International Harp Competition Gold Medal
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Paris Journey Section -->
	<section class="py-24 md:py-32 lg:py-40 bg-gradient-to-r from-muted/10 to-primary/5 relative">
		<div class="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20"></div>
		<div class="container mx-auto px-4 relative">
			<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
				<div class="lg:col-span-5">
					<div class="relative">
						<!-- Decorative elements -->
						<div class="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
						<div class="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
						
						<div class="relative bg-gradient-to-br from-primary/15 to-muted/20 p-10 rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-sm">
							<div class="text-center text-primary space-y-4">
								<div class="text-6xl mb-6">🎼</div>
								<h4 class="text-xl font-bold playfair-display-bold">Paris Conservatory Years</h4>
								<p class="text-base text-muted-foreground">2020 - Present</p>
								<div class="pt-4 border-t border-primary/30">
									<p class="text-sm text-foreground/70 leading-relaxed">
										From the Conservatoire à Rayonnement Régional to the prestigious Conservatoire National Supérieur
									</p>
								</div>
							</div>
						</div>
						
						<!-- Stats -->
						<div class="grid grid-cols-2 gap-4 mt-6">
							<div class="bg-background/60 backdrop-blur-sm p-4 rounded-xl text-center border border-primary/10">
								<div class="text-xl font-bold text-primary playfair-display-bold">5</div>
								<div class="text-xs uppercase tracking-wider text-muted-foreground">Years in Paris</div>
							</div>
							<div class="bg-background/60 backdrop-blur-sm p-4 rounded-xl text-center border border-primary/10">
								<div class="text-xl font-bold text-primary playfair-display-bold">15</div>
								<div class="text-xs uppercase tracking-wider text-muted-foreground">Age when moved</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="lg:col-span-7">
					<div class="prose prose-invert prose-xl max-w-none roboto-slab text-foreground/85">
						<h3 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary playfair-display-bold mb-6 leading-tight">The Paris Chapter</h3>
						<p class="text-xl leading-relaxed mb-6">
							At fifteen, Shamim made one of the most courageous decisions of her young life: 
							leaving her family and homeland to pursue her musical dreams in Paris.
						</p>
						<p class="text-lg leading-relaxed mb-8">
							This bold move demonstrated not only her dedication to her craft but also her remarkable maturity and independence. 
							Moving alone to a foreign country at such a young age requires extraordinary determination and vision.
						</p>
						
						<div class="grid md:grid-cols-2 gap-4 my-8">
							<div class="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
								<h5 class="font-bold text-primary mb-2">CRR Paris (2020-2022)</h5>
								<p class="text-sm text-foreground/80">Under <strong>Ghislaine Petit-Volta</strong>, mastering French harp techniques and musical interpretation</p>
							</div>
							<div class="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
								<h5 class="font-bold text-primary mb-2">Conservatoire National (2022-Present)</h5>
								<p class="text-sm text-foreground/80">Studying with masters <strong>Isabelle Moretti</strong> and <strong>Geneviève Létang</strong></p>
							</div>
						</div>
						
						<p class="text-lg leading-relaxed">
							Her exceptional progress led to her acceptance at the prestigious <b class="text-primary">Conservatoire National 
							Supérieur de Musique et de Danse de Paris</b>, where she currently studies under the guidance 
							of renowned masters <b class="text-primary">Isabelle Moretti</b> and <b class="text-primary">Geneviève Létang</b>. This institution has 
							been instrumental in refining her artistry and expanding her repertoire to include both classical masterpieces 
							and contemporary works.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Artistic Philosophy Section -->
	<section class="py-32 md:py-40 xl:py-52 bg-background relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-8xl mx-auto text-center">
				<h3 class="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-primary playfair-display-bold mb-16">Artistic Philosophy</h3>
				
				<div class="max-w-6xl mx-auto mb-20">
					<div class="relative p-12 lg:p-16 xl:p-20 bg-gradient-to-br from-primary/10 to-muted/10 rounded-3xl border border-primary/20 shadow-2xl">
						<!-- Quote marks -->
						<div class="absolute top-8 left-12 text-6xl lg:text-7xl xl:text-8xl text-primary/30 playfair-display-bold">"</div>
						<div class="absolute bottom-8 right-12 text-6xl lg:text-7xl xl:text-8xl text-primary/30 playfair-display-bold">"</div>
						
						<blockquote class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-foreground/95 roboto-slab-regular leading-relaxed italic mb-10">
							Music is the universal language that transcends borders, cultures, and time. Through the harp, 
							I seek to bridge my Iranian heritage with the classical European tradition, creating something 
							entirely new while honoring both worlds.
						</blockquote>
						<cite class="text-lg lg:text-xl text-primary font-semibold">— Shamim Minoo</cite>
					</div>
				</div>
				
				<div class="grid lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
					<div class="group">
						<div class="bg-gradient-to-br from-primary/10 to-muted/20 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full hover:transform hover:scale-105">
							<div class="text-5xl xl:text-6xl text-primary mb-8 group-hover:scale-110 transition-transform duration-300">🌍</div>
							<h4 class="text-xl xl:text-2xl font-bold text-foreground mb-6 playfair-display-bold">Cultural Bridge</h4>
							<p class="text-foreground/70 leading-relaxed text-lg">
								Connecting Eastern and Western musical traditions through innovative interpretations 
								that honor both Persian heritage and European classical excellence.
							</p>
						</div>
					</div>
					
					<div class="group">
						<div class="bg-gradient-to-br from-primary/10 to-muted/20 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full hover:transform hover:scale-105">
							<div class="text-5xl xl:text-6xl text-primary mb-8 group-hover:scale-110 transition-transform duration-300">🎭</div>
							<h4 class="text-xl xl:text-2xl font-bold text-foreground mb-6 playfair-display-bold">Emotional Depth</h4>
							<p class="text-foreground/70 leading-relaxed text-lg">
								Bringing soulful expression and profound emotional resonance to classical repertoire, 
								transforming technical mastery into deeply moving musical experiences.
							</p>
						</div>
					</div>
					
					<div class="group">
						<div class="bg-gradient-to-br from-primary/10 to-muted/20 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full hover:transform hover:scale-105">
							<div class="text-5xl xl:text-6xl text-primary mb-8 group-hover:scale-110 transition-transform duration-300">🚀</div>
							<h4 class="text-xl xl:text-2xl font-bold text-foreground mb-6 playfair-display-bold">Innovation</h4>
							<p class="text-foreground/70 leading-relaxed text-lg">
								Pushing the boundaries of harp performance through contemporary techniques while 
								maintaining respect for classical traditions and cultural authenticity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Achievements Timeline -->
	<section class="py-32 md:py-40 xl:py-52 bg-gradient-to-br from-muted/10 to-primary/5">
		<div class="container mx-auto px-4">
			<h3 class="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-primary playfair-display-bold mb-20 text-center">Career Milestones</h3>
			<div class="max-w-7xl mx-auto">
				<div class="space-y-20 xl:space-y-24">
					<!-- 2025 -->
					<div class="flex items-start gap-16 xl:gap-20 group">
						<div class="flex-shrink-0 w-40 xl:w-48 text-right">
							<span class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary playfair-display-bold group-hover:scale-110 transition-transform duration-300">2025</span>
						</div>
						<div class="border-l-4 border-primary pl-16 xl:pl-20 pb-8 flex-grow relative">
							<div class="bg-gradient-to-br from-primary/10 to-muted/10 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:transform hover:scale-[1.02]">
								<h4 class="text-2xl xl:text-3xl font-bold text-foreground mb-6 playfair-display-bold">Gold Medal & Renié Prize</h4>
								<p class="text-lg xl:text-xl text-foreground/80 leading-relaxed mb-6">
									Historic win at the 13th USA International Harp Competition, becoming the first Iranian 
									harpist to receive this prestigious recognition.
								</p>
								<div class="flex flex-wrap items-center gap-4 text-primary text-sm xl:text-base font-semibold">
									<span class="bg-primary/20 px-4 py-2 rounded-full">🏆 Gold Medal</span>
									<span class="bg-primary/20 px-4 py-2 rounded-full">🎖️ Renié Prize</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 2020 -->
					<div class="flex items-start gap-16 xl:gap-20 group">
						<div class="flex-shrink-0 w-40 xl:w-48 text-right">
							<span class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary playfair-display-bold group-hover:scale-110 transition-transform duration-300">2020</span>
						</div>
						<div class="border-l-4 border-primary pl-16 xl:pl-20 pb-8 flex-grow relative">
							<div class="bg-gradient-to-br from-primary/10 to-muted/10 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:transform hover:scale-[1.02]">
								<h4 class="text-2xl xl:text-3xl font-bold text-foreground mb-6 playfair-display-bold">Paris Conservatory Admission</h4>
								<p class="text-lg xl:text-xl text-foreground/80 leading-relaxed mb-6">
									Moved to Paris at age 15 to study at CRR, later advancing to the Conservatoire National 
									Supérieur de Musique et de Danse de Paris.
								</p>
								<div class="flex flex-wrap items-center gap-4 text-primary text-sm xl:text-base font-semibold">
									<span class="bg-primary/20 px-4 py-2 rounded-full">🎓 CRR Paris</span>
									<span class="bg-primary/20 px-4 py-2 rounded-full">🏛️ Conservatoire National</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 2018 -->
					<div class="flex items-start gap-16 xl:gap-20 group">
						<div class="flex-shrink-0 w-40 xl:w-48 text-right">
							<span class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary playfair-display-bold group-hover:scale-110 transition-transform duration-300">2018</span>
						</div>
						<div class="border-l-4 border-primary pl-16 xl:pl-20 pb-8 flex-grow relative">
							<div class="bg-gradient-to-br from-primary/10 to-muted/10 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:transform hover:scale-[1.02]">
								<h4 class="text-2xl xl:text-3xl font-bold text-foreground mb-6 playfair-display-bold">Orchestra Debuts</h4>
								<p class="text-lg xl:text-xl text-foreground/80 leading-relaxed mb-6">
									First performances with Tehran Symphony Orchestra and Iranian National Orchestra, 
									establishing herself in Iran's classical music scene.
								</p>
								<div class="flex flex-wrap items-center gap-4 text-primary text-sm xl:text-base font-semibold">
									<span class="bg-primary/20 px-4 py-2 rounded-full">🎼 Tehran Symphony</span>
									<span class="bg-primary/20 px-4 py-2 rounded-full">🎻 Iranian National</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 2010 -->
					<div class="flex items-start gap-16 xl:gap-20 group">
						<div class="flex-shrink-0 w-40 xl:w-48 text-right">
							<span class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary playfair-display-bold group-hover:scale-110 transition-transform duration-300">2010</span>
						</div>
						<div class="border-l-4 border-primary pl-16 xl:pl-20 flex-grow relative">
							<div class="bg-gradient-to-br from-primary/10 to-muted/10 p-10 xl:p-12 rounded-2xl border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:transform hover:scale-[1.02]">
								<h4 class="text-2xl xl:text-3xl font-bold text-foreground mb-6 playfair-display-bold">Musical Journey Begins</h4>
								<p class="text-lg xl:text-xl text-foreground/80 leading-relaxed mb-6">
									Started studying harp and voice at age 6, laying the foundation for her future career 
									in classical music.
								</p>
								<div class="flex flex-wrap items-center gap-4 text-primary text-sm xl:text-base font-semibold">
									<span class="bg-primary/20 px-4 py-2 rounded-full">🎵 First Lessons</span>
									<span class="bg-primary/20 px-4 py-2 rounded-full">🎤 Voice Training</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Future Vision Section -->
	<section class="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
				<div class="lg:col-span-7">
					<div class="prose prose-invert prose-xl max-w-none roboto-slab text-foreground/85">
						<h3 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary playfair-display-bold mb-6 leading-tight">Looking Forward</h3>
						<p class="text-xl leading-relaxed mb-6">
							Shamim's victory at the USA International Harp Competition marks not an end, but a beginning. 
							As she continues her studies in Paris, she is preparing for a career that promises to break 
							new ground in classical music.
						</p>
						<p class="text-lg leading-relaxed mb-6">
							Her upcoming projects include collaborations with international orchestras, chamber music 
							ensembles, and solo recitals that will showcase both traditional classical repertoire and 
							contemporary works that reflect her unique cultural perspective.
						</p>
						<p class="text-lg leading-relaxed">
							Beyond performance, Shamim is passionate about music education and cultural exchange, 
							hoping to inspire the next generation of musicians to embrace their heritage while 
							pursuing excellence in their chosen field.
						</p>
						
						<!-- Future Goals Grid -->
						<div class="grid md:grid-cols-2 gap-4 mt-8">
							<div class="bg-primary/5 p-6 rounded-xl border border-primary/20">
								<h5 class="font-bold text-primary mb-2 flex items-center gap-2">
									<span>🎼</span> Performance Goals
								</h5>
								<p class="text-sm text-foreground/80">International orchestras, chamber music, solo recitals</p>
							</div>
							<div class="bg-primary/5 p-6 rounded-xl border border-primary/20">
								<h5 class="font-bold text-primary mb-2 flex items-center gap-2">
									<span>🎓</span> Educational Mission
								</h5>
								<p class="text-sm text-foreground/80">Music education and cultural exchange programs</p>
							</div>
							<div class="bg-primary/5 p-6 rounded-xl border border-primary/20">
								<h5 class="font-bold text-primary mb-2 flex items-center gap-2">
									<span>🌍</span> Cultural Bridge
								</h5>
								<p class="text-sm text-foreground/80">Connecting Persian and Western musical traditions</p>
							</div>
							<div class="bg-primary/5 p-6 rounded-xl border border-primary/20">
								<h5 class="font-bold text-primary mb-2 flex items-center gap-2">
									<span>📀</span> Recording Projects
								</h5>
								<p class="text-sm text-foreground/80">Albums featuring classical and contemporary repertoire</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="lg:col-span-5 text-center">
					<div class="relative">
						<!-- Decorative background -->
						<div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted/30 rounded-3xl transform rotate-6"></div>
						<div class="relative bg-gradient-to-br from-primary/15 to-muted/20 p-12 rounded-3xl shadow-2xl border border-primary/30">
							<div class="text-6xl text-primary mb-6">🌟</div>
							<h4 class="text-2xl font-bold text-primary playfair-display-bold mb-4">The Future</h4>
							<p class="text-lg text-foreground/90 leading-relaxed mb-6">
								A new chapter in classical music, where tradition meets innovation, 
								and cultural boundaries dissolve through the power of artistic expression.
							</p>
							
							<!-- Stats -->
							<div class="grid grid-cols-3 gap-4 pt-6 border-t border-primary/30">
								<div class="text-center">
									<div class="text-xl font-bold text-primary playfair-display-bold">50+</div>
									<div class="text-xs uppercase tracking-wider text-muted-foreground">Upcoming Concerts</div>
								</div>
								<div class="text-center">
									<div class="text-xl font-bold text-primary playfair-display-bold">5</div>
									<div class="text-xs uppercase tracking-wider text-muted-foreground">Album Projects</div>
								</div>
								<div class="text-center">
									<div class="text-xl font-bold text-primary playfair-display-bold">∞</div>
									<div class="text-xs uppercase tracking-wider text-muted-foreground">Possibilities</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/5 to-muted/10 relative">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 text-center relative">
			<h3 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary playfair-display-bold mb-6">Connect</h3>
			<p class="text-lg lg:text-xl text-foreground/85 mb-4 max-w-4xl mx-auto leading-relaxed">
				Follow Shamim's journey as she continues to push the boundaries of classical harp performance 
				and share her unique artistic vision with audiences worldwide.
			</p>
			<p class="text-base text-foreground/70 mb-12 max-w-3xl mx-auto">
				Stay updated on her latest performances, recordings, and cultural collaborations that bridge musical traditions.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
				<a href="#press" class="bg-primary text-primary-foreground px-10 py-3 font-bold uppercase text-sm hover:bg-primary/80 transition-all duration-300 inline-flex items-center gap-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
					</svg>
					Latest News
				</a>
				<a href="#media" class="border-2 border-primary text-primary px-10 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-3 rounded-full hover:shadow-lg">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
					</svg>
					Watch Performances
				</a>
			</div>
			
			<!-- Additional Links -->
			<div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
				<div class="text-center p-6 bg-background/50 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
					<div class="text-3xl text-primary mb-3">📧</div>
					<h5 class="font-semibold text-foreground mb-2">Press Inquiries</h5>
					<p class="text-sm text-foreground/70">Media interviews and performance bookings</p>
				</div>
				<div class="text-center p-6 bg-background/50 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
					<div class="text-3xl text-primary mb-3">🎵</div>
					<h5 class="font-semibold text-foreground mb-2">Master Classes</h5>
					<p class="text-sm text-foreground/70">Educational workshops and harp instruction</p>
				</div>
				<div class="text-center p-6 bg-background/50 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
					<div class="text-3xl text-primary mb-3">🤝</div>
					<h5 class="font-semibold text-foreground mb-2">Collaborations</h5>
					<p class="text-sm text-foreground/70">Artistic partnerships and cultural exchanges</p>
				</div>
			</div>
		</div>
	</section>
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
```

the current web page is look like this :


please change this page (about page) to the html layout that I'm sending to you
also content of the page should be like the html layout 
keep in mind that this page is svelte and svelte kit page
(follow this project code base)
just like this html the code must use less colors


<html lang="en-US" class=" svgfilters svgclippaths svgforeignobject smil inlinesvg svgasimg"><head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>About – Example 1 – Shamim Minoo</title>
<meta name="robots" content="max-image-preview:large">
	<style>img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }</style>
	<link rel="dns-prefetch" href="//cdn.jsdelivr.net">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="alternate" type="application/rss+xml" title="Shamim Minoo » Feed" href="https://shamimminoo.com/feed/">
<link rel="alternate" type="application/rss+xml" title="Shamim Minoo » Comments Feed" href="https://shamimminoo.com/comments/feed/">
<script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/a61444a1/www-widgetapi.vflset/www-widgetapi.js" async=""></script><script src="https://www.youtube.com/iframe_api"></script><script type="text/javascript">
/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/shamimminoo.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.8.2"}};
/*! This file is auto-generated */
!function(s,n){var o,i,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),a=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===a[t]})}function u(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);for(var n=e.getImageData(16,16,1,1),a=0;a<n.data.length;a++)if(0!==n.data[a])return!1;return!0}function f(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\udedf")}return!1}function g(e,t,n,a){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):s.createElement("canvas"),o=r.getContext("2d",{willReadFrequently:!0}),i=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(function(e){i[e]=t(o,e,n,a)}),i}function t(e){var t=s.createElement("script");t.src=e,t.defer=!0,s.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",i=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){s.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+g.toString()+"("+[JSON.stringify(i),f.toString(),p.toString(),u.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"}),r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=function(e){c(n=e.data),r.terminate(),t(n)})}catch(e){}c(n=g(i,f,p,u))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
</script>
<style id="wp-emoji-styles-inline-css" type="text/css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
<style id="classic-theme-styles-inline-css" type="text/css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id="global-styles-inline-css" type="text/css">
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
</style>
<link rel="stylesheet" id="elementor-frontend-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.31.5" type="text/css" media="all">
<link rel="stylesheet" id="sr-addons-elementor-css" href="https://shamimminoo.com/wp-content/plugins/elementor-for-sonaar/assets/css/sonaar-addons-elementor.css?ver=2.5.1" type="text/css" media="all">
<link rel="stylesheet" id="iron-master-css" href="https://shamimminoo.com/wp-content/themes/sonaar/dist/css/main.min.css?ver=6.8.2" type="text/css" media="all">
<link rel="stylesheet" id="child-style-css" href="https://shamimminoo.com/wp-content/themes/sonaar-child/style.css?ver=6.8.2" type="text/css" media="all">
<link rel="stylesheet" id="sr-font-awesome-css" href="https://shamimminoo.com/wp-content/themes/sonaar/includes/sonaar-music/fontawesome/css/fontawesome.min.css?ver=5.12.0" type="text/css" media="all">
<link rel="stylesheet" id="sr-font-awesome-brand-css" href="https://shamimminoo.com/wp-content/themes/sonaar/includes/sonaar-music/fontawesome/css/brands.min.css?ver=5.12.0" type="text/css" media="all">
<link rel="stylesheet" id="sr-font-awesome-solid-css" href="https://shamimminoo.com/wp-content/themes/sonaar/includes/sonaar-music/fontawesome/css/solid.min.css?ver=5.12.0" type="text/css" media="all">
<link rel="stylesheet" id="sr-font-awesome-regular-css" href="https://shamimminoo.com/wp-content/themes/sonaar/includes/sonaar-music/fontawesome/css/regular.min.css?ver=5.12.0" type="text/css" media="all">
<link rel="stylesheet" id="sr-google-font-css" href="//fonts.googleapis.com/css?family=Lato:400|Nunito:300,700,400|Open+Sans:300,700" type="text/css" media="all">
<link rel="stylesheet" id="iron-custom-styles-css" href="https://shamimminoo.com/?load=custom-style.css&amp;ver=6.8.2" type="text/css" media="all">

<link rel="stylesheet" id="elementor-icons-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.43.0" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-5639-css" href="https://shamimminoo.com/wp-content/uploads/elementor/css/post-5639.css?ver=1757521963" type="text/css" media="all">
<link rel="stylesheet" id="font-awesome-5-all-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.31.5" type="text/css" media="all">
<link rel="stylesheet" id="font-awesome-4-shim-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.31.5" type="text/css" media="all">




<link rel="stylesheet" id="widget-text-editor-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.31.5" type="text/css" media="all">
<link rel="stylesheet" id="widget-image-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.31.5" type="text/css" media="all">
<link rel="stylesheet" id="e-animation-bob-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-bob.min.css?ver=3.31.5" type="text/css" media="all">
<link rel="stylesheet" id="widget-heading-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.31.5" type="text/css" media="all">


<link rel="stylesheet" id="elementor-gf-local-roboto-css" href="https://shamimminoo.com/wp-content/uploads/elementor/google-fonts/css/roboto.css?ver=1751799894" type="text/css" media="all">
<link rel="stylesheet" id="elementor-gf-local-robotoslab-css" href="https://shamimminoo.com/wp-content/uploads/elementor/google-fonts/css/robotoslab.css?ver=1751799918" type="text/css" media="all">

<link rel="stylesheet" id="elementor-gf-local-playfairdisplay-css" href="https://shamimminoo.com/wp-content/uploads/elementor/google-fonts/css/playfairdisplay.css?ver=1751799942" type="text/css" media="all">
<link rel="stylesheet" id="elementor-icons-shared-0-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3" type="text/css" media="all">
<link rel="stylesheet" id="elementor-icons-fa-brands-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" type="text/css" media="all">
<link rel="stylesheet" id="elementor-icons-fa-solid-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3" type="text/css" media="all">
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script type="text/javascript" src="//shamimminoo.com/wp-content/plugins/revslider/sr6/assets/js/rbtools.min.js?ver=6.7.25" async="" id="tp-tools-js"></script>
<script type="text/javascript" src="//shamimminoo.com/wp-content/plugins/revslider/sr6/assets/js/rs6.min.js?ver=6.7.25" async="" id="revmin-js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js" id="vue-js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/d3@5/dist/d3.min.js" id="d3-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=3.31.5" id="font-awesome-4-shim-js"></script>
<link rel="https://api.w.org/" href="https://shamimminoo.com/wp-json/"><link rel="alternate" title="JSON" type="application/json" href="https://shamimminoo.com/wp-json/wp/v2/pages/5427"><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://shamimminoo.com/xmlrpc.php?rsd">
<meta name="generator" content="WordPress 6.8.2">
<link rel="canonical" href="https://shamimminoo.com/">
<link rel="shortlink" href="https://shamimminoo.com/">
<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://shamimminoo.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fshamimminoo.com%2F">
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://shamimminoo.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fshamimminoo.com%2F&amp;format=xml">
<meta name="generator" content="Elementor 3.31.5; features: additional_custom_breakpoints, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-auto">
<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>			<style>
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			</style>
			<meta name="generator" content="Powered by Slider Revolution 6.7.25 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface.">
<link rel="icon" href="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y-150x150.jpg" sizes="32x32">
<link rel="icon" href="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg" sizes="192x192">
<link rel="apple-touch-icon" href="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg">
<meta name="msapplication-TileImage" content="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg">
<script>function setREVStartSize(e){
			//window.requestAnimationFrame(function() {
				window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
				window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
				try {
					var pw = document.getElementById(e.c).parentNode.offsetWidth,
						newh;
					pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
					e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
					e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
					e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
					e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
					e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
					e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
					e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
					if(e.layout==="fullscreen" || e.l==="fullscreen")
						newh = Math.max(e.mh,window.RSIH);
					else{
						e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
						for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
						e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
						e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
						for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
											
						var nl = new Array(e.rl.length),
							ix = 0,
							sl;
						e.tabw = e.tabhide>=pw ? 0 : e.tabw;
						e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
						e.tabh = e.tabhide>=pw ? 0 : e.tabh;
						e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
						for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
						sl = nl[0];
						for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
						var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
						newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
					}
					var el = document.getElementById(e.c);
					if (el!==null && el) el.style.height = newh+"px";
					el = document.getElementById(e.c+"_wrapper");
					if (el!==null && el) {
						el.style.height = newh+"px";
						el.style.display = "block";
					}
				} catch(e){
					console.log("Failure at Presize of Slider:" + e)
				}
			//});
		  };</script>
<link rel="icon" href="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y-150x150.jpg" sizes="32x32">
<link rel="icon" href="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg" sizes="192x192">
<link rel="apple-touch-icon" href="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg">
<meta name="msapplication-TileImage" content="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg">
<script src="https://shamimminoo.com/wp-includes/js/wp-emoji-release.min.js?ver=6.8.2" defer=""></script><style id="iron-custom-styles-inline-css" type="text/css">
#overlay .perspective { 
	opacity: 1;
}
.menu-toggle span, .menu-toggle.toggled span{ background-color: #ffffff; }.menu-toggle rect{
	fill:#ffffff;

}ul.header-top-menu li a{color:#ffffff;}.menu-toggle-off polygon{
	fill:#ffffff;
}#page-banner{height:350px;}span.heading-b3{
		margin-top:30px;
		margin-bottom:75px;
		background-color:rgb(140, 121, 86);
	}
</style></head>
<body class="wp-singular page-template-default page page-id-1767 wp-custom-logo wp-theme-sonaar wp-child-theme-sonaar-child lang-en-US layout-wide fixed_header _symphony_elementor elementor-default elementor-kit-5639 elementor-page elementor-page-1767 pjax e--ua-blink e--ua-chrome e--ua-webkit" data-elementor-device-mode="mobile"><div class="sr-offcanvas-content sr-offcanvas-content-576153f sr-offcanvas-reveal elementor-element-576153f sr-offcanvas-content-right">
                <div class="sr-offcanvas-body">
                       
            <div class="sr-offcanvas-close sr-offcanvas-close-576153f" role="button">
                                    
                        	<div class="elementor-icon sr-offcanvas-close-svg-icon">
	                        	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><g id="cross">	<rect x="15.5" y="3.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6274 16)" width="1" height="25.5"></rect>	<rect x="3.3" y="15.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6274 16)" width="25.5" height="1"></rect></g></svg>                        	</div>

                        <!-- <img class="sr-offcanvas-close-svg-icon" src="https://shamimminoo.com/wp-content/uploads/2020/12/menu-close-1.svg" alt=""> -->



                                                </div>
        
                            		<div data-elementor-type="page" data-elementor-id="6005" class="elementor elementor-6005">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-438b56f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="438b56f" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6da37531" data-id="6da37531" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2a25d9a0 elementor-widget__width-auto elementor-widget elementor-widget-sr-sitelogo animated fadeIn" data-id="2a25d9a0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="sr-sitelogo.default">
				<div class="elementor-widget-container">
							<div class="sr-site-logo">
							<a class="" href="https://shamimminoo.com">
				
			<div class="sr-site-logo-set">           
				<div class="sr-site-logo-container">
					<img class="sr-site-logo-img sr-logo-primary elementor-animation-" src="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y.jpg" alt="">
											
				</div>
			</div>
							</a>
						</div>  
							</div>
				</div>
				<div class="elementor-element elementor-element-319d129c sr-e-menu--dropdown-none sr-e-menu__align-left sr-e-menu--anim-enable elementor-widget elementor-widget-sr-e-menu" data-id="319d129c" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;}" data-widget_type="sr-e-menu.default">
				<div class="elementor-widget-container">
							<nav role="navigation" class="sr-e-desktop sr-e-menu sr-menu--vertical"><ul id="menu-2-319d129c" class=""><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-822" data-id="menu-item-822"><a href="#">Concerts</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58" data-id="menu-item-58"><a href="https://shamimminoo.com/events-list/">Concerts – List</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-847" data-id="menu-item-847"><a href="https://shamimminoo.com/tour-grid/">Concerts – Grid</a></li>
	<li class="no-ajax menu-item menu-item-type-post_type menu-item-object-page menu-item-1542" data-id="menu-item-1542"><a href="https://shamimminoo.com/events-bandsintown/">Concerts – Bandsintown</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1530" data-id="menu-item-1530"><a href="https://shamimminoo.com/all-events/">Concerts &amp; Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-852" data-id="menu-item-852"><a href="https://shamimminoo.com/past-events/">Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-event menu-item-1403" data-id="menu-item-1403"><a href="https://shamimminoo.com/event/shockelm-music-show/">Single Concert</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1342" data-id="menu-item-1342"><a href="#">Discography</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1762" data-id="menu-item-1762"><a href="https://shamimminoo.com/playlist/horizon/">Single Discography – with Header</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-2121" data-id="menu-item-2121"><a href="https://shamimminoo.com/playlist/dust-to-play/">Single Discography – Side Cover</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1760" data-id="menu-item-1760"><a href="https://shamimminoo.com/playlist/soundcloud-album/">Single Discography – SoundCloud</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1761" data-id="menu-item-1761"><a href="https://shamimminoo.com/playlist/spotify-album/">Single Discography – Spotify</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-835" data-id="menu-item-835"><a href="https://shamimminoo.com/music-slider/">Discography – Slider</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2665" data-id="menu-item-2665"><a href="https://shamimminoo.com/music-click-play/">Discography – Click &amp; Play</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1728" data-id="menu-item-1728"><a href="https://shamimminoo.com/music-parallax/">Discography – Parallax</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1238" data-id="menu-item-1238"><a href="https://shamimminoo.com/music-grid/">Discography – Grid</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1236" data-id="menu-item-1236"><a href="https://shamimminoo.com/music-fullwidth/">Discography – Fullwidth</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1727" data-id="menu-item-1727"><a href="https://shamimminoo.com/music-2-columns/">Discography – 2 Columns</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1237" data-id="menu-item-1237"><a href="https://shamimminoo.com/music-filters/">Discography – Filters</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-833" data-id="menu-item-833"><a href="https://shamimminoo.com/music-list/">Discography – List</a></li>
	<li class="no-ajax menu-item menu-item-type-custom menu-item-object-custom menu-item-5630" data-id="menu-item-5630"><a href="https://demo.sonaar.io/extra-templates/music-players-unlimited-styles/">Audio Player with Unlimited Styles</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2425 current-menu-ancestor current-menu-parent current-menu-item current_page_item" data-id="menu-item-2425"><a href="#">About</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1800" data-id="menu-item-1800"><a href="https://shamimminoo.com/about-example-1/">About – Example 1</a></li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5551" data-id="menu-item-5551"><a href="#">Media</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1240" data-id="menu-item-1240"><a href="#">Videos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342" data-id="menu-item-5342"><a href="https://shamimminoo.com/video-youtube-channel/">YouTube Channel</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71" data-id="menu-item-71"><a href="https://shamimminoo.com/videos-list/">Videos – List</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1241" data-id="menu-item-1241"><a href="#">Photos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1678" data-id="menu-item-1678"><a href="https://shamimminoo.com/gallery-instagram/">Gallery – Instagram</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" data-id="menu-item-62"><a href="https://shamimminoo.com/gallery-boxed/">Gallery – Boxed</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" data-id="menu-item-63"><a href="https://shamimminoo.com/gallery-fullwidth/">Gallery – Fullwidth</a></li>
	</ul>
</li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-5610" data-id="menu-item-5610"><a href="https://shamimminoo.com/music-store/">Music Store</a></li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72" data-id="menu-item-72"><a href="#">Pages</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1732" data-id="menu-item-1732"><a href="#">Press</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67" data-id="menu-item-67"><a href="https://shamimminoo.com/news-classic/">Blog – Classic</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" data-id="menu-item-64"><a href="https://shamimminoo.com/news-2-columns/">Blog – 2 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1707" data-id="menu-item-1707"><a href="https://shamimminoo.com/news-3-columns/">Blog – 3 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68" data-id="menu-item-68"><a href="https://shamimminoo.com/news-list/">Blog – List</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3479" data-id="menu-item-3479"><a href="https://shamimminoo.com/we-are-finalist-the-international-music-festival/">Blog Post</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2131" data-id="menu-item-2131"><a href="#">Contact</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859" data-id="menu-item-1859"><a href="https://shamimminoo.com/contact/">Contact – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891" data-id="menu-item-1891"><a href="https://shamimminoo.com/contact-example-2/">Contact – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1911" data-id="menu-item-1911"><a href="https://shamimminoo.com/contact-example-3/">Contact – Example 3</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5334" data-id="menu-item-5334"><a href="#">Podcast</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5333" data-id="menu-item-5333"><a href="#">Episodes</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5341" data-id="menu-item-5341"><a href="https://shamimminoo.com/podcast/episode-example-youtube-video/">Episode Example | Youtube</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5335" data-id="menu-item-5335"><a href="https://shamimminoo.com/podcast/episode-04-everything-you-say-is-great/">Episode Example | MP3</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5339" data-id="menu-item-5339"><a href="https://shamimminoo.com/podcast/episode-example-libsyn/">Episode Example | Libsyn</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5340" data-id="menu-item-5340"><a href="https://shamimminoo.com/podcast/episode-example-soundcloud/">Episode Example | SoundCloud</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5337" data-id="menu-item-5337"><a href="https://shamimminoo.com/podcast/episode-example-stitcher/">Episode Example | Stitcher</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5338" data-id="menu-item-5338"><a href="https://shamimminoo.com/podcast/copy-of-episode-example-libsyn/">Episode Example | Icecast</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5336" data-id="menu-item-5336"><a href="https://shamimminoo.com/podcast/episode-example-buzzsprout/">Episode Example | Buzzsprout</a></li>
		</ul>
</li>
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5332" data-id="menu-item-5332"><a href="#">Podcasts Listing</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5331" data-id="menu-item-5331"><a href="https://shamimminoo.com/podcasts-slider-carrousel/">Podcasts – Slider Carrousel</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5330" data-id="menu-item-5330"><a href="https://shamimminoo.com/podcasts-clickandplay/">Podcasts – Click and Play</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5327" data-id="menu-item-5327"><a href="https://shamimminoo.com/copy-of-podcasts-2-columns/">Podcasts – 2 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5328" data-id="menu-item-5328"><a href="https://shamimminoo.com/podcasts-3-columns/">Podcasts – 3 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5329" data-id="menu-item-5329"><a href="https://shamimminoo.com/podcasts-4-columns/">Podcasts – 4 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5326" data-id="menu-item-5326"><a href="https://shamimminoo.com/podcasts-list/">Podcasts – List</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5324" data-id="menu-item-5324"><a href="https://shamimminoo.com/podcasts-filters/">Podcasts – with Filters</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5325" data-id="menu-item-5325"><a href="https://shamimminoo.com/podcasts-sidebar/">Podcasts – with Sidebar</a></li>
		</ul>
</li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1239" data-id="menu-item-1239"><a href="#">Artists</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2144" data-id="menu-item-2144"><a href="https://shamimminoo.com/artist/indiana/">Artist – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2163" data-id="menu-item-2163"><a href="https://shamimminoo.com/artist/raymayor/">Artist – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2175" data-id="menu-item-2175"><a href="https://shamimminoo.com/artist/ultrasonic/">Artist – Example 3</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242" data-id="menu-item-1242"><a href="https://shamimminoo.com/artists-grid/">Artists – Grid</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744" data-id="menu-item-1744"><a href="https://shamimminoo.com/artists-filters/">Artists – Filters</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1741" data-id="menu-item-1741"><a href="https://shamimminoo.com/artists-parallax/">Artists – Parallax</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735" data-id="menu-item-1735"><a href="https://shamimminoo.com/artists-fullwidth/">Artists – Fullwidth</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2130" data-id="menu-item-2130"><a href="#">Speciality Pages</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61" data-id="menu-item-61"><a href="https://shamimminoo.com/donate/">Donate</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69" data-id="menu-item-69"><a href="https://shamimminoo.com/presskit/">Presskit</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1972" data-id="menu-item-1972"><a href="https://shamimminoo.com/under-construction-coming-soon-page/">Coming Soon Page</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2654" data-id="menu-item-2654"><a href="https://shamimminoo.com/video-landing-page/">Video Landing Page</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-808" data-id="menu-item-808"><a href="https://shamimminoo.com/shop/">Shop</a></li>
</ul>
</li>
</ul></nav>
				<div class="sr-e-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">
			<i class="eicon-menu-bar" aria-hidden="true"></i>
			<span class="elementor-screen-only">Menu</span>
		</div>
		<nav role="navigation" class="sr-e-menu sr-e-mobile sr-menu--vertical sr-e-menu"><ul id="menu-2-319d129c" class=""><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-822" data-id="menu-item-822"><a href="#">Concerts</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58" data-id="menu-item-58"><a href="https://shamimminoo.com/events-list/">Concerts – List</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-847" data-id="menu-item-847"><a href="https://shamimminoo.com/tour-grid/">Concerts – Grid</a></li>
	<li class="no-ajax menu-item menu-item-type-post_type menu-item-object-page menu-item-1542" data-id="menu-item-1542"><a href="https://shamimminoo.com/events-bandsintown/">Concerts – Bandsintown</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1530" data-id="menu-item-1530"><a href="https://shamimminoo.com/all-events/">Concerts &amp; Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-852" data-id="menu-item-852"><a href="https://shamimminoo.com/past-events/">Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-event menu-item-1403" data-id="menu-item-1403"><a href="https://shamimminoo.com/event/shockelm-music-show/">Single Concert</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1342" data-id="menu-item-1342"><a href="#">Discography</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1762" data-id="menu-item-1762"><a href="https://shamimminoo.com/playlist/horizon/">Single Discography – with Header</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-2121" data-id="menu-item-2121"><a href="https://shamimminoo.com/playlist/dust-to-play/">Single Discography – Side Cover</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1760" data-id="menu-item-1760"><a href="https://shamimminoo.com/playlist/soundcloud-album/">Single Discography – SoundCloud</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1761" data-id="menu-item-1761"><a href="https://shamimminoo.com/playlist/spotify-album/">Single Discography – Spotify</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-835" data-id="menu-item-835"><a href="https://shamimminoo.com/music-slider/">Discography – Slider</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2665" data-id="menu-item-2665"><a href="https://shamimminoo.com/music-click-play/">Discography – Click &amp; Play</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1728" data-id="menu-item-1728"><a href="https://shamimminoo.com/music-parallax/">Discography – Parallax</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1238" data-id="menu-item-1238"><a href="https://shamimminoo.com/music-grid/">Discography – Grid</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1236" data-id="menu-item-1236"><a href="https://shamimminoo.com/music-fullwidth/">Discography – Fullwidth</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1727" data-id="menu-item-1727"><a href="https://shamimminoo.com/music-2-columns/">Discography – 2 Columns</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1237" data-id="menu-item-1237"><a href="https://shamimminoo.com/music-filters/">Discography – Filters</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-833" data-id="menu-item-833"><a href="https://shamimminoo.com/music-list/">Discography – List</a></li>
	<li class="no-ajax menu-item menu-item-type-custom menu-item-object-custom menu-item-5630" data-id="menu-item-5630"><a href="https://demo.sonaar.io/extra-templates/music-players-unlimited-styles/">Audio Player with Unlimited Styles</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2425 current-menu-ancestor current-menu-parent current-menu-item current_page_item" data-id="menu-item-2425"><a href="#">About</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1800" data-id="menu-item-1800"><a href="https://shamimminoo.com/about-example-1/">About – Example 1</a></li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5551" data-id="menu-item-5551"><a href="#">Media</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1240" data-id="menu-item-1240"><a href="#">Videos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342" data-id="menu-item-5342"><a href="https://shamimminoo.com/video-youtube-channel/">YouTube Channel</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71" data-id="menu-item-71"><a href="https://shamimminoo.com/videos-list/">Videos – List</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1241" data-id="menu-item-1241"><a href="#">Photos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1678" data-id="menu-item-1678"><a href="https://shamimminoo.com/gallery-instagram/">Gallery – Instagram</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" data-id="menu-item-62"><a href="https://shamimminoo.com/gallery-boxed/">Gallery – Boxed</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" data-id="menu-item-63"><a href="https://shamimminoo.com/gallery-fullwidth/">Gallery – Fullwidth</a></li>
	</ul>
</li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-5610" data-id="menu-item-5610"><a href="https://shamimminoo.com/music-store/">Music Store</a></li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72" data-id="menu-item-72"><a href="#">Pages</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1732" data-id="menu-item-1732"><a href="#">Press</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67" data-id="menu-item-67"><a href="https://shamimminoo.com/news-classic/">Blog – Classic</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" data-id="menu-item-64"><a href="https://shamimminoo.com/news-2-columns/">Blog – 2 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1707" data-id="menu-item-1707"><a href="https://shamimminoo.com/news-3-columns/">Blog – 3 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68" data-id="menu-item-68"><a href="https://shamimminoo.com/news-list/">Blog – List</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3479" data-id="menu-item-3479"><a href="https://shamimminoo.com/we-are-finalist-the-international-music-festival/">Blog Post</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2131" data-id="menu-item-2131"><a href="#">Contact</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859" data-id="menu-item-1859"><a href="https://shamimminoo.com/contact/">Contact – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891" data-id="menu-item-1891"><a href="https://shamimminoo.com/contact-example-2/">Contact – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1911" data-id="menu-item-1911"><a href="https://shamimminoo.com/contact-example-3/">Contact – Example 3</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5334" data-id="menu-item-5334"><a href="#">Podcast</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5333" data-id="menu-item-5333"><a href="#">Episodes</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5341" data-id="menu-item-5341"><a href="https://shamimminoo.com/podcast/episode-example-youtube-video/">Episode Example | Youtube</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5335" data-id="menu-item-5335"><a href="https://shamimminoo.com/podcast/episode-04-everything-you-say-is-great/">Episode Example | MP3</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5339" data-id="menu-item-5339"><a href="https://shamimminoo.com/podcast/episode-example-libsyn/">Episode Example | Libsyn</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5340" data-id="menu-item-5340"><a href="https://shamimminoo.com/podcast/episode-example-soundcloud/">Episode Example | SoundCloud</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5337" data-id="menu-item-5337"><a href="https://shamimminoo.com/podcast/episode-example-stitcher/">Episode Example | Stitcher</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5338" data-id="menu-item-5338"><a href="https://shamimminoo.com/podcast/copy-of-episode-example-libsyn/">Episode Example | Icecast</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5336" data-id="menu-item-5336"><a href="https://shamimminoo.com/podcast/episode-example-buzzsprout/">Episode Example | Buzzsprout</a></li>
		</ul>
</li>
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5332" data-id="menu-item-5332"><a href="#">Podcasts Listing</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5331" data-id="menu-item-5331"><a href="https://shamimminoo.com/podcasts-slider-carrousel/">Podcasts – Slider Carrousel</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5330" data-id="menu-item-5330"><a href="https://shamimminoo.com/podcasts-clickandplay/">Podcasts – Click and Play</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5327" data-id="menu-item-5327"><a href="https://shamimminoo.com/copy-of-podcasts-2-columns/">Podcasts – 2 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5328" data-id="menu-item-5328"><a href="https://shamimminoo.com/podcasts-3-columns/">Podcasts – 3 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5329" data-id="menu-item-5329"><a href="https://shamimminoo.com/podcasts-4-columns/">Podcasts – 4 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5326" data-id="menu-item-5326"><a href="https://shamimminoo.com/podcasts-list/">Podcasts – List</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5324" data-id="menu-item-5324"><a href="https://shamimminoo.com/podcasts-filters/">Podcasts – with Filters</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5325" data-id="menu-item-5325"><a href="https://shamimminoo.com/podcasts-sidebar/">Podcasts – with Sidebar</a></li>
		</ul>
</li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1239" data-id="menu-item-1239"><a href="#">Artists</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2144" data-id="menu-item-2144"><a href="https://shamimminoo.com/artist/indiana/">Artist – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2163" data-id="menu-item-2163"><a href="https://shamimminoo.com/artist/raymayor/">Artist – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2175" data-id="menu-item-2175"><a href="https://shamimminoo.com/artist/ultrasonic/">Artist – Example 3</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242" data-id="menu-item-1242"><a href="https://shamimminoo.com/artists-grid/">Artists – Grid</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744" data-id="menu-item-1744"><a href="https://shamimminoo.com/artists-filters/">Artists – Filters</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1741" data-id="menu-item-1741"><a href="https://shamimminoo.com/artists-parallax/">Artists – Parallax</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735" data-id="menu-item-1735"><a href="https://shamimminoo.com/artists-fullwidth/">Artists – Fullwidth</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2130" data-id="menu-item-2130"><a href="#">Speciality Pages</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61" data-id="menu-item-61"><a href="https://shamimminoo.com/donate/">Donate</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69" data-id="menu-item-69"><a href="https://shamimminoo.com/presskit/">Presskit</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1972" data-id="menu-item-1972"><a href="https://shamimminoo.com/under-construction-coming-soon-page/">Coming Soon Page</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2654" data-id="menu-item-2654"><a href="https://shamimminoo.com/video-landing-page/">Video Landing Page</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-808" data-id="menu-item-808"><a href="https://shamimminoo.com/shop/">Shop</a></li>
</ul>
</li>
</ul></nav>
						</div>
				</div>
				<div class="elementor-element elementor-element-7f1a88a3 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="7f1a88a3" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a href="javascript:IRON.sonaar.player.setPlayer({id:2192})" class="elementor-button elementor-size-sm elementor-animation-bob" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon">
				<i aria-hidden="true" class="fas fa-long-arrow-alt-right"></i>			</span>
									<span class="elementor-button-text">Play Album</span>
					</span>
					</a>
				</div>
								</div>
				</div>
				<div class="elementor-element elementor-element-304e4011 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons animated fadeIn" data-id="304e4011" data-element_type="widget" data-settings="{&quot;_animation_delay&quot;:300,&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="social-icons.default">
				<div class="elementor-widget-container">
							<div class="elementor-social-icons-wrapper elementor-grid" role="list">
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-bob elementor-repeater-item-c874fcb" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Facebook</span>
						<i class="fab fa-facebook"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-bob elementor-repeater-item-0aa7822" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Twitter</span>
						<i class="fab fa-twitter"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-bob elementor-repeater-item-11d929a" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Youtube</span>
						<i class="fab fa-youtube"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-bob elementor-repeater-item-aa8b6f6" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Instagram</span>
						<i class="fab fa-instagram"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-spotify elementor-animation-bob elementor-repeater-item-20507ab" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Spotify</span>
						<i class="fab fa-spotify"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-soundcloud elementor-animation-bob elementor-repeater-item-46460c4" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Soundcloud</span>
						<i class="fab fa-soundcloud"></i>					</a>
				</span>
					</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
		                </div>
            </div><div class="sr-offcanvas-container">
	<div id="overlay"><div class="perspective" style="opacity: 1;"></div></div>
	
	
			<header class="sr-header sr-logo-primary-reveal" style="position: relative; z-index: 99;" data-template="6004"><style>.elementor-6004 .elementor-element.elementor-element-6b6fe9f > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-6004 .elementor-element.elementor-element-6b6fe9f.sr_sticky_showup{background-color:#000000C2;padding:0px 15px 0px 15px;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-6004 .elementor-element.elementor-element-6b6fe9f{box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.21);margin-top:0px;margin-bottom:75px;padding:60px 15px 60px 15px;}.elementor-6004 .elementor-element.elementor-element-07782ec > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute){margin-bottom:0px;}.elementor-6004 .elementor-element.elementor-element-e781eb9{width:var( --container-widget-width, 34.754% );max-width:34.754%;--container-widget-width:34.754%;--container-widget-flex-grow:0;}.elementor-6004 .elementor-element.elementor-element-e781eb9 .sr-site-logo-container, .elementor-6004 .elementor-element.elementor-element-e781eb9 .sr-caption-width figcaption{text-align:center;}.elementor-6004 .elementor-element.elementor-element-e781eb9 .sr-site-logo .sr-site-logo-container img{max-height:25px;width:auto;}.sr_sticky_showup .elementor-element-e781eb9 .sr-site-logo .sr-site-logo-container img{max-height:15px!important;width:auto!important;}.elementor-6004 .elementor-element.elementor-element-e781eb9 .sr-site-logo-set .sr-site-logo-container{background-color:#FFFFFF00;}.elementor-6004 .elementor-element.elementor-element-e781eb9 .sr-site-logo-container .sr-site-logo-img{border-style:none;}.elementor-6004 .elementor-element.elementor-element-e781eb9 .sr-site-logo img{filter:brightness( 200% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );}.elementor-6004 .elementor-element.elementor-element-e781eb9 .widget-image-caption{margin-top:0px;margin-bottom:0px;}.elementor-6004 .elementor-element.elementor-element-9bac7b0{width:var( --container-widget-width, 85.618% );max-width:85.618%;--container-widget-width:85.618%;--container-widget-flex-grow:0;top:38px;text-align:left;line-height:1px;color:var( --e-global-color-35602ec6 );}.elementor-6004 .elementor-element.elementor-element-9bac7b0 > .elementor-widget-container{margin:-0px -0px -0px -0px;padding:0px 0px 0px 0px;}body:not(.rtl) .elementor-6004 .elementor-element.elementor-element-9bac7b0{left:0px;}body.rtl .elementor-6004 .elementor-element.elementor-element-9bac7b0{right:0px;}.elementor-6004 .elementor-element.elementor-element-9bac7b0 p{margin-block-end:0px;}.elementor-6004 .elementor-element.elementor-element-cf0c375.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-6004 .elementor-element.elementor-element-cf0c375 > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute){margin-bottom:0px;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-menu--vertical .menu-item a{text-align:center;}.elementor-6004 .elementor-element.elementor-element-2526655{width:auto;max-width:auto;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-e-menu-toggle{margin:0 auto;}.elementor-6004 .elementor-element.elementor-element-2526655 .menu-item{font-family:"Nunito", Sans-serif;font-size:18px;font-weight:600;letter-spacing:0px;}.elementor-6004 .elementor-element.elementor-element-2526655 .menu-item a{color:#EAEAEA;padding-left:0px;padding-right:0px;padding-top:8px;padding-bottom:8px;}.elementor-6004 .elementor-element.elementor-element-2526655 .menu-item a:hover,
					.elementor-6004 .elementor-element.elementor-element-2526655 .menu-item a:focus,
					.elementor-6004 .elementor-element.elementor-element-2526655 .menu-item a:active{color:#FFFFFF;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--underline a:after, 
					.elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--overline a:before,
					.elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--doubleline a:before, .elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--doubleline a:after{background-color:#8C7956;height:3px;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--underline .current-menu-item a:after, 
					.elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--overline .current-menu-item a:before,
					.elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--doubleline .current-menu-item a:before, .elementor-6004 .elementor-element.elementor-element-2526655 .sr-pointer--doubleline .current-menu-item a:after{background-color:#82594E;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-menu--horizontal ul:not(.sub-menu) > li:not(:last-child){margin-right:30px!important;}.elementor-6004 .elementor-element.elementor-element-2526655 .sub-menu .menu-item a{background-color:#000000;padding-left:10px;padding-right:10px;padding-top:8px;padding-bottom:8px;}.elementor-6004 .elementor-element.elementor-element-2526655 .sub-menu .menu-item:not(.active) a:hover,
					.elementor-6004 .elementor-element.elementor-element-2526655 .sub-menu .menu-item:not(.active) a:focus{color:#FFFFFF;background-color:#1A1F23;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-e-mobile.sr-menu--vertical{background-color:#000000;}.elementor-6004 .elementor-element.elementor-element-bf1cfea.elementor-column > .elementor-widget-wrap{justify-content:flex-end;}.elementor-6004 .elementor-element.elementor-element-bf1cfea > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute){margin-bottom:0px;}.elementor-6004 .elementor-element.elementor-element-7992aa8{--grid-template-columns:repeat(0, auto);width:auto;max-width:auto;--icon-size:18px;--grid-column-gap:0px;--grid-row-gap:0px;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-widget-container{text-align:right;}.elementor-6004 .elementor-element.elementor-element-7992aa8 > .elementor-widget-container{margin:0px 10px 0px 0px;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-social-icon{background-color:#02010100;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-social-icon i{color:#FFFFFF;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-social-icon svg{fill:#FFFFFF;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-social-icon:hover i{color:#8C7956;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-social-icon:hover svg{fill:#8C7956;}.elementor-6004 .elementor-element.elementor-element-46046f1 .elementor-button{background-color:#8C7956;font-family:"Inter", Sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;line-height:1em;letter-spacing:0px;fill:#000000;color:#000000;border-radius:0px 0px 0px 0px;padding:15px 20px 12px 20px;}.elementor-6004 .elementor-element.elementor-element-46046f1 .elementor-button:hover, .elementor-6004 .elementor-element.elementor-element-46046f1 .elementor-button:focus{background-color:#AA894D;color:#000000;border-color:#FFFFFF;}.elementor-6004 .elementor-element.elementor-element-46046f1{width:auto;max-width:auto;align-self:center;}.elementor-6004 .elementor-element.elementor-element-46046f1 .elementor-button-content-wrapper{flex-direction:row-reverse;}.elementor-6004 .elementor-element.elementor-element-46046f1 .elementor-button:hover svg, .elementor-6004 .elementor-element.elementor-element-46046f1 .elementor-button:focus svg{fill:#000000;}.elementor-6004 .elementor-element.elementor-element-a91f6e0 > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-6004 .elementor-element.elementor-element-a91f6e0.sr_sticky_showup{background-color:#000000C2;padding:0px 60px 0px 60px;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-6004 .elementor-element.elementor-element-a91f6e0{box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.21);margin-top:0px;margin-bottom:75px;padding:60px 60px 60px 60px;}.elementor-6004 .elementor-element.elementor-element-306b4a2 .sr-site-logo-container, .elementor-6004 .elementor-element.elementor-element-306b4a2 .sr-caption-width figcaption{text-align:left;}.elementor-6004 .elementor-element.elementor-element-306b4a2 .sr-site-logo .sr-site-logo-container img{max-height:25px;width:auto;}.sr_sticky_showup .elementor-element-306b4a2 .sr-site-logo .sr-site-logo-container img{max-height:15px!important;width:auto!important;}.elementor-6004 .elementor-element.elementor-element-306b4a2 .sr-site-logo-container .sr-site-logo-img{border-style:none;}.elementor-6004 .elementor-element.elementor-element-306b4a2 .widget-image-caption{margin-top:0px;margin-bottom:0px;}.elementor-6004 .elementor-element.elementor-element-4d2a92c{width:var( --container-widget-width, 85.618% );max-width:85.618%;--container-widget-width:85.618%;--container-widget-flex-grow:0;top:66px;text-align:left;line-height:1px;text-shadow:0px 0px 10px rgba(0,0,0,0.3);color:var( --e-global-color-35602ec6 );}.elementor-6004 .elementor-element.elementor-element-4d2a92c > .elementor-widget-container{margin:-0px -0px -0px -0px;padding:0px 0px 0px 0px;}body:not(.rtl) .elementor-6004 .elementor-element.elementor-element-4d2a92c{left:0px;}body.rtl .elementor-6004 .elementor-element.elementor-element-4d2a92c{right:0px;}.elementor-6004 .elementor-element.elementor-element-4d2a92c p{margin-block-end:0px;}.elementor-6004 .elementor-element.elementor-element-80320c7.elementor-column > .elementor-widget-wrap{justify-content:flex-end;}.elementor-6004 .elementor-element.elementor-element-80320c7 > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute){margin-bottom:0px;}body .sr-offcanvas-content-576153f{background-color:#000000;}.elementor-6004 .elementor-element.elementor-element-576153f .sr-offcanvas-toggle{direction:rtl;background-color:#00000000;color:#EAEAEA;}.elementor-6004 .elementor-element.elementor-element-576153f{width:auto;max-width:auto;}.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible:after,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible{transform:translateX(450px);}.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable),
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable){transform:translate3d(450px, 94px, 0);}.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible:after,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible{transform:translateX(-450px);}.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable),
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable){transform:translate3d(-450px, 94px, 0);}.sr-offcanvas-content-576153f{width:450px;}.elementor-6004 .elementor-element.elementor-element-576153f .sr-offcanvas-toggle-wrap{text-align:left;}.elementor-6004 .elementor-element.elementor-element-576153f .sr-offcanvas-toggle-wrap .sr-offcanvas-toggle-icon{font-size:28px;}.elementor-6004 .elementor-element.elementor-element-576153f .sr-offcanvas-toggle svg{fill:#EAEAEA;}.sr-offcanvas-close-576153f{color:#FFFFFF;}.sr-offcanvas-close-576153f svg{fill:#FFFFFF;}.sr-offcanvas-content-576153f .sr-offcanvas-close-576153f, .sr-offcanvas-content-576153f .sr-offcanvas-close-576153f .elementor-icon{font-size:60px;}.sr-offcanvas-content-576153f .sr-offcanvas-close-576153f{top:40px;}@media(max-width:1024px){.elementor-6004 .elementor-element.elementor-element-6b6fe9f{margin-top:0px;margin-bottom:65px;padding:30px 15px 30px 15px;}.elementor-6004 .elementor-element.elementor-element-6b6fe9f.sr_sticky_showup{padding:0px 15px 0px 15px;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-widget-container{text-align:center;}.elementor-6004 .elementor-element.elementor-element-a91f6e0{margin-top:0px;margin-bottom:65px;padding:30px 15px 30px 15px;}.elementor-6004 .elementor-element.elementor-element-a91f6e0.sr_sticky_showup{padding:0px 15px 0px 15px;}}@media(max-width:767px){.elementor-6004 .elementor-element.elementor-element-6b6fe9f{margin-top:0px;margin-bottom:0px;padding:30px 15px 30px 15px;}.elementor-6004 .elementor-element.elementor-element-6b6fe9f.sr_sticky_showup{padding:0px 15px 0px 15px;}.elementor-6004 .elementor-element.elementor-element-07782ec{width:40%;}.elementor-6004 .elementor-element.elementor-element-cf0c375{width:15%;}.elementor-6004 .elementor-element.elementor-element-2526655 .sr-menu--vertical .menu-item a{text-align:center;}.elementor-6004 .elementor-element.elementor-element-bf1cfea{width:45%;}.elementor-6004 .elementor-element.elementor-element-7992aa8 > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-6004 .elementor-element.elementor-element-7992aa8{--icon-size:16px;--grid-column-gap:0px;}.elementor-6004 .elementor-element.elementor-element-7992aa8 .elementor-social-icon{--icon-padding:0.3em;}.elementor-6004 .elementor-element.elementor-element-a91f6e0{margin-top:0px;margin-bottom:0px;padding:30px 15px 30px 15px;}.elementor-6004 .elementor-element.elementor-element-a91f6e0.sr_sticky_showup{padding:0px 15px 0px 15px;}.elementor-6004 .elementor-element.elementor-element-8cdbe24{width:70%;}.elementor-6004 .elementor-element.elementor-element-306b4a2{width:var( --container-widget-width, 59px );max-width:59px;--container-widget-width:59px;--container-widget-flex-grow:0;}.elementor-6004 .elementor-element.elementor-element-306b4a2 .sr-site-logo-container, .elementor-6004 .elementor-element.elementor-element-306b4a2 .sr-caption-width figcaption{text-align:center;}.sr_sticky_showup .elementor-element-306b4a2 .sr-site-logo .sr-site-logo-container img{max-height:16px!important;width:auto!important;}body:not(.rtl) .elementor-6004 .elementor-element.elementor-element-4d2a92c{left:4px;}body.rtl .elementor-6004 .elementor-element.elementor-element-4d2a92c{right:4px;}.elementor-6004 .elementor-element.elementor-element-4d2a92c{top:32px;font-size:11px;}.elementor-6004 .elementor-element.elementor-element-80320c7{width:30%;}.elementor-6004 .elementor-element.elementor-element-576153f > .elementor-widget-container{margin:0px -23px 0px 0px;}.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible:after,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible{transform:translateX(100%);}.sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable),
                    .sr-offcanvas-content-open.sr-offcanvas-content-left[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable){transform:translate3d(100%, 94px, 0);}.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible:after,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible>header .sr-sticky,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player.enable,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #overlay, 
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #pusher,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible,
                    .elementor-html .block-template.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible{transform:translateX(-100%);}.sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="push"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable),
                    .sr-offcanvas-content-open.sr-offcanvas-content-right[sr-oc-transition="reveal"] .sr-offcanvas-container.sr-offcanvas-content-visible #sonaar-player.srt_sticky-player:not(.enable){transform:translate3d(-100%, 94px, 0);}.sr-offcanvas-content-576153f{width:100%;}}@media(min-width:768px){.elementor-6004 .elementor-element.elementor-element-07782ec{width:21%;}.elementor-6004 .elementor-element.elementor-element-cf0c375{width:57.664%;}.elementor-6004 .elementor-element.elementor-element-bf1cfea{width:21%;}.elementor-6004 .elementor-element.elementor-element-8cdbe24{width:19%;}.elementor-6004 .elementor-element.elementor-element-80320c7{width:81%;}}@media(max-width:1024px) and (min-width:768px){.elementor-6004 .elementor-element.elementor-element-07782ec{width:40%;}.elementor-6004 .elementor-element.elementor-element-cf0c375{width:20%;}.elementor-6004 .elementor-element.elementor-element-bf1cfea{width:40%;}.elementor-6004 .elementor-element.elementor-element-8cdbe24{width:30%;}.elementor-6004 .elementor-element.elementor-element-80320c7{width:70%;}}</style>		<div data-elementor-type="wp-post" data-elementor-id="6004" class="elementor elementor-6004">
						<span class="sr_sticky_wrap" style="display: block; height: 0px;"><div class="sr_toggleSticky"></div><section class="elementor-section elementor-top-section elementor-element elementor-element-6b6fe9f elementor-section-content-middle elementor-hidden-tablet elementor-hidden-phone elementor-section-full_width elementor-section-height-default elementor-section-height-default sr-sticky-anim-enable sr-sticky sr_hideOnScroll sr_sticky_showup" data-id="6b6fe9f" data-element_type="section" data-settings="{&quot;sr_hide_after&quot;:75,&quot;sr_sticky&quot;:&quot;top&quot;,&quot;sr_sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sr_sticky_offset&quot;:0}" data-margin-top="0" data-margin-offset="0" data-sticky-wrap="true" style="position: fixed; top: 0px; left: 0px;">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-07782ec" data-id="07782ec" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-e781eb9 elementor-widget__width-initial elementor-widget elementor-widget-sr-sitelogo" data-id="e781eb9" data-element_type="widget" data-widget_type="sr-sitelogo.default">
				<div class="elementor-widget-container">
							<div class="sr-site-logo">
							<a class="" href="https://shamimminoo.com">
				
			<div class="sr-site-logo-set">           
				<div class="sr-site-logo-container">
					<img class="sr-site-logo-img sr-logo-primary elementor-animation-" src="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y-478x559.jpg" alt="">
											
				</div>
			</div>
							</a>
						</div>  
							</div>
				</div>
				<div class="elementor-element elementor-element-9bac7b0 elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-text-editor" data-id="9bac7b0" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Shamim Minoo</p>								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-cf0c375" data-id="cf0c375" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2526655 sr-e-menu__align-center sr-e-menu--stretch elementor-widget__width-auto sr-e-menu__align-center sr-e-menu--anim-enable sr-e-menu--dropdown-tablet sr-e-menu--toggle sr-e-menu-toggle--burger elementor-widget elementor-widget-sr-e-menu" data-id="2526655" data-element_type="widget" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;merge_menu&quot;:&quot;1&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="sr-e-menu.default">
				<div class="elementor-widget-container">
							<nav role="navigation" class="sr-pointer--underline sr-e-desktop sr-e-menu sr-menu--horizontal" pointer-animation="move-in"><ul id="menu-2-2526655" class=""><li id="menu-item-822" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-822" data-id="menu-item-822" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-list/">Concerts</a>
<ul class="sub-menu">
	<li id="menu-item-58" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58" data-id="menu-item-58" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-list/">Concerts – List</a></li>
	<li id="menu-item-847" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-847" data-id="menu-item-847" style="pointer-events: auto;"><a href="https://shamimminoo.com/tour-grid/">Concerts – Grid</a></li>
	<li id="menu-item-1542" class="no-ajax menu-item menu-item-type-post_type menu-item-object-page menu-item-1542" data-id="menu-item-1542" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-bandsintown/">Concerts – Bandsintown</a></li>
	<li id="menu-item-1530" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1530" data-id="menu-item-1530" style="pointer-events: auto;"><a href="https://shamimminoo.com/all-events/">Concerts &amp; Past Concerts</a></li>
	<li id="menu-item-852" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-852" data-id="menu-item-852" style="pointer-events: auto;"><a href="https://shamimminoo.com/past-events/">Past Concerts</a></li>
	<li id="menu-item-1403" class="menu-item menu-item-type-post_type menu-item-object-event menu-item-1403" data-id="menu-item-1403" style="pointer-events: auto;"><a href="https://shamimminoo.com/event/shockelm-music-show/">Single Concert</a></li>
</ul>
</li>
<li id="menu-item-1342" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1342" data-id="menu-item-1342" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-grid/">Discography</a>
<ul class="sub-menu">
	<li id="menu-item-1762" class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1762" data-id="menu-item-1762" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/horizon/">Single Discography – with Header</a></li>
	<li id="menu-item-2121" class="menu-item menu-item-type-post_type menu-item-object-album menu-item-2121" data-id="menu-item-2121" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/dust-to-play/">Single Discography – Side Cover</a></li>
	<li id="menu-item-1760" class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1760" data-id="menu-item-1760" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/soundcloud-album/">Single Discography – SoundCloud</a></li>
	<li id="menu-item-1761" class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1761" data-id="menu-item-1761" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/spotify-album/">Single Discography – Spotify</a></li>
	<li id="menu-item-835" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-835" data-id="menu-item-835" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-slider/">Discography – Slider</a></li>
	<li id="menu-item-2665" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2665" data-id="menu-item-2665" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-click-play/">Discography – Click &amp; Play</a></li>
	<li id="menu-item-1728" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1728" data-id="menu-item-1728" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-parallax/">Discography – Parallax</a></li>
	<li id="menu-item-1238" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1238" data-id="menu-item-1238" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-grid/">Discography – Grid</a></li>
	<li id="menu-item-1236" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1236" data-id="menu-item-1236" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-fullwidth/">Discography – Fullwidth</a></li>
	<li id="menu-item-1727" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1727" data-id="menu-item-1727" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-2-columns/">Discography – 2 Columns</a></li>
	<li id="menu-item-1237" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1237" data-id="menu-item-1237" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-filters/">Discography – Filters</a></li>
	<li id="menu-item-833" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-833" data-id="menu-item-833" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-list/">Discography – List</a></li>
	<li id="menu-item-5630" class="no-ajax menu-item menu-item-type-custom menu-item-object-custom menu-item-5630" data-id="menu-item-5630" style="pointer-events: auto;"><a href="https://demo.sonaar.io/extra-templates/music-players-unlimited-styles/">Audio Player with Unlimited Styles</a></li>
</ul>
</li>
<li id="menu-item-2425" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2425 current-menu-ancestor current-menu-parent current-menu-item current_page_item" data-id="menu-item-2425" style="pointer-events: auto;"><a href="https://shamimminoo.com/about-example-1/">About</a>
<ul class="sub-menu">
	<li id="menu-item-1800" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1800" data-id="menu-item-1800" style="pointer-events: auto;"><a href="https://shamimminoo.com/about-example-1/">About – Example 1</a></li>
</ul>
</li>
<li id="menu-item-5551" class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5551" data-id="menu-item-5551" style="pointer-events: auto;"><a href="#">Media</a>
<ul class="sub-menu">
	<li id="menu-item-1240" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1240" data-id="menu-item-1240" style="pointer-events: auto;"><a href="#">Videos</a>
	<ul class="sub-menu">
		<li id="menu-item-5342" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342" data-id="menu-item-5342" style="pointer-events: auto;"><a href="https://shamimminoo.com/video-youtube-channel/">YouTube Channel</a></li>
		<li id="menu-item-71" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71" data-id="menu-item-71" style="pointer-events: auto;"><a href="https://shamimminoo.com/videos-list/">Videos – List</a></li>
	</ul>
</li>
	<li id="menu-item-1241" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1241" data-id="menu-item-1241" style="pointer-events: auto;"><a href="#">Photos</a>
	<ul class="sub-menu">
		<li id="menu-item-1678" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1678" data-id="menu-item-1678" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-instagram/">Gallery – Instagram</a></li>
		<li id="menu-item-62" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" data-id="menu-item-62" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-boxed/">Gallery – Boxed</a></li>
		<li id="menu-item-63" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" data-id="menu-item-63" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-fullwidth/">Gallery – Fullwidth</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-5610" class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-5610" data-id="menu-item-5610" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-store/">Music Store</a></li>
<li id="menu-item-72" class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72" data-id="menu-item-72" style="pointer-events: auto;"><a href="#">Pages</a>
<ul class="sub-menu">
	<li id="menu-item-1732" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1732" data-id="menu-item-1732" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-2-columns/">Press</a>
	<ul class="sub-menu">
		<li id="menu-item-67" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67" data-id="menu-item-67" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-classic/">Blog – Classic</a></li>
		<li id="menu-item-64" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" data-id="menu-item-64" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-2-columns/">Blog – 2 Columns</a></li>
		<li id="menu-item-1707" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1707" data-id="menu-item-1707" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-3-columns/">Blog – 3 Columns</a></li>
		<li id="menu-item-68" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68" data-id="menu-item-68" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-list/">Blog – List</a></li>
		<li id="menu-item-3479" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3479" data-id="menu-item-3479" style="pointer-events: auto;"><a href="https://shamimminoo.com/we-are-finalist-the-international-music-festival/">Blog Post</a></li>
	</ul>
</li>
	<li id="menu-item-2131" class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2131" data-id="menu-item-2131" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-3/">Contact</a>
	<ul class="sub-menu">
		<li id="menu-item-1859" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859" data-id="menu-item-1859" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact/">Contact – Example 1</a></li>
		<li id="menu-item-1891" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891" data-id="menu-item-1891" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-2/">Contact – Example 2</a></li>
		<li id="menu-item-1911" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1911" data-id="menu-item-1911" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-3/">Contact – Example 3</a></li>
	</ul>
</li>
	<li id="menu-item-5334" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5334" data-id="menu-item-5334" style="pointer-events: auto;"><a href="#">Podcast</a>
	<ul class="sub-menu">
		<li id="menu-item-5333" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5333" data-id="menu-item-5333" style="pointer-events: auto;"><a href="#">Episodes</a>
		<ul class="sub-menu">
			<li id="menu-item-5341" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5341" data-id="menu-item-5341" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-youtube-video/">Episode Example | Youtube</a></li>
			<li id="menu-item-5335" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5335" data-id="menu-item-5335" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-04-everything-you-say-is-great/">Episode Example | MP3</a></li>
			<li id="menu-item-5339" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5339" data-id="menu-item-5339" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-libsyn/">Episode Example | Libsyn</a></li>
			<li id="menu-item-5340" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5340" data-id="menu-item-5340" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-soundcloud/">Episode Example | SoundCloud</a></li>
			<li id="menu-item-5337" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5337" data-id="menu-item-5337" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-stitcher/">Episode Example | Stitcher</a></li>
			<li id="menu-item-5338" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5338" data-id="menu-item-5338" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/copy-of-episode-example-libsyn/">Episode Example | Icecast</a></li>
			<li id="menu-item-5336" class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5336" data-id="menu-item-5336" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-buzzsprout/">Episode Example | Buzzsprout</a></li>
		</ul>
</li>
		<li id="menu-item-5332" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5332" data-id="menu-item-5332" style="pointer-events: auto;"><a href="#">Podcasts Listing</a>
		<ul class="sub-menu">
			<li id="menu-item-5331" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5331" data-id="menu-item-5331" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-slider-carrousel/">Podcasts – Slider Carrousel</a></li>
			<li id="menu-item-5330" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5330" data-id="menu-item-5330" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-clickandplay/">Podcasts – Click and Play</a></li>
			<li id="menu-item-5327" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5327" data-id="menu-item-5327" style="pointer-events: auto;"><a href="https://shamimminoo.com/copy-of-podcasts-2-columns/">Podcasts – 2 Columns</a></li>
			<li id="menu-item-5328" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5328" data-id="menu-item-5328" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-3-columns/">Podcasts – 3 Columns</a></li>
			<li id="menu-item-5329" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5329" data-id="menu-item-5329" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-4-columns/">Podcasts – 4 Columns</a></li>
			<li id="menu-item-5326" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5326" data-id="menu-item-5326" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-list/">Podcasts – List</a></li>
			<li id="menu-item-5324" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5324" data-id="menu-item-5324" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-filters/">Podcasts – with Filters</a></li>
			<li id="menu-item-5325" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5325" data-id="menu-item-5325" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-sidebar/">Podcasts – with Sidebar</a></li>
		</ul>
</li>
	</ul>
</li>
	<li id="menu-item-1239" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1239" data-id="menu-item-1239" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-grid/">Artists</a>
	<ul class="sub-menu">
		<li id="menu-item-2144" class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2144" data-id="menu-item-2144" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/indiana/">Artist – Example 1</a></li>
		<li id="menu-item-2163" class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2163" data-id="menu-item-2163" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/raymayor/">Artist – Example 2</a></li>
		<li id="menu-item-2175" class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2175" data-id="menu-item-2175" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/ultrasonic/">Artist – Example 3</a></li>
		<li id="menu-item-1242" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242" data-id="menu-item-1242" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-grid/">Artists – Grid</a></li>
		<li id="menu-item-1744" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744" data-id="menu-item-1744" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-filters/">Artists – Filters</a></li>
		<li id="menu-item-1741" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1741" data-id="menu-item-1741" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-parallax/">Artists – Parallax</a></li>
		<li id="menu-item-1735" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735" data-id="menu-item-1735" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-fullwidth/">Artists – Fullwidth</a></li>
	</ul>
</li>
	<li id="menu-item-2130" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2130" data-id="menu-item-2130" style="pointer-events: auto;"><a href="#">Speciality Pages</a>
	<ul class="sub-menu">
		<li id="menu-item-61" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61" data-id="menu-item-61" style="pointer-events: auto;"><a href="https://shamimminoo.com/donate/">Donate</a></li>
		<li id="menu-item-69" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69" data-id="menu-item-69" style="pointer-events: auto;"><a href="https://shamimminoo.com/presskit/">Presskit</a></li>
		<li id="menu-item-1972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1972" data-id="menu-item-1972" style="pointer-events: auto;"><a href="https://shamimminoo.com/under-construction-coming-soon-page/">Coming Soon Page</a></li>
		<li id="menu-item-2654" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2654" data-id="menu-item-2654" style="pointer-events: auto;"><a href="https://shamimminoo.com/video-landing-page/">Video Landing Page</a></li>
	</ul>
</li>
	<li id="menu-item-808" class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-808" data-id="menu-item-808" style="pointer-events: auto;"><a href="https://shamimminoo.com/shop/">Shop</a></li>
</ul>
</li>
</ul></nav>
				<div class="sr-e-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">
			<i class="eicon-menu-bar" aria-hidden="true"></i>
			<span class="elementor-screen-only">Menu</span>
		</div>
		<nav role="navigation" class="sr-pointer--underline sr-e-menu sr-e-mobile sr-menu--vertical sr-e-menu" pointer-animation="move-in" style="left: 0px; top: 45px;"><ul><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-822" data-id="menu-item-822" style="pointer-events: auto;"><a href="#">Concerts</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58" data-id="menu-item-58" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-list/">Concerts – List</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-847" data-id="menu-item-847" style="pointer-events: auto;"><a href="https://shamimminoo.com/tour-grid/">Concerts – Grid</a></li>
	<li class="no-ajax menu-item menu-item-type-post_type menu-item-object-page menu-item-1542" data-id="menu-item-1542" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-bandsintown/">Concerts – Bandsintown</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1530" data-id="menu-item-1530" style="pointer-events: auto;"><a href="https://shamimminoo.com/all-events/">Concerts &amp; Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-852" data-id="menu-item-852" style="pointer-events: auto;"><a href="https://shamimminoo.com/past-events/">Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-event menu-item-1403" data-id="menu-item-1403" style="pointer-events: auto;"><a href="https://shamimminoo.com/event/shockelm-music-show/">Single Concert</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1342" data-id="menu-item-1342" style="pointer-events: auto;"><a href="#">Discography</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1762" data-id="menu-item-1762" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/horizon/">Single Discography – with Header</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-2121" data-id="menu-item-2121" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/dust-to-play/">Single Discography – Side Cover</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1760" data-id="menu-item-1760" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/soundcloud-album/">Single Discography – SoundCloud</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1761" data-id="menu-item-1761" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/spotify-album/">Single Discography – Spotify</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-835" data-id="menu-item-835" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-slider/">Discography – Slider</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2665" data-id="menu-item-2665" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-click-play/">Discography – Click &amp; Play</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1728" data-id="menu-item-1728" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-parallax/">Discography – Parallax</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1238" data-id="menu-item-1238" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-grid/">Discography – Grid</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1236" data-id="menu-item-1236" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-fullwidth/">Discography – Fullwidth</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1727" data-id="menu-item-1727" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-2-columns/">Discography – 2 Columns</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1237" data-id="menu-item-1237" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-filters/">Discography – Filters</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-833" data-id="menu-item-833" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-list/">Discography – List</a></li>
	<li class="no-ajax menu-item menu-item-type-custom menu-item-object-custom menu-item-5630" data-id="menu-item-5630" style="pointer-events: auto;"><a href="https://demo.sonaar.io/extra-templates/music-players-unlimited-styles/">Audio Player with Unlimited Styles</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2425 current-menu-ancestor current-menu-parent current-menu-item current_page_item" data-id="menu-item-2425" style="pointer-events: auto;"><a href="#">About</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1800" data-id="menu-item-1800" style="pointer-events: auto;"><a href="https://shamimminoo.com/about-example-1/">About – Example 1</a></li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5551" data-id="menu-item-5551" style="pointer-events: auto;"><a href="#">Media</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1240" data-id="menu-item-1240" style="pointer-events: auto;"><a href="#">Videos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342" data-id="menu-item-5342" style="pointer-events: auto;"><a href="https://shamimminoo.com/video-youtube-channel/">YouTube Channel</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71" data-id="menu-item-71" style="pointer-events: auto;"><a href="https://shamimminoo.com/videos-list/">Videos – List</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1241" data-id="menu-item-1241" style="pointer-events: auto;"><a href="#">Photos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1678" data-id="menu-item-1678" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-instagram/">Gallery – Instagram</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" data-id="menu-item-62" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-boxed/">Gallery – Boxed</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" data-id="menu-item-63" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-fullwidth/">Gallery – Fullwidth</a></li>
	</ul>
</li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-5610" data-id="menu-item-5610" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-store/">Music Store</a></li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72" data-id="menu-item-72" style="pointer-events: auto;"><a href="#">Pages</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1732" data-id="menu-item-1732" style="pointer-events: auto;"><a href="#">Press</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67" data-id="menu-item-67" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-classic/">Blog – Classic</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" data-id="menu-item-64" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-2-columns/">Blog – 2 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1707" data-id="menu-item-1707" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-3-columns/">Blog – 3 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68" data-id="menu-item-68" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-list/">Blog – List</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3479" data-id="menu-item-3479" style="pointer-events: auto;"><a href="https://shamimminoo.com/we-are-finalist-the-international-music-festival/">Blog Post</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2131" data-id="menu-item-2131" style="pointer-events: auto;"><a href="#">Contact</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859" data-id="menu-item-1859" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact/">Contact – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891" data-id="menu-item-1891" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-2/">Contact – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1911" data-id="menu-item-1911" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-3/">Contact – Example 3</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5334" data-id="menu-item-5334" style="pointer-events: auto;"><a href="#">Podcast</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5333" data-id="menu-item-5333" style="pointer-events: auto;"><a href="#">Episodes</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5341" data-id="menu-item-5341" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-youtube-video/">Episode Example | Youtube</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5335" data-id="menu-item-5335" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-04-everything-you-say-is-great/">Episode Example | MP3</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5339" data-id="menu-item-5339" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-libsyn/">Episode Example | Libsyn</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5340" data-id="menu-item-5340" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-soundcloud/">Episode Example | SoundCloud</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5337" data-id="menu-item-5337" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-stitcher/">Episode Example | Stitcher</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5338" data-id="menu-item-5338" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/copy-of-episode-example-libsyn/">Episode Example | Icecast</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5336" data-id="menu-item-5336" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-buzzsprout/">Episode Example | Buzzsprout</a></li>
		</ul>
</li>
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5332" data-id="menu-item-5332" style="pointer-events: auto;"><a href="#">Podcasts Listing</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5331" data-id="menu-item-5331" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-slider-carrousel/">Podcasts – Slider Carrousel</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5330" data-id="menu-item-5330" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-clickandplay/">Podcasts – Click and Play</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5327" data-id="menu-item-5327" style="pointer-events: auto;"><a href="https://shamimminoo.com/copy-of-podcasts-2-columns/">Podcasts – 2 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5328" data-id="menu-item-5328" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-3-columns/">Podcasts – 3 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5329" data-id="menu-item-5329" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-4-columns/">Podcasts – 4 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5326" data-id="menu-item-5326" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-list/">Podcasts – List</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5324" data-id="menu-item-5324" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-filters/">Podcasts – with Filters</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5325" data-id="menu-item-5325" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-sidebar/">Podcasts – with Sidebar</a></li>
		</ul>
</li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1239" data-id="menu-item-1239" style="pointer-events: auto;"><a href="#">Artists</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2144" data-id="menu-item-2144" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/indiana/">Artist – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2163" data-id="menu-item-2163" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/raymayor/">Artist – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2175" data-id="menu-item-2175" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/ultrasonic/">Artist – Example 3</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242" data-id="menu-item-1242" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-grid/">Artists – Grid</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744" data-id="menu-item-1744" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-filters/">Artists – Filters</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1741" data-id="menu-item-1741" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-parallax/">Artists – Parallax</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735" data-id="menu-item-1735" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-fullwidth/">Artists – Fullwidth</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2130" data-id="menu-item-2130" style="pointer-events: auto;"><a href="#">Speciality Pages</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61" data-id="menu-item-61" style="pointer-events: auto;"><a href="https://shamimminoo.com/donate/">Donate</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69" data-id="menu-item-69" style="pointer-events: auto;"><a href="https://shamimminoo.com/presskit/">Presskit</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1972" data-id="menu-item-1972" style="pointer-events: auto;"><a href="https://shamimminoo.com/under-construction-coming-soon-page/">Coming Soon Page</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2654" data-id="menu-item-2654" style="pointer-events: auto;"><a href="https://shamimminoo.com/video-landing-page/">Video Landing Page</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-808" data-id="menu-item-808" style="pointer-events: auto;"><a href="https://shamimminoo.com/shop/">Shop</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-822" data-id="menu-item-822" style="pointer-events: auto;"><a href="#">Concerts</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58" data-id="menu-item-58" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-list/">Concerts – List</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-847" data-id="menu-item-847" style="pointer-events: auto;"><a href="https://shamimminoo.com/tour-grid/">Concerts – Grid</a></li>
	<li class="no-ajax menu-item menu-item-type-post_type menu-item-object-page menu-item-1542" data-id="menu-item-1542" style="pointer-events: auto;"><a href="https://shamimminoo.com/events-bandsintown/">Concerts – Bandsintown</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1530" data-id="menu-item-1530" style="pointer-events: auto;"><a href="https://shamimminoo.com/all-events/">Concerts &amp; Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-852" data-id="menu-item-852" style="pointer-events: auto;"><a href="https://shamimminoo.com/past-events/">Past Concerts</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-event menu-item-1403" data-id="menu-item-1403" style="pointer-events: auto;"><a href="https://shamimminoo.com/event/shockelm-music-show/">Single Concert</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1342" data-id="menu-item-1342" style="pointer-events: auto;"><a href="#">Discography</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1762" data-id="menu-item-1762" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/horizon/">Single Discography – with Header</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-2121" data-id="menu-item-2121" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/dust-to-play/">Single Discography – Side Cover</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1760" data-id="menu-item-1760" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/soundcloud-album/">Single Discography – SoundCloud</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-album menu-item-1761" data-id="menu-item-1761" style="pointer-events: auto;"><a href="https://shamimminoo.com/playlist/spotify-album/">Single Discography – Spotify</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-835" data-id="menu-item-835" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-slider/">Discography – Slider</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2665" data-id="menu-item-2665" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-click-play/">Discography – Click &amp; Play</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1728" data-id="menu-item-1728" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-parallax/">Discography – Parallax</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1238" data-id="menu-item-1238" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-grid/">Discography – Grid</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1236" data-id="menu-item-1236" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-fullwidth/">Discography – Fullwidth</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1727" data-id="menu-item-1727" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-2-columns/">Discography – 2 Columns</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1237" data-id="menu-item-1237" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-filters/">Discography – Filters</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-833" data-id="menu-item-833" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-list/">Discography – List</a></li>
	<li class="no-ajax menu-item menu-item-type-custom menu-item-object-custom menu-item-5630" data-id="menu-item-5630" style="pointer-events: auto;"><a href="https://demo.sonaar.io/extra-templates/music-players-unlimited-styles/">Audio Player with Unlimited Styles</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2425 current-menu-ancestor current-menu-parent current-menu-item current_page_item" data-id="menu-item-2425" style="pointer-events: auto;"><a href="#">About</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1800" data-id="menu-item-1800" style="pointer-events: auto;"><a href="https://shamimminoo.com/about-example-1/">About – Example 1</a></li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5551" data-id="menu-item-5551" style="pointer-events: auto;"><a href="#">Media</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1240" data-id="menu-item-1240" style="pointer-events: auto;"><a href="#">Videos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342" data-id="menu-item-5342" style="pointer-events: auto;"><a href="https://shamimminoo.com/video-youtube-channel/">YouTube Channel</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71" data-id="menu-item-71" style="pointer-events: auto;"><a href="https://shamimminoo.com/videos-list/">Videos – List</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1241" data-id="menu-item-1241" style="pointer-events: auto;"><a href="#">Photos</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1678" data-id="menu-item-1678" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-instagram/">Gallery – Instagram</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" data-id="menu-item-62" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-boxed/">Gallery – Boxed</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" data-id="menu-item-63" style="pointer-events: auto;"><a href="https://shamimminoo.com/gallery-fullwidth/">Gallery – Fullwidth</a></li>
	</ul>
</li>
</ul>
</li>
<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-5610" data-id="menu-item-5610" style="pointer-events: auto;"><a href="https://shamimminoo.com/music-store/">Music Store</a></li>
<li class="menu_small_item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72" data-id="menu-item-72" style="pointer-events: auto;"><a href="#">Pages</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1732" data-id="menu-item-1732" style="pointer-events: auto;"><a href="#">Press</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67" data-id="menu-item-67" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-classic/">Blog – Classic</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" data-id="menu-item-64" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-2-columns/">Blog – 2 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1707" data-id="menu-item-1707" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-3-columns/">Blog – 3 Columns</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68" data-id="menu-item-68" style="pointer-events: auto;"><a href="https://shamimminoo.com/news-list/">Blog – List</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3479" data-id="menu-item-3479" style="pointer-events: auto;"><a href="https://shamimminoo.com/we-are-finalist-the-international-music-festival/">Blog Post</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2131" data-id="menu-item-2131" style="pointer-events: auto;"><a href="#">Contact</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859" data-id="menu-item-1859" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact/">Contact – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891" data-id="menu-item-1891" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-2/">Contact – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1911" data-id="menu-item-1911" style="pointer-events: auto;"><a href="https://shamimminoo.com/contact-example-3/">Contact – Example 3</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5334" data-id="menu-item-5334" style="pointer-events: auto;"><a href="#">Podcast</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5333" data-id="menu-item-5333" style="pointer-events: auto;"><a href="#">Episodes</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5341" data-id="menu-item-5341" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-youtube-video/">Episode Example | Youtube</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5335" data-id="menu-item-5335" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-04-everything-you-say-is-great/">Episode Example | MP3</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5339" data-id="menu-item-5339" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-libsyn/">Episode Example | Libsyn</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5340" data-id="menu-item-5340" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-soundcloud/">Episode Example | SoundCloud</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5337" data-id="menu-item-5337" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-stitcher/">Episode Example | Stitcher</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5338" data-id="menu-item-5338" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/copy-of-episode-example-libsyn/">Episode Example | Icecast</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-podcast menu-item-5336" data-id="menu-item-5336" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcast/episode-example-buzzsprout/">Episode Example | Buzzsprout</a></li>
		</ul>
</li>
		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5332" data-id="menu-item-5332" style="pointer-events: auto;"><a href="#">Podcasts Listing</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5331" data-id="menu-item-5331" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-slider-carrousel/">Podcasts – Slider Carrousel</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5330" data-id="menu-item-5330" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-clickandplay/">Podcasts – Click and Play</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5327" data-id="menu-item-5327" style="pointer-events: auto;"><a href="https://shamimminoo.com/copy-of-podcasts-2-columns/">Podcasts – 2 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5328" data-id="menu-item-5328" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-3-columns/">Podcasts – 3 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5329" data-id="menu-item-5329" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-4-columns/">Podcasts – 4 Columns</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5326" data-id="menu-item-5326" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-list/">Podcasts – List</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5324" data-id="menu-item-5324" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-filters/">Podcasts – with Filters</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5325" data-id="menu-item-5325" style="pointer-events: auto;"><a href="https://shamimminoo.com/podcasts-sidebar/">Podcasts – with Sidebar</a></li>
		</ul>
</li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1239" data-id="menu-item-1239" style="pointer-events: auto;"><a href="#">Artists</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2144" data-id="menu-item-2144" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/indiana/">Artist – Example 1</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2163" data-id="menu-item-2163" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/raymayor/">Artist – Example 2</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-artist menu-item-2175" data-id="menu-item-2175" style="pointer-events: auto;"><a href="https://shamimminoo.com/artist/ultrasonic/">Artist – Example 3</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242" data-id="menu-item-1242" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-grid/">Artists – Grid</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744" data-id="menu-item-1744" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-filters/">Artists – Filters</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1741" data-id="menu-item-1741" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-parallax/">Artists – Parallax</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735" data-id="menu-item-1735" style="pointer-events: auto;"><a href="https://shamimminoo.com/artists-fullwidth/">Artists – Fullwidth</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2130" data-id="menu-item-2130" style="pointer-events: auto;"><a href="#">Speciality Pages</a>
	<ul class="sub-menu">
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61" data-id="menu-item-61" style="pointer-events: auto;"><a href="https://shamimminoo.com/donate/">Donate</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69" data-id="menu-item-69" style="pointer-events: auto;"><a href="https://shamimminoo.com/presskit/">Presskit</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1972" data-id="menu-item-1972" style="pointer-events: auto;"><a href="https://shamimminoo.com/under-construction-coming-soon-page/">Coming Soon Page</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2654" data-id="menu-item-2654" style="pointer-events: auto;"><a href="https://shamimminoo.com/video-landing-page/">Video Landing Page</a></li>
	</ul>
</li>
	<li class="menu_small_item menu-item menu-item-type-post_type menu-item-object-page menu-item-808" data-id="menu-item-808" style="pointer-events: auto;"><a href="https://shamimminoo.com/shop/">Shop</a></li>
</ul>
</li>
</ul></nav>
						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-bf1cfea" data-id="bf1cfea" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-7992aa8 e-grid-align-right e-grid-align-tablet-center elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="7992aa8" data-element_type="widget" data-widget_type="social-icons.default">
				<div class="elementor-widget-container">
							<div class="elementor-social-icons-wrapper elementor-grid" role="list">
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-bob elementor-repeater-item-11d929a" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Youtube</span>
						<i class="fab fa-youtube"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-spotify elementor-animation-bob elementor-repeater-item-20507ab" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Spotify</span>
						<i class="fab fa-spotify"></i>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-soundcloud elementor-animation-bob elementor-repeater-item-46460c4" href="https://sonaar.io" target="_blank">
						<span class="elementor-screen-only">Soundcloud</span>
						<i class="fab fa-soundcloud"></i>					</a>
				</span>
					</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-46046f1 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="46046f1" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a href="javascript:IRON.sonaar.player.setPlayer({id:2192})" class="elementor-button elementor-size-sm elementor-animation-bob" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon">
				<i aria-hidden="true" class="fas fa-long-arrow-alt-right"></i>			</span>
									<span class="elementor-button-text">Play Album</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
					</div>
		</section></span>
				<span class="sr_sticky_wrap" style="display: block; height: 74px;"><div class="sr_toggleSticky"></div><section class="elementor-section elementor-top-section elementor-element elementor-element-a91f6e0 elementor-section-content-middle elementor-section-full_width elementor-hidden-desktop elementor-section-height-default elementor-section-height-default sr-sticky-anim-enable sr-sticky sr_hideOnScroll sr_sticky_showup" data-id="a91f6e0" data-element_type="section" data-settings="{&quot;sr_hide_after&quot;:75,&quot;sr_sticky&quot;:&quot;top&quot;,&quot;sr_sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sr_sticky_offset&quot;:0}" data-margin-top="0" data-margin-offset="0" data-sticky-wrap="true" style="position: fixed; left: 0px; top: 0px;">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8cdbe24" data-id="8cdbe24" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-306b4a2 elementor-widget-mobile__width-initial elementor-widget elementor-widget-sr-sitelogo" data-id="306b4a2" data-element_type="widget" data-widget_type="sr-sitelogo.default">
				<div class="elementor-widget-container">
							<div class="sr-site-logo">
							<a class="" href="https://shamimminoo.com">
				
			<div class="sr-site-logo-set">           
				<div class="sr-site-logo-container">
					<img class="sr-site-logo-img sr-logo-primary elementor-animation-" src="https://shamimminoo.com/wp-content/uploads/2020/11/photo_6003572223870355768_y-478x559.jpg" alt="">
											
				</div>
			</div>
							</a>
						</div>  
							</div>
				</div>
				<div class="elementor-element elementor-element-4d2a92c elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-text-editor" data-id="4d2a92c" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Shamim Minoo</p>								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-80320c7" data-id="80320c7" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-576153f elementor-widget__width-auto sr-offcanva-txt-align-left elementor-widget elementor-widget-sr-offcanvas" data-id="576153f" data-element_type="widget" data-settings="{&quot;content_transition&quot;:&quot;reveal&quot;,&quot;direction&quot;:&quot;right&quot;,&quot;label_position&quot;:&quot;left&quot;}" data-widget_type="sr-offcanvas.default">
				<div class="elementor-widget-container">
					        <div class="sr-offcanvas-content-wrap" data-settings="{&quot;content_id&quot;:&quot;576153f&quot;,&quot;direction&quot;:&quot;right&quot;,&quot;transition&quot;:&quot;reveal&quot;,&quot;esc_close&quot;:&quot;yes&quot;,&quot;body_click_close&quot;:&quot;yes&quot;,&quot;open_offcanvas&quot;:&quot;&quot;,&quot;class_toggle_offCanvas&quot;:&quot;&quot;}">

            <div class="sr-offcanvas-toggle-wrap">
                <div class="sr-offcanvas-toggle sr-offcanvas-toogle-576153f elementor-button">
                                            
                        	<div class="elementor-icon sr-offcanvas-toggle-icon sr-offcanvas-toggle-svg-icon">
	                        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 9.18"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="20" height="1.5"></rect><rect class="cls-1" y="7.68" width="20" height="1.5"></rect></g></g></svg>                        	</div>
                            <!--<img class="sr-offcanvas-toggle-icon sr-offcanvas-toggle-svg-icon" src="https://shamimminoo.com/wp-content/uploads/2020/12/menu-open-2bars.svg" alt="">-->



                                                                                        <span class="sr-toggle-text">
                                                     </span>
                                    </div>
            </div>

            
        </div>
        				</div>
				</div>
					</div>
		</div>
					</div>
		</section></span>
				</div>
					</header>
		<div id="pusher-wrap" class="pusher-type-elementor-menu">
			<div id="pusher" class="menu-type-elementor-menu" aria-live="polite">
				
		<div class="pjax-container" style="visibility: visible; opacity: 1;">
		<div id="wrapper" class="wrapper">
				<!-- container -->
	

			<div class="container">
							<div class="boxed">
								<article id="post-1767" class="sr_it-single-post post-1767 page type-page status-publish hentry">
				
				<div class="entry">
							<div data-elementor-type="wp-post" data-elementor-id="1767" class="elementor elementor-1767">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-23f45a6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23f45a6" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-333b9fe" data-id="333b9fe" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-5dc5a0a elementor-widget elementor-widget-heading animated fadeInUp" data-id="5dc5a0a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">Biography</h3>				</div>
				</div>
				<div class="elementor-element elementor-element-6e68456 elementor-widget elementor-widget-heading animated fadeInUp" data-id="6e68456" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h1 class="elementor-heading-title elementor-size-default">Shamim Minoo</h1>				</div>
				</div>
				<div class="elementor-element elementor-element-8f62c50 elementor-widget elementor-widget-heading animated fadeInUp" data-id="8f62c50" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Iranian harpist</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-0332ddc elementor-widget-divider--view-line elementor-widget elementor-widget-divider animated fadeInUp" data-id="0332ddc" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:900}" data-widget_type="divider.default">
				<div class="elementor-widget-container">
							<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-2e8e169 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="2e8e169" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}" style="width: 320px; left: 0px;">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ffd205d" data-id="ffd205d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-10d2763 elementor-widget elementor-widget-image animated fadeIn" data-id="10d2763" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:1200}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img fetchpriority="high" decoding="async" width="1024" height="683" src="https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3649-1024x683.jpeg" class="elementor-animation-grow attachment-large size-large wp-image-6038" alt="" srcset="https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3649-1024x683.jpeg 1024w, https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3649-559x373.jpeg 559w, https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3649-768x512.jpeg 768w, https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3649-1536x1024.jpeg 1536w, https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3649-2048x1366.jpeg 2048w" sizes="(max-width: 1024px) 100vw, 1024px">															</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-63196a1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="63196a1" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b78089d" data-id="b78089d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-8cc9a0b elementor-widget elementor-widget-heading animated fadeInUp" data-id="8cc9a0b" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">Harp Column Magazine :</h3>				</div>
				</div>
				<div class="elementor-element elementor-element-903c149 elementor-widget__width-initial elementor-widget elementor-widget-heading animated fadeInUp" data-id="903c149" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">Iranian harpist Shamim Minoo
stands out among a talented
field of performers to take
home the gold at the 13th USA
International Harp Competition</h3>				</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-9cfd66f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9cfd66f" data-element_type="section">
						<div class="elementor-container elementor-column-gap-wide">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-911cbfa" data-id="911cbfa" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-020a2d4 elementor-drop-cap-yes elementor-drop-cap-view-framed elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="020a2d4" data-element_type="widget" data-settings="{&quot;drop_cap&quot;:&quot;yes&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span style="font-weight: 400;">Shamim Minoo, born in 2004 in Tehran, is the first in her family to pursue a career in music. She began her musical journey at the age of six in Iran, studying both harp and singing. By twelve, she was performing with major Iranian orchestras, including the Iranian Youth Orchestra, where she played Mozart’s Concerto for Flute and Harp. In the following years, she performed with the Tehran Symphony Orchestra, the Iranian National Orchestra, and the Tehran Philharmonic Orchestra.</span></p><p><span style="font-weight: 400;">After winning First Prize at the Excellence Level at the “Concours Français de la Harpe”, new doors were opened for Shamim with recital opportunities in Limoges and Paris. She then moved to Paris in 2020 to study harp under the tutelage of Ghislaine Petit-Volta at the Conservatoire à Rayonnement Régional (CRR). Shamim’s commitment to excellence eventually led her to the renowned Conservatoire National Supérieur de Musique et de Danse de Paris (CNSMDP), where she has been studying under the tutelage of the world’s foremost harpists, Isabelle Moretti and Geneviève Létang.</span></p><p><span style="font-weight: 400;">Throughout 2024, Shamim has been performing solo recitals across Italy and France, including notable appearances at the Harpissima event and the Camac Music Festival. She was also awarded the Rossetti Prize, which led Shamim to perform Castelnuovo-Tedesco’s Concertino for Harp and Orchestra with the Nuovo Orchestra Scarlatti in Italy. During the summer of 2024, Shamim was awarded a full scholarship to the Aspen Music Festival. There, she studied and performed alongside renowned harpist Nancy Allen, gaining invaluable experience. During her time there, she had the opportunity to perform with several well-known musicians including Roderick Cox and Robert Spano, among others.</span></p>								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4a69075" data-id="4a69075" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-032f6bb elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="032f6bb" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span style="font-weight: 400;">Shamim’s international recognition continued to grow as she was awarded some of the highest distinctions and prizes. She won the Gold Medal and the prestigious Renié Prize at the 13th USA International Harp Competition (2025), establishing her as one of the most accomplished young harpists of her generation. She had previously been awarded First Prize at the Szeged International Harp Competition (under-25 category) in Hungary (2022), and First Prize at the 2023 Suoni d’Arpa Competition (Category C) in Italy. She also performed at the Philharmonie de Paris with the Conservatoire Orchestra under the direction of Kirill Karabits and Lionel Bringuier, further confirming her artistic maturity on major international stages.</span></p><p><span style="font-weight: 400;">Her talent and dedication have been recognized through numerous scholarships and institutional awards. Shamim has been named a laureate of the Société générale, Ministère de la Culture (France), Fondation de l’Or du Rhin, the Safran Foundation, and the Prix de harp Monique Rollin (Fondation de France), each acknowledging her exceptional promise and contribution to the arts.</span></p><p><span style="font-weight: 400;">Shamim’s passion for music is complemented by a deep commitment to expressing emotions through her performances.&nbsp;</span></p>								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-ab6bfe7 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="ab6bfe7" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}" style="width: 320px; left: 0px;">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-949780c" data-id="949780c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-e4106bc elementor-widget elementor-widget-image animated fadeIn" data-id="e4106bc" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" src="https://shamimminoo.com/wp-content/uploads/elementor/thumbs/IMG_3636-scaled-r8cvoi1lus51zyivayteqwo5pwrm8bju4yxaua4rxs.jpeg" title="Shamim Minoo" alt="Competitor Shamim Minoo of Iran is pictured during the 13th USA International Harp Competition at Indiana University in Bloomington, Indiana on Friday, May 23, 2025. (Photo by James Brosher)" class="elementor-animation-grow" loading="lazy">															</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-ba7a213 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ba7a213" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2d47762" data-id="2d47762" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-d967ca3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider animated fadeInUp" data-id="d967ca3" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="divider.default">
				<div class="elementor-widget-container">
							<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-211764b elementor-widget elementor-widget-heading animated fadeInUp" data-id="211764b" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">find your personality in the music.</h3>				</div>
				</div>
				<div class="elementor-element elementor-element-f17ac80 elementor-widget elementor-widget-heading animated fadeInUp" data-id="f17ac80" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h1 class="elementor-heading-title elementor-size-default">Don’t compete just to win a prize.

Please! It doesn’t work.</h1>				</div>
				</div>
				<div class="elementor-element elementor-element-ee07763 elementor-widget elementor-widget-heading animated fadeInUp" data-id="ee07763" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Go to improve yourself. Go to make progress.</h2>				</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-d40e16a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d40e16a" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e74ea94" data-id="e74ea94" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-4f9f745 elementor-widget elementor-widget-image" data-id="4f9f745" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="837" height="733" src="https://shamimminoo.com/wp-content/uploads/2025/08/Screenshot-2025-08-02-212501.png" class="attachment-large size-large wp-image-6215" alt="" srcset="https://shamimminoo.com/wp-content/uploads/2025/08/Screenshot-2025-08-02-212501.png 837w, https://shamimminoo.com/wp-content/uploads/2025/08/Screenshot-2025-08-02-212501-559x490.png 559w, https://shamimminoo.com/wp-content/uploads/2025/08/Screenshot-2025-08-02-212501-768x673.png 768w" sizes="(max-width: 837px) 100vw, 837px">															</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<div class="elementor-element elementor-element-4afc44c elementor-widget elementor-widget-image animated fadeInUp" data-id="4afc44c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="150" height="150" src="https://shamimminoo.com/wp-content/uploads/2025/07/IMG_3731-1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-image-6039" alt="">															</div>
				</div>
				<div class="elementor-element elementor-element-c24e40e elementor-align-center elementor-widget elementor-widget-button animated fadeInUp" data-id="c24e40e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-xs elementor-animation-bob" href="http://./contact/">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon">
									<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
							</span>
									<span class="elementor-button-text">Contact Us</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
											</div>

				
<div id="comments" class="comments-area">

	
</div>				</article>
							</div>
							</div>

		</div>


		<!-- footer -->
	<footer id="footer">
		<div class="container">
				<div data-elementor-type="wp-post" data-elementor-id="1011" class="elementor elementor-1011 elementor-bc-flex-widget">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-151e470 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="151e470" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}" style="width: 320px; left: 0px;">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1d0eaf8" data-id="1d0eaf8" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="elementor-section elementor-inner-section elementor-element elementor-element-38b9556 elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="38b9556" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-823a9e5" data-id="823a9e5" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-d7df781 elementor-widget elementor-widget-heading" data-id="d7df781" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<div class="elementor-heading-title elementor-size-default">Subscribe to</div>				</div>
				</div>
				<div class="elementor-element elementor-element-9da0bf1 elementor-widget elementor-widget-heading" data-id="9da0bf1" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<div class="elementor-heading-title elementor-size-default">My Fan<br>Club</div>				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d8b764b" data-id="d8b764b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-5316ee1 elementor-widget elementor-widget-text-editor" data-id="5316ee1" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Join our digital mailing list and get notified when we release new episodes.</p>								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-000f5b7" data-id="000f5b7" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-0bbe396 sr-mailchimp-message-text-default elementor-widget elementor-widget-sonaar-mailchimp" data-id="0bbe396" data-element_type="widget" data-widget_type="sonaar-mailchimp.default">
				<div class="elementor-widget-container">
							<div class="sr-mailchimp-wrap sr-mailchimp-inline" data-mailchimp-id="0bbe396" data-list-id="b893717c76" data-button-text="Subscribe" data-success-text="Nice one! You have subscribed successfully!" data-loading-text="Hold on...">
		<form action="#" id="sr-mailchimp-form-0bbe396">
			<div class="sr-form-fields-wrapper sr-mailchimp-fields-wrapper sr-mailchimp-btn-inline">
				<div class="sr-field-group sr-mailchimp-email">
					<label for=""></label>
					<input type="email" name="sr_mailchimp_email" class="sr-mailchimp-input" placeholder="Email" required="required">
				</div>
				<div class="sr-field-group sr-mailchimp-fname" style="display:none;">
					<label for="First Name">First Name</label>
					<input type="text" name="sr_mailchimp_firstname" class="sr-mailchimp-input" placeholder="First Name">
				</div>
				<div class="sr-field-group sr-mailchimp-lname" style="display:none;">
					<label for="Last Name">Last Name</label>
					<input type="text" name="sr_mailchimp_lastname" class="sr-mailchimp-input" placeholder="Last Name">
				</div>
				<div class="sr-field-group sr-mailchimp-submit-btn">
					<button id="sr-subscribe-0bbe396" class="sr-load-more-button sr-mailchimp-subscribe">
						<div class="sr-btn-loader button__loader"></div>
				  		<span>Subscribe</span>
					</button>
				</div>
			</div>
		</form>
	</div>
	
					</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-e4a225d elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e4a225d" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;gradient&quot;}" style="width: 320px; left: 0px;">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-edcf4a9" data-id="edcf4a9" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="elementor-section elementor-inner-section elementor-element elementor-element-0674f01 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0674f01" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4b15408" data-id="4b15408" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-e4c5d68 elementor-shape-circle e-grid-align-right e-grid-align-mobile-center elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="e4c5d68" data-element_type="widget" data-widget_type="social-icons.default">
				<div class="elementor-widget-container">
							<div class="elementor-social-icons-wrapper elementor-grid" role="list">
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-pop elementor-repeater-item-3eb2820" href="https://www.facebook.com/sonaarmusic" target="_blank">
						<span class="elementor-screen-only">Facebook</span>
													<i class="fa fa-facebook"></i>
											</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-pop elementor-repeater-item-87ab2fa" href="https://www.instagram.com/sonaarmusic/" target="_blank">
						<span class="elementor-screen-only">Instagram</span>
													<i class="fa fa-instagram"></i>
											</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-pop elementor-repeater-item-2817878" href="https://www.youtube.com/channel/UCqG38cPqeZfr9jhejhSc2Cg/featured" target="_blank">
						<span class="elementor-screen-only">Youtube</span>
													<i class="fa fa-youtube"></i>
											</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-pop elementor-repeater-item-f84a9f7" href="https://twitter.com/sonaar_music" target="_blank">
						<span class="elementor-screen-only">Twitter</span>
													<i class="fa fa-twitter"></i>
											</a>
				</span>
					</div>
						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d3f70d3" data-id="d3f70d3" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-52cdc93 elementor-widget elementor-widget-image" data-id="52cdc93" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="184" height="19" src="https://shamimminoo.com/wp-content/uploads/2019/01/Logo-Symphony-Light-1x.png" class="attachment-large size-large wp-image-5425" alt="">															</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<div class="elementor-element elementor-element-4aaceda elementor-icon-list--layout-inline elementor-align-center elementor-mobile-align-center elementor-hidden-phone elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4aaceda" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
							<ul class="elementor-icon-list-items elementor-inline-items">
							<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://shamimminoo.com/">

											<span class="elementor-icon-list-text">HOME</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://shamimminoo.com/events-list/">

											<span class="elementor-icon-list-text">CONCERT</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://shamimminoo.com/video-youtube-channel/">

											<span class="elementor-icon-list-text">DISCOGRAPHY</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://shamimminoo.com/about-example-1/">

											<span class="elementor-icon-list-text">ABOUT</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://shamimminoo.com/news-2-columns/">

											<span class="elementor-icon-list-text">PRESS</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://shamimminoo.com/contact/">

											<span class="elementor-icon-list-text">CONTACT</span>
											</a>
									</li>
						</ul>
						</div>
				</div>
				<div class="elementor-element elementor-element-180fa23 elementor-widget elementor-widget-heading" data-id="180fa23" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<div class="elementor-heading-title elementor-size-default"><a href="https://sonaar.io" target="_blank">2019 © YOUR COMPANY - &nbsp;WordPress Theme by&nbsp;Sonaar.io</a></div>				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
		
				</div>
	</footer>
	<!--- end if elementor footer location -->
	 </div></div>
			</div>
		


		<script>
			window.RS_MODULES = window.RS_MODULES || {};
			window.RS_MODULES.modules = window.RS_MODULES.modules || {};
			window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
			window.RS_MODULES.defered = false;
			window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
			window.RS_MODULES.type = 'compiled';
		</script>
		<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\/*"},{"not":{"href_matches":["\/wp-*.php","\/wp-admin\/*","\/wp-content\/uploads\/*","\/wp-content\/*","\/wp-content\/plugins\/*","\/wp-content\/themes\/sonaar-child\/*","\/wp-content\/themes\/sonaar\/*","\/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
<script>var ajaxRevslider;function rsCustomAjaxContentLoadingFunction(){ajaxRevslider=function(obj){var content='',data={action:'revslider_ajax_call_front',client_action:'get_slider_html',token:'bf6ce11695',type:obj.type,id:obj.id,aspectratio:obj.aspectratio};jQuery.ajax({type:'post',url:'https://shamimminoo.com/wp-admin/admin-ajax.php',dataType:'json',data:data,async:false,success:function(ret,textStatus,XMLHttpRequest){if(ret.success==true)content=ret.data;},error:function(e){console.log(e);}});return content;};var ajaxRemoveRevslider=function(obj){return jQuery(obj.selector+' .rev_slider').revkill();};if(jQuery.fn.tpessential!==undefined)if(typeof(jQuery.fn.tpessential.defaults)!=='undefined')jQuery.fn.tpessential.defaults.ajaxTypes.push({type:'revslider',func:ajaxRevslider,killfunc:ajaxRemoveRevslider,openAnimationSpeed:0.3});}var rsCustomAjaxContent_Once=false;if(document.readyState==="loading")document.addEventListener('readystatechange',function(){if((document.readyState==="interactive"||document.readyState==="complete")&&!rsCustomAjaxContent_Once){rsCustomAjaxContent_Once=true;rsCustomAjaxContentLoadingFunction();}});else{rsCustomAjaxContent_Once=true;rsCustomAjaxContentLoadingFunction();}</script>			<script>
				const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );
			</script>
			<div id="sonaar-player" class="list-type-false srt_sticky-player"><audio id="sonaarAudio" src="" crossorigin="anonymous"></audio> <!----> <!----> <!----> <div class="player no-list "><div class="mobileProgress"><div class="skip"></div> <div class="mobileProgressing wave-cut" style="width: 0px;"></div> <div class="progressDot"></div></div> <div class="player-row"><div class="playerNowPlaying"></div> <div class="control"><!----> <!----> <!----> <div class="previous"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17.42" height="20" x="0px" y="0px" viewBox="0 0 10.2 11.7" xml:space="preserve"><polygon points="10.2,0 1.4,5.3 1.4,0 0,0 0,11.7 1.4,11.7 1.4,6.2 10.2,11.7"></polygon></svg></div> <div class="play"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.64" height="25" x="0px" y="0px" viewBox="0 0 17.5 21.2" xml:space="preserve"><path d="M0,0l17.5,10.9L0,21.2V0z"></path> <rect width="6" height="21.2"></rect> <rect x="11.5" width="6" height="21.2"></rect></svg></div> <div class="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17.42" height="20" x="0px" y="0px" viewBox="0 0 10.2 11.7" xml:space="preserve"><polygon points="0,11.7 8.8,6.4 8.8,11.7 10.2,11.7 10.2,0 8.8,0 8.8,5.6 0,0"></polygon></svg></div> <div class="shuffle"><div><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0px" y="0px" viewBox="0 0 22 22" xml:space="preserve"><path d="M19,15.4H3.2l2.8-2.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.3-0.1-0.5,0l-3.3,3.3C2.1,15.5,2,15.6,2,15.7c0,0.1,0,0.2,0.1,0.2
              l3.3,3.3c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.3,0-0.5L3.2,16H19c0.2,0,0.3-0.1,0.3-0.3
              C19.3,15.5,19.1,15.4,19,15.4z M20.3,7.2l-3.3-3.3c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l2.8,2.7H3.5
              c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h15.8l-2.8,2.7c-0.1,0.1-0.1,0.3,0,0.5c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1
              l3.3-3.3c0.1-0.1,0.1-0.1,0.1-0.2C20.4,7.3,20.3,7.3,20.3,7.2z"></path></svg></div></div> <!----></div> <div class="wavesurfer"><div class="timing"><div class="time timing_currentTime"></div> <div class="time timing_totalTime"></div></div> <div class="wave-custom"><div class="wave-base"><svg height="100%" width="100%"></svg></div> <div class="wave-cut" style="width: 0px;"><div class="wave-progress"><svg height="100%" width="100%"></svg></div></div></div> <div class="wave-progress-bar"><div class="bar progress_totalTime" style="background: rgb(140, 121, 86); opacity: 0.5;"></div> <div class="bar progress_currentTime" style="background: rgb(255, 255, 255); width: 0px;"></div> <div class="skip"></div></div> <div class="volume"><div class="icon"><div><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" x="0px" y="0px" viewBox="0 0 22 22" xml:space="preserve"><g><path d="M11.7,19c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3l-4.1-4.1H1.1c-0.3,0-0.6-0.1-0.8-0.3
                    C0.1,15.2,0,14.9,0,14.6V8c0-0.3,0.1-0.6,0.3-0.8C0.5,7,0.8,6.9,1.1,6.9h4.7l4.1-4.1c0.2-0.2,0.5-0.3,0.8-0.3
                    c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8V19z M17.1,9.2c-0.4-0.7-0.9-1.2-1.6-1.6c-0.3-0.2-0.7-0.3-1.1-0.2
                    C14,7.5,13.7,7.7,13.5,8c-0.2,0.4-0.3,0.7-0.2,1.1c0.1,0.4,0.3,0.7,0.7,0.9c0.5,0.3,0.7,0.7,0.7,1.2c0,0.5-0.2,0.9-0.6,1.2
                    c-0.3,0.2-0.5,0.6-0.6,1s0,0.8,0.3,1.1c0.2,0.3,0.5,0.5,0.9,0.6c0.4,0.1,0.8,0,1.1-0.2c0.6-0.4,1-1,1.4-1.6c0.3-0.6,0.5-1.3,0.5-2
                    C17.6,10.6,17.4,9.8,17.1,9.2z M20.9,7c-0.8-1.3-1.8-2.4-3.1-3.2c-0.3-0.2-0.7-0.3-1.1-0.2c-0.4,0.1-0.7,0.3-0.9,0.7
                    c-0.2,0.4-0.3,0.7-0.2,1.1c0.1,0.4,0.3,0.7,0.7,0.9c0.9,0.5,1.5,1.2,2,2.1c0.5,0.9,0.8,1.8,0.8,2.9c0,0.9-0.2,1.8-0.7,2.7
                    c-0.4,0.9-1.1,1.6-1.9,2.1c-0.3,0.2-0.5,0.6-0.6,1c-0.1,0.4,0,0.8,0.3,1.1c0.3,0.4,0.7,0.6,1.2,0.6c0.3,0,0.6-0.1,0.8-0.3
                    c1.2-0.8,2.1-1.9,2.8-3.2c0.7-1.3,1-2.6,1-4.1C22,9.8,21.6,8.3,20.9,7z"></path></g></svg></div></div> <div class="slider-container"><div class="slide ui-slider ui-corner-all ui-slider-vertical ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="height: 100%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="bottom: 100%;"></span></div></div></div></div> <!----> <!----></div></div></div><link rel="stylesheet" id="elementor-post-6004-css" href="https://shamimminoo.com/wp-content/uploads/elementor/css/post-6004.css?ver=1757521962" type="text/css" media="all">
<link rel="stylesheet" id="elementor-gf-local-nunito-css" href="https://shamimminoo.com/wp-content/uploads/elementor/google-fonts/css/nunito.css?ver=1751799964" type="text/css" media="all">
<link rel="stylesheet" id="elementor-gf-local-inter-css" href="https://shamimminoo.com/wp-content/uploads/elementor/google-fonts/css/inter.css?ver=1751799992" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-6005-css" href="https://shamimminoo.com/wp-content/uploads/elementor/css/post-6005.css?ver=1757521962" type="text/css" media="all">
<link rel="stylesheet" id="e-animation-fadeIn-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css?ver=3.31.5" type="text/css" media="all">


<link rel="stylesheet" id="elementor-post-1011-css" href="https://shamimminoo.com/wp-content/uploads/elementor/css/post-1011.css?ver=1757521963" type="text/css" media="all">
<link rel="stylesheet" id="widget-icon-list-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.31.5" type="text/css" media="all">
<link rel="stylesheet" id="elementor-gf-local-playfairdisplaysc-css" href="https://shamimminoo.com/wp-content/uploads/elementor/google-fonts/css/playfairdisplaysc.css?ver=1751799932" type="text/css" media="all">
<link rel="stylesheet" id="rs-plugin-settings-css" href="//shamimminoo.com/wp-content/plugins/revslider/sr6/assets/css/rs6.css?ver=6.7.25" type="text/css" media="all">

<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/dist/hooks.min.js?ver=4d63a3d491d11ffd8ac6" id="wp-hooks-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></script>
<script type="text/javascript" id="wp-i18n-js-after">
/* <![CDATA[ */
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
/* ]]> */
</script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.1" id="swv-js"></script>
<script type="text/javascript" id="contact-form-7-js-before">
/* <![CDATA[ */
var wpcf7 = {
    "api": {
        "root": "https:\/\/shamimminoo.com\/wp-json\/",
        "namespace": "contact-form-7\/v1"
    }
};
/* ]]> */
</script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.1" id="contact-form-7-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/underscore.min.js?ver=1.13.7" id="underscore-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.3" id="jquery-ui-mouse-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/jquery/ui/slider.min.js?ver=1.13.3" id="jquery-ui-slider-js"></script>
<script type="text/javascript" id="mediaelement-core-js-before">
/* <![CDATA[ */
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.17" id="mediaelement-core-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=6.8.2" id="mediaelement-migrate-js"></script>
<script type="text/javascript" id="mediaelement-js-extra">
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive","audioShortcodeLibrary":"mediaelement","videoShortcodeLibrary":"mediaelement"};
/* ]]> */
</script>
<script type="text/javascript" id="iron-main-js-extra">
/* <![CDATA[ */
var iron_vars = {"sonaar_debug":"","enable_ajax":"1","enable_spectrum":"1","theme_url":"https:\/\/shamimminoo.com\/wp-content\/themes\/sonaar","plugins_folder_url":"https:\/\/shamimminoo.com\/wp-content\/plugins","ajaxurl":"https:\/\/shamimminoo.com\/wp-admin\/admin-ajax.php?lang=en","enable_fixed_header":"1","header_top_menu_hide_on_scroll":"1","menu":{"top_menu_position":"righttype","menu_transition":"type2","classic_menu_over_content":true,"classic_menu_position":"fixed fixed_before","menu_type":"elementor-menu","classic_menu_hmargin":"40px","classic_menu_logo_align":"pull-left","unveil_all_mobile_items":0},"lang":"en","custom_js":"$('.wg-li a').addClass('no-ajax');","plugins_url":"https:\/\/shamimminoo.com\/wp-content\/themes\/sonaar\/includes\/sonaar-music\/","slug":{"events":"event","discography":false,"artist":"artist","videos":"videos"},"sonaar_music":{"color_base":"rgb(0, 0, 0)","color_progress":"rgb(140, 121, 86)","continuous_background":"rgb(0, 0, 0)","continuous_timeline_background":"rgb(140, 121, 86)","continuous_progress_bar":"rgb(255, 255, 255)","continuous_control_color":false,"continuous_artist_name":false,"continuous_playlist_icon":false,"footer_playlist":false,"footer_podcast":false,"footer_playlist_autoplay":0,"footer_podcast_autoplay":0,"podcast_color_base":"rgb(50, 44, 35)","podcast_color_progress":"rgb(127, 108, 78)","podcast_hide_duration":"1","podcast_hide_category":"1","podcast_skip_button":false,"podcast_speed_rate_button":false,"artist_prefix":"by"},"wp_admin_bar":"","site_url":"https:\/\/shamimminoo.com\/","site_name":"Shamim Minoo","logo":{"enable":true,"dark":{"url":"https:\/\/shamimminoo.com\/wp-content\/uploads\/2019\/01\/Logo-Symphony-Light-1x.png","url_retina":"https:\/\/shamimminoo.com\/wp-content\/uploads\/2019\/01\/Logo-Symphony-Light-2x.png"},"light":{"url":"https:\/\/shamimminoo.com\/wp-content\/uploads\/2019\/01\/Logo-Symphony-Light-1x.png","url_retina":"https:\/\/shamimminoo.com\/wp-content\/uploads\/2019\/01\/Logo-Symphony-Light-2x.png"},"responsive":{"url":"https:\/\/shamimminoo.com\/wp-content\/uploads\/2019\/01\/Logo-Symphony-Light-2x.png"},"logo_select":"light","light_responsive":false,"page_logo_select":false,"page_logo_select_elementor":false,"logo_mini_url":"","logo_align":"pull-left","logo_height":{"light":35,"dark":35}},"social":{"facebook":"1","twitter":"1","google+":"1","linkedin":"1","pinterest":"1"},"social_enabled":"1","look_and_feel":{"color_1":"rgb(140, 121, 86)","color_2":null,"color_3":"rgba(0, 0, 0, 0.83)","color_4":"rgb(140, 121, 86)","text_color_1":"#000000","text_color_2":"rgb(166, 166, 167)","body_background":{"file":"","repeat":"repeat","size":"","position":"center center","color":"#000000"},"classic_menu_typography":{"font_readable":"Nunito","style":"normal","font":"Nunito:300","align":"","size":"16px","transform":"uppercase","height":"20px","weight":"300","color":"rgb(166, 166, 167)","bgcolor":""}},"taxonomy":{"banner":false},"i18n":{"events":{"pagination":{"next":"Next Events","prev":"Previous Events"}},"no_events":"No events scheduled yet. Stay tuned!"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/themes/sonaar/dist/js/sonaar.scripts.min.js?ver=4.27.4" id="iron-main-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.31.5" id="elementor-webpack-runtime-js"></script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.31.5" id="elementor-frontend-modules-js"></script>
<script type="text/javascript" id="elementor-frontend-js-before">
/* <![CDATA[ */
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.31.5","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"e_element_cache":true,"home_screen":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"cloud-library":true,"e_opt_in_v4_page":true},"urls":{"assets":"https:\/\/shamimminoo.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/shamimminoo.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/shamimminoo.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"1e5c6538f1"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"stretched_section_container":"body","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":5427,"title":"Shamim%20Minoo%20%E2%80%93%20Redefining%20the%20classical%20harp%20with%20Gold%20Medal%20virtuosity%20and%20soulful%20artistry.","excerpt":"","featuredImage":false}};
/* ]]> */
</script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.31.5" id="elementor-frontend-js"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/essential-grid/public/assets/js/sr6/esg.min.js?ver=3.1.6" id="esg-essential-grid-script-js"></script>
<script type="text/javascript" id="sr-scripts-elementor-js-extra">
/* <![CDATA[ */
var sonaarMailchimp = {"ajax_url":"https:\/\/shamimminoo.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="https://shamimminoo.com/wp-content/plugins/elementor-for-sonaar/assets/js/sonaar-addons-elementor.min.js?ver=2.5.1" id="sr-scripts-elementor-js"></script>
<a href="#" id="back-to-top-mobile" class="footer-wrapper-backtotop-mobile">
			<i class="fa-solid fa-chevron-up"></i>
		</a>
		<a href="#" id="back-to-top" class="footer-wrapper-backtotop">
			<i class="fa-solid fa-chevron-up"></i>
		</a>
</div><style id="rs-plugin-settings-inline-css" type="text/css">
#rs-demo-id {}
</style><link rel="stylesheet" id="e-animation-fadeInUp-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=3.31.5" type="text/css" media="all"><link rel="stylesheet" id="widget-divider-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/css/widget-divider.min.css?ver=3.31.5" type="text/css" media="all"><link rel="stylesheet" id="e-animation-grow-css" href="https://shamimminoo.com/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css?ver=3.31.5" type="text/css" media="all"><link rel="stylesheet" id="elementor-post-1767-css" href="https://shamimminoo.com/wp-content/uploads/elementor/css/post-1767.css?ver=1757552980" type="text/css" media="all"></body></html>