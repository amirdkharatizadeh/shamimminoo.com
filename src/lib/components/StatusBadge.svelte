<script>
	export let type = 'default'; // 'featured', 'upcoming', 'past', 'default', 'success', 'warning', 'info'
	export let text = '';
	export let size = 'default'; // 'small', 'default', 'large'
	
	// Badge type styles
	const typeStyles = {
		featured: 'bg-primary text-primary-foreground',
		upcoming: 'bg-green-600 text-white',
		past: 'bg-muted text-muted-foreground',
		success: 'bg-green-600 text-white',
		warning: 'bg-yellow-600 text-white',
		info: 'bg-blue-600 text-white',
		default: 'bg-primary/20 text-primary'
	};
	
	// Size styles
	const sizeStyles = {
		small: 'px-2 py-1 text-xs',
		default: 'px-3 py-1 text-sm',
		large: 'px-4 py-2 text-base'
	};
	
	$: badgeTypeClass = typeStyles[type] || typeStyles.default;
	$: badgeSizeClass = sizeStyles[size] || sizeStyles.default;
</script>

<span class="{badgeTypeClass} {badgeSizeClass} font-bold uppercase rounded-full shadow-lg">
	{text}
</span>

<style>
	span {
		display: inline-block;
		white-space: nowrap;
	}
</style>