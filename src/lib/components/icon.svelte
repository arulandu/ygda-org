<script lang="ts">
    interface Props {
        href: string;
        src: string;
        alt: string;
    }

    let { href, src, alt }: Props = $props();
</script>
<a {href} class="inline-block m-2 rounded-full bg-accent scale-95 hover:scale-100 transition-all ">
    <img {src} {alt} class="w-10 h-10 p-2 object-contain"/>
</a>