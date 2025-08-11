<script lang="ts">
	import '@/app.css';
	import {theme} from "./stores"
	import { browser } from '$app/environment';
	import Analytics from '@/lib/components/analytics.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Analytics/>
<div class="relative app min-h-screen text-foreground transition-all {$theme.mode}">
	<main>
		{@render children?.()}
	</main>
</div>
