<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';
	
	export let video;
	export let showVideo = false;
	export let onPlayVideo;

	let backgroundVideo: HTMLVideoElement;
	let isVideoLoaded = false;
	let nameElement: HTMLElement;

	onMount(() => {
		console.log('Component mounted, showVideo:', showVideo);
		
		// Show name in bottom right initially after 2 seconds
		if (!showVideo) {
			setTimeout(() => {
				if (nameElement) {
					nameElement.style.opacity = '1';
				}
			}, 2000);
		}
		
		if (!showVideo && backgroundVideo) {
			console.log('Setting up video event listeners');
			// Wait for video to load
			backgroundVideo.addEventListener('loadeddata', () => {
				console.log('Video loaded, starting 10 second timer');
				isVideoLoaded = true;
				// Wait 10 seconds after video loads before starting animation
				setTimeout(() => {
					console.log('10 seconds elapsed, starting animation');
					startHeroAnimation();
				}, 10000);
			});

			// Fallback in case video doesn't load
			setTimeout(() => {
				if (!isVideoLoaded) {
					console.log('Video did not load in 12 seconds, starting animation anyway');
					startHeroAnimation();
				}
			}, 12000);
		} else {
			console.log('Video not set up - showVideo:', showVideo, 'backgroundVideo:', backgroundVideo);
		}
	});

	function startHeroAnimation() {
		console.log('Starting hero animation...');
		
		// Move the name from bottom left to center (in the reserved space)
		if (nameElement) {
			console.log('Animating name from bottom left to center');
			const nameContainer = nameElement.parentElement;
			
			if (nameContainer) {
				// Animate the container from bottom left to center position (below logo)
				animate(nameContainer, {
					left: ['2rem', '50%'],
					bottom: ['2rem', '45%'], // Position it in the reserved space between logo and description
					transform: ['translateX(0)', 'translate(-50%, 50%)'],
					duration: 1200,
					ease: 'easeOutCubic',
					complete: () => {
						console.log('Name movement complete');
						// Also animate the text size
						animate(nameElement, {
							fontSize: ['2.25rem', '3.75rem'], // from text-4xl to text-6xl
							duration: 600,
							ease: 'easeOutQuart',
							complete: () => {
								// Then blur the background video
								blurBackgroundVideo();
							}
						});
					}
				});
			}
		} else {
			// If no name element, proceed to blur
			blurBackgroundVideo();
		}
	}

	function blurBackgroundVideo() {
		console.log('Starting blur animation...');
		// Blur the background video using direct style manipulation
		if (backgroundVideo) {
			console.log('Background video found, starting blur animation');
			let startTime: number | null = null;
			const duration = 800;
			
			function animateBlur(timestamp: number) {
				if (!startTime) startTime = timestamp;
				const progress = Math.min((timestamp - startTime) / duration, 1);
				const blurValue = progress * 4; // 0px to 4px
				
				backgroundVideo.style.filter = `blur(${blurValue}px)`;
				console.log(`Blur value: ${blurValue}px`);
				
				if (progress < 1) {
					requestAnimationFrame(animateBlur);
				} else {
					console.log('Blur animation complete, starting hero elements animation');
					// Then animate hero elements
					animateHeroElements();
				}
			}
			
			requestAnimationFrame(animateBlur);
		} else {
			console.log('Background video not found, proceeding with hero elements');
			// Fallback if backgroundVideo is not available
			animateHeroElements();
		}
	}

	function animateHeroElements() {
		// Animate logo container
		animate('.hero-logo', {
			opacity: [0, 1],
			translateY: [50, 0],
			scale: [0.8, 1],
			duration: 1200,
			delay: 200,
			ease: 'easeOutCubic'
		});

		// Skip title animation since it's handled in showCenterTitle

		// Animate description
		animate('.hero-description', {
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 800,
			delay: 200,
			ease: 'easeOutQuart'
		});

		// Animate buttons with stagger
		animate('.hero-button', {
			opacity: [0, 1],
			translateY: [20, 0],
			scale: [0.9, 1],
			duration: 800,
			delay: stagger(150, { start: 500 }),
			ease: 'easeOutBack'
		});

		// Animate scroll indicator
		animate('.scroll-indicator', {
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 800,
			delay: 800,
			ease: 'easeOutQuart'
		});
	}
</script>

<!-- Hero Section -->
<section class="relative h-screen w-full overflow-hidden">
	{#if showVideo && video}
		<div class="absolute top-0 left-0 w-full h-full z-10">
			<iframe 
				class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
				src="{video.embedUrl}?autoplay=1&mute=0&controls=1" 
				title={video.title}
				frameborder="0" 
				allow="autoplay; encrypted-media" 
				allowfullscreen>
			</iframe>
		</div>
	{:else}
		<!-- Background video -->
		<div class="absolute top-0 left-0 w-full h-full">
			<video 
				bind:this={backgroundVideo}
				class="hero-background-video absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
				autoplay 
				muted 
				loop 
				playsinline
			>
				<source src="/vid/Duphly_La_Pothouin_optimized.webm" type="video/webm">
				<source src="/vid/Duphly_La_Pothouin.webm" type="video/webm">
			</video>
		</div>
		<!-- Hero content overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
		
		<!-- Name in bottom left initially -->
		<div class="absolute bottom-8 left-8 z-10">
			<h1 bind:this={nameElement} class="hero-name-corner text-4xl md:text-5xl font-bold text-white playfair-display-bold drop-shadow-lg opacity-0 transition-opacity duration-300">
				Shamim Minoo
			</h1>
		</div>
		
		<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
			<div class="text-center px-4">
				<div class="hero-logo w-32 h-32 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center shadow-2xl border border-white/20 p-1 opacity-0">
					<img 
						src="/img/logo.jpg" 
						alt="Shamim Minoo Logo" 
						class=" rounded-full object-cover"
					/>
				</div>
				<!-- Reserved space for the title that will move from bottom left -->
				<div class="h-20 mb-6"></div>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button 
						on:click={onPlayVideo}
						class="hero-button inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-2xl hover:shadow-natural transition-all duration-300 font-semibold text-lg opacity-0"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
						</svg>
						Watch Performance
					</button>
					<a 
						href={video?.url || "#"} 
						target="_blank"
						class="hero-button inline-flex items-center justify-center gap-3 border-2 border-white/70 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg opacity-0"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
						Open YouTube
					</a>
				</div>
			</div>
		</div>
		
		<!-- Scroll indicator -->
		<div class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0">
			<button 
				class="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
				on:click={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
				aria-label="Scroll to content below"
			>
				<span class="text-sm font-medium mb-2 tracking-wider uppercase">Scroll</span>
				<div class="animate-bounce">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</button>
		</div>
	{/if}
</section>
