<script lang="ts">
	import { onMount } from "svelte";
	import { createScene } from "./game";

    let el: HTMLCanvasElement;

    onMount(() => {
        createScene(el, window)
    })
</script>

<canvas bind:this={el} class="bg-background"></canvas>