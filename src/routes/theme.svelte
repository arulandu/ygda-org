<script lang="ts">
	import { theme, Mode } from './stores';

	let toggled = $theme.mode == Mode.DARK;

	const toggle = () => {
		toggled = !toggled;
		$theme.mode = toggled ? Mode.DARK : Mode.LIGHT;
	};
</script>

<div class="flex items-center justify-between">
	<!-- <input
		type="range"
		min="0"
		max="360"
		step="1"
		bind:value={$theme.hue}
		class="mr-4 max-w-xl h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
	/> -->
	<div class="flex justify-center items-center">
		<span class="" />
		<!-- Switch Container -->
		<button
			aria-label="theme toggle"
			class="w-14 h-7 flex items-center bg-accent rounded-full"
			on:click={toggle}
		>
			<!-- Switch -->
			<div
				class="bg-background w-8 h-8 p-1 text-accent flex items-center justify-center rounded-full shadow-md transform {toggled
					? 'translate-x-7'
					: ''} transition-all"
			>
				<span>
					{#if toggled}
						<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{:else}
						<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{/if}
				</span>
			</div>
		</button>
	</div>
</div>
