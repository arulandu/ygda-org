<script lang="ts">
    export let href:string;
    export let src:string;
    export let alt:string;
</script>
<a {href} class="inline-block m-2 rounded-full bg-accent scale-95 hover:scale-100 transition-all ">
    <img {src} {alt} class="w-10 h-10 p-2 object-contain"/>
</a>