<script lang="ts">
	import { onMount } from "svelte";
	import { createScene } from "./game";
	import { Mode, theme } from "./stores";

    let el: HTMLCanvasElement;

    onMount(() => {
        createScene(el, window)
    })
    
</script>

<canvas bind:this={el} class={`${$theme.mode == Mode.DARK ? "bg-black" : "bg-background"} pointer-events-auto`}></canvas>