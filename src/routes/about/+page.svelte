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
