<script lang="ts">
	import Theme from './theme.svelte';
	import World from './world.svelte';
	import GameCard from './Game.svelte';
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types.js';
	import Icon from '@/lib/components/icon.svelte';
	export let data: PageData;

	// Import games data
	const projects = import.meta.glob("../games/*.md", {
		eager: true,
	}) as any;
	const images = import.meta.glob("../games/*.{png,jpg,svg}", {
		eager: true,
	}) as any;

	function trimName(id: string) {
		return id.match(/\.\.\/games\/(.*)\.md$/)?.[1];
	}

	// Sort projects by date (most recent first)
	$: projectsByDate = Object.keys(projects).sort(
		(a, b) => projects[b].date - projects[a].date
	);
</script>

<div class="relative min-h-screen flex flex-col pointer-events-none">
	<div class="absolute h-screen top-0 left-0 pointer-events-none">
		<World />
	</div>
	<div class="min-h-screen w-full flex flex-col items-center justify-start top-0 left-0 z-20 pointer-events-none">
		<div class="absolute top-0 left-0 w-full p-4 z-20">
			<div class="w-full flex items-center justify-between sm:justify-end pointer-events-auto">
				<div class="flex w-full justify-start items-center">
					<Icon src="icons/email.svg" alt="email" href="mailto:contact@ygda.org"/>
					<Icon src="icons/github.svg" alt="github" href="https://github.com/ygda-org"/>
					<Icon src="icons/facebook.svg" alt="facebook" href="https://www.facebook.com/groups/2447812362188654"/>
					<Icon src="icons/discord.svg" alt="discord" href="https://discord.gg/a4TJyFUqaX"/>
				</div>
				<Theme />
			</div>
		</div>
		<div class="mt-20">
			<div class="flex items-center justify-center pointer-events-auto">
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
		</div>
	</div>

	<!-- Games Section -->
	<div class="bg-background pointer-events-auto">
		<div class="mx-auto max-w-[1152px] px-4 sm:px-6 py-12">
			<h2 class="text-3xl font-bold text-center mb-8">Our Games</h2>
			{#each projectsByDate as id (id)}
				<section class="py-10" id={trimName(id)}>
					<GameCard data={projects[id]} {images} />
				</section>
			{/each}
		</div>
	</div>

	<div class="min-h-screen flex items-center justify-center relative bg-[#331905] bg-opacity-80">
		<img src="/images/classroom.jpg" alt="lecture classroom" class="w-full h-full object-cover absolute -z-10">
		<div class="md:max-w-2xl text-xl text-white text-center">
			<p class="text-2xl font-extrabold">Join on Discord.</p>
			<p class="text-xl font-thin">No background experience needed, except being able to RTFM.</p>
		</div>
	</div>
	<footer class="absolute bottom-8 flex flex-col items-center justify-center w-full pointer-events-auto">
		<p class="mt-4 text-center text-base text-white">
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
