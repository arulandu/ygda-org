<script>
	import '@/app.css';
	import {theme} from "./stores"
	import { browser } from '$app/environment';
	import Analytics from '@/lib/components/analytics.svelte';
</script>

<Analytics/>
<div class="relative app min-h-screen text-foreground transition-all {$theme.mode}">
	<main>
		<slot />
	</main>
</div>
