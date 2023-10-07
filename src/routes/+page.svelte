<script lang="ts">
	import Theme from './theme.svelte';

	import Game from './game.svelte';
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types.js';

	export let data: PageData;
</script>

<div class="relative min-h-screen flex flex-col">
	<div class="absolute top-0 left-0 -z-10">
		<Game />
	</div>
	<div class="absolute w-full p-4">
		<div class="w-full flex items-center justify-between sm:justify-end">
			<Theme />
		</div>
	</div>
	<div class="mt-20">
		<div class="flex items-center justify-center">
			<div class="text-center">
				<h1 class="mb-6 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl animate-bounce">
					ygda.<span class="text-accent">org</span>
				</h1>
				<p class="md:max-w-2xl text-xl">
					A community of young developers passionate about building games for fun, social impact,
					and everything in between.
				</p>
			</div>
		</div>

		<footer class="mb-8 flex flex-col items-center justify-center w-full">
			<p class="mt-4 text-center text-base">
				Made with 💖 by <a class=" underline" href="https://arulandu.com">Alvan Caleb Arulandu</a>
			</p>
			<a class="mt-2 block w-fit" href="https://github.com/ygda-org/website">
				<img
					class="h-5"
					src="https://img.shields.io/github/last-commit/ygda-org/website"
					alt="commit tag"
				/>
			</a>
		</footer>
	</div>
</div>
