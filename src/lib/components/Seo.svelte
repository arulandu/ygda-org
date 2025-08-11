<script lang="ts">
  interface Props {
    title: string;
    ogTitle?: string | null;
    description: string;
  }

  let { title, ogTitle = null, description }: Props = $props();
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={ogTitle ?? title} />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content="https://www.ekzhang.com/assets/images/hudson-landscape.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </svelte:head>