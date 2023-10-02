<script lang="ts">
	//@ts-nocheck // Can't cast window to any so we skipping this :))
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { PUBLIC_GA_ID as GA_ID } from '$env/static/public';

	if (browser) {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag(): void {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', GA_ID);
	}

	$: {
		if (browser) {
			window.gtag('config', GA_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
</svelte:head>
