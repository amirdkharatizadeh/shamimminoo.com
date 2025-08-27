<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	// Form data
	let formData = {
		name: '',
		email: '',
		subject: '',
		category: '',
		message: ''
	};
	
	// Form state
	let isSubmitting = false;
	let submitMessage = '';
	let submitStatus = ''; // 'success' or 'error'
	
	// Contact categories
	const contactCategories = [
		{ value: 'performance', label: 'Performance Booking' },
		{ value: 'press', label: 'Press & Media' },
		{ value: 'education', label: 'Masterclass & Education' },
		{ value: 'collaboration', label: 'Artistic Collaboration' },
		{ value: 'general', label: 'General Inquiry' }
	];
	
	// Handle form submission
	async function handleSubmit(event) {
		event.preventDefault();
		isSubmitting = true;
		submitMessage = '';
		
		try {
			// Simulate form submission (replace with actual endpoint)
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			// Success simulation
			submitStatus = 'success';
			submitMessage = 'Thank you for your message! We\'ll get back to you within 24 hours.';
			
			// Reset form
			formData = {
				name: '',
				email: '',
				subject: '',
				category: '',
				message: ''
			};
		} catch (error) {
			submitStatus = 'error';
			submitMessage = 'There was an error sending your message. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
	
	// Contact information
	const contactInfo = {
		management: {
			title: 'Management & Booking',
			contact: 'Sarah Mitchell',
			email: 'booking@shamimminoo.com',
			phone: '+33 1 42 86 17 30',
			address: 'Paris, France'
		},
		press: {
			title: 'Press & Media Relations',
			contact: 'Media Department',
			email: 'press@shamimminoo.com',
			phone: '+33 1 42 86 17 31',
			address: 'Paris, France'
		},
		education: {
			title: 'Educational Inquiries',
			contact: 'Education Team',
			email: 'education@shamimminoo.com',
			phone: '+33 1 42 86 17 32',
			address: 'Paris, France'
		}
	};
</script>

<svelte:head>
	<title>Contact - Shamim Minoo | Get in Touch</title>
	<meta name="description" content="Contact Shamim Minoo for performance bookings, press inquiries, masterclasses, and artistic collaborations. Professional representation worldwide." />
</svelte:head>

<Header />

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary playfair-display-bold mb-6 leading-tight">
					Get in Touch
				</h1>
				<p class="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
					Whether you're interested in booking a performance, scheduling a masterclass, 
					or exploring artistic collaborations, we'd love to hear from you.
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎼 Performance Bookings</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">📰 Press Inquiries</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🎓 Educational Programs</span>
					<span class="bg-primary/10 px-4 py-2 rounded-full">🤝 Collaborations</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Contact Section -->
	<section class="py-16 md:py-20 lg:py-24 bg-background relative">
		<div class="container mx-auto px-4">
			<div class="max-w-7xl mx-auto">
				<div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
					<!-- Contact Form -->
					<div class="lg:col-span-7">
						<div class="bg-gradient-to-br from-background/80 to-muted/20 p-8 lg:p-10 rounded-2xl border border-primary/20 shadow-xl">
							<h2 class="text-3xl md:text-4xl font-bold text-primary playfair-display-bold mb-6">Send a Message</h2>
							<p class="text-foreground/80 mb-8 leading-relaxed">
								Fill out the form below and we'll respond to your inquiry as soon as possible. 
								For urgent matters, please contact us directly using the information provided.
							</p>
							
							<form on:submit={handleSubmit} class="space-y-6">
								<!-- Name and Email Row -->
								<div class="grid md:grid-cols-2 gap-6">
									<div>
										<label for="name" class="block text-sm font-semibold text-foreground mb-2">
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											bind:value={formData.name}
											required
											class="w-full px-4 py-3 bg-background/80 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
											placeholder="Your full name"
										/>
									</div>
									<div>
										<label for="email" class="block text-sm font-semibold text-foreground mb-2">
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											bind:value={formData.email}
											required
											class="w-full px-4 py-3 bg-background/80 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
											placeholder="your@email.com"
										/>
									</div>
								</div>
								
								<!-- Category and Subject Row -->
								<div class="grid md:grid-cols-2 gap-6">
									<div>
										<label for="category" class="block text-sm font-semibold text-foreground mb-2">
											Inquiry Type *
										</label>
										<select
											id="category"
											bind:value={formData.category}
											required
											class="w-full px-4 py-3 bg-background/80 border border-primary/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
										>
											<option value="">Select inquiry type</option>
											{#each contactCategories as category}
												<option value={category.value}>{category.label}</option>
											{/each}
										</select>
									</div>
									<div>
										<label for="subject" class="block text-sm font-semibold text-foreground mb-2">
											Subject *
										</label>
										<input
											type="text"
											id="subject"
											bind:value={formData.subject}
											required
											class="w-full px-4 py-3 bg-background/80 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
											placeholder="Brief subject line"
										/>
									</div>
								</div>
								
								<!-- Message -->
								<div>
									<label for="message" class="block text-sm font-semibold text-foreground mb-2">
										Message *
									</label>
									<textarea
										id="message"
										bind:value={formData.message}
										required
										rows="6"
										class="w-full px-4 py-3 bg-background/80 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
										placeholder="Please provide details about your inquiry, including preferred dates for performances, event details, or any specific requirements..."
									></textarea>
								</div>
								
								<!-- Submit Button -->
								<div class="pt-4">
									<button
										type="submit"
										disabled={isSubmitting}
										class="w-full bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-sm hover:bg-primary/80 disabled:bg-primary/50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
									>
										{#if isSubmitting}
											<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
											Sending Message...
										{:else}
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
											</svg>
											Send Message
										{/if}
									</button>
								</div>
								
								<!-- Submit Message -->
								{#if submitMessage}
									<div class="p-4 rounded-lg {submitStatus === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}">
										<p class="text-sm font-medium">{submitMessage}</p>
									</div>
								{/if}
							</form>
						</div>
					</div>
					
					<!-- Contact Information Sidebar -->
					<div class="lg:col-span-5">
						<div class="space-y-6">
							<div class="bg-gradient-to-br from-primary/15 to-muted/20 p-8 rounded-2xl border border-primary/20">
								<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-6">Contact Information</h3>
								<p class="text-foreground/80 mb-8 leading-relaxed">
									Our professional team is here to assist you with all inquiries. 
									We typically respond within 24 hours during business days.
								</p>
								
								<div class="space-y-6">
									{#each Object.entries(contactInfo) as [key, info]}
										<div class="bg-background/60 p-6 rounded-xl border border-primary/10">
											<h4 class="font-bold text-foreground mb-3 playfair-display-bold">{info.title}</h4>
											<div class="space-y-2 text-sm">
												<div class="flex items-center gap-3">
													<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
													</svg>
													<span class="text-foreground/80">{info.contact}</span>
												</div>
												<div class="flex items-center gap-3">
													<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
													</svg>
													<a href="mailto:{info.email}" class="text-primary hover:underline">{info.email}</a>
												</div>
												<div class="flex items-center gap-3">
													<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
													</svg>
													<a href="tel:{info.phone}" class="text-foreground/80 hover:text-primary transition-colors">{info.phone}</a>
												</div>
												<div class="flex items-center gap-3">
													<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
													</svg>
													<span class="text-foreground/80">{info.address}</span>
												</div>
											</div>
										</div>
									{/each}
								</div>
							</div>
							
							<!-- Response Time Info -->
							<div class="bg-gradient-to-br from-background/80 to-muted/20 p-6 rounded-xl border border-primary/20">
								<h4 class="font-bold text-primary mb-3 playfair-display-bold flex items-center gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Response Times
								</h4>
								<ul class="space-y-2 text-sm text-foreground/80">
									<li class="flex items-center gap-2">
										<span class="w-2 h-2 bg-green-500 rounded-full"></span>
										Performance bookings: Within 24 hours
									</li>
									<li class="flex items-center gap-2">
										<span class="w-2 h-2 bg-primary rounded-full"></span>
										Press inquiries: Same business day
									</li>
									<li class="flex items-center gap-2">
										<span class="w-2 h-2 bg-blue-500 rounded-full"></span>
										General inquiries: Within 48 hours
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Social Media & Location -->
	<section class="py-16 md:py-20 bg-gradient-to-br from-muted/10 to-primary/5 relative">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<!-- Social Media -->
					<div class="text-center lg:text-left">
						<h2 class="text-3xl md:text-4xl font-bold text-primary playfair-display-bold mb-6">Connect Online</h2>
						<p class="text-foreground/80 mb-8 leading-relaxed">
							Follow Shamim's journey and stay updated with the latest performances, 
							achievements, and behind-the-scenes content.
						</p>
						
						<div class="flex flex-wrap justify-center lg:justify-start gap-4">
							<a href="#instagram" class="bg-background/60 hover:bg-primary/20 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center gap-3 text-foreground hover:text-primary">
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559l1.372-1.372c.471.471 1.122.764 1.825.764c1.424 0 2.577-1.153 2.577-2.577S9.873 9.667 8.449 9.667s-2.577 1.153-2.577 2.577c0 .703.293 1.354.764 1.825L5.264 15.43c-.948-.749-1.559-1.9-1.559-3.197c0-2.249 1.826-4.075 4.075-4.075s4.075 1.826 4.075 4.075S10.729 16.308 8.449 16.308z"/>
								</svg>
								<span class="font-semibold">Instagram</span>
							</a>
							
							<a href="#youtube" class="bg-background/60 hover:bg-primary/20 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center gap-3 text-foreground hover:text-primary">
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
								</svg>
								<span class="font-semibold">YouTube</span>
							</a>
							
							<a href="#facebook" class="bg-background/60 hover:bg-primary/20 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center gap-3 text-foreground hover:text-primary">
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
								<span class="font-semibold">Facebook</span>
							</a>
						</div>
					</div>
					
					<!-- Location Info -->
					<div class="bg-gradient-to-br from-background/80 to-muted/20 p-8 rounded-2xl border border-primary/20">
						<h3 class="text-2xl font-bold text-primary playfair-display-bold mb-6">Location</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-4">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<div>
									<h4 class="font-bold text-foreground mb-2">Based in Paris, France</h4>
									<p class="text-foreground/80 text-sm leading-relaxed">
										Currently studying at the Conservatoire National Supérieur de Musique et de Danse de Paris. 
										Available for international performances and collaborations worldwide.
									</p>
								</div>
							</div>
							
							<div class="flex items-start gap-4">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<div>
									<h4 class="font-bold text-foreground mb-2">International Availability</h4>
									<p class="text-foreground/80 text-sm leading-relaxed">
										Accepting bookings for concerts, festivals, and educational programs across Europe, 
										North America, and beyond. Travel arrangements can be coordinated.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-16 md:py-20 bg-background relative">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary playfair-display-bold mb-6">Frequently Asked Questions</h2>
					<p class="text-lg text-muted-foreground">Quick answers to common inquiries</p>
				</div>
				
				<div class="space-y-6">
					<div class="bg-gradient-to-br from-background/80 to-muted/20 p-6 rounded-xl border border-primary/20">
						<h3 class="font-bold text-foreground mb-3 playfair-display-bold">How far in advance should performance bookings be made?</h3>
						<p class="text-foreground/80 text-sm leading-relaxed">
							We recommend booking performances at least 3-6 months in advance to ensure availability. 
							For major festivals or special events, earlier booking is preferred. However, we can sometimes 
							accommodate shorter-notice requests depending on schedule availability.
						</p>
					</div>
					
					<div class="bg-gradient-to-br from-background/80 to-muted/20 p-6 rounded-xl border border-primary/20">
						<h3 class="font-bold text-foreground mb-3 playfair-display-bold">What repertoire does Shamim perform?</h3>
						<p class="text-foreground/80 text-sm leading-relaxed">
							Shamim's repertoire spans classical, baroque, romantic, and contemporary works for solo harp, 
							harp with orchestra, and chamber music. She also incorporates elements from Persian musical 
							traditions in special programs. Specific repertoire can be tailored to your event needs.
						</p>
					</div>
					
					<div class="bg-gradient-to-br from-background/80 to-muted/20 p-6 rounded-xl border border-primary/20">
						<h3 class="font-bold text-foreground mb-3 playfair-display-bold">Are masterclasses available worldwide?</h3>
						<p class="text-foreground/80 text-sm leading-relaxed">
							Yes, Shamim offers both in-person and virtual masterclasses for students and institutions 
							worldwide. Sessions can be customized for different skill levels and can include technique, 
							interpretation, and cultural aspects of harp performance.
						</p>
					</div>
					
					<div class="bg-gradient-to-br from-background/80 to-muted/20 p-6 rounded-xl border border-primary/20">
						<h3 class="font-bold text-foreground mb-3 playfair-display-bold">What technical requirements are needed for performances?</h3>
						<p class="text-foreground/80 text-sm leading-relaxed">
							Technical requirements vary by venue and program. Our team will provide detailed technical 
							riders upon booking confirmation, including stage setup, lighting, and acoustic requirements. 
							We work closely with venue technical teams to ensure optimal performance conditions.
						</p>
					</div>
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
	
	/* Form styling enhancements */
	input:focus, select:focus, textarea:focus {
		box-shadow: 0 0 0 3px rgba(140, 121, 86, 0.1);
	}
	
	select option {
		background-color: hsl(210, 15%, 8%);
		color: hsl(210, 10%, 85%);
	}
	
	/* Loading animation */
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	
	.animate-spin {
		animation: spin 1s linear infinite;
	}
	
	/* Social media hover effects */
	a:hover svg {
		transform: scale(1.1);
		transition: transform 0.3s ease;
	}
</style>