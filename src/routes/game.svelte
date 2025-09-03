<script lang="ts">
    import Markdown from "$lib/components/Markdown.svelte";
    import { formatTime } from "$lib/utils";
    import { Play } from "lucide-svelte";

    type Game = {
      title: string;
      date: string;
      content: string;
      repo: string;
      live: string;
      topics: string[];
      lead: string;
      image: string;
      image_border?: boolean;
      subimages?: string[];
    };
  interface Props {
    data: Game;
    images: Record<string, { default: string }>;
  }

  let { data, images }: Props = $props();
  </script>

  <div class="relative transition-colors rounded-lg p-4 -m-4">

    <!-- Title -->
    <h3 class="text-foreground text-xl font-semibold mb-2">
      <span class="mr-1">{data.title}</span>
      <small class="whitespace-nowrap text-foreground/50 text-base font-normal">
        {formatTime("%B %Y", data.date)}
      </small>
    </h3>

    <!-- Tags (pill bar) -->
    <div class="flex flex-wrap mb-1">
      {#each data.topics as tag}
    
        <div class="flex items-center text-sm font-medium px-1.5 py-[1px] mr-1.5 mb-2 bg-accent/25 rounded-full">{tag}</div>
      {/each}
    </div>

    <!-- Description and image -->
    <div class="space-y-4">
      <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        <div class="col-span-3 md:col-span-2">
          <div class="flex items-center mb-3">
            <p class="text-lg font-light">{data.lead}</p>
            <a 
              href={data.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-accent/75 hover:bg-accent/25 text-white mx-2 p-2 rounded-full transition-colors"
            >
              <Play size={16} />
            </a>
          </div>
          <Markdown source={data.content} />
        </div>
        <div class="col-span-3 md:col-span-1">
          <img
            src={images[`../games/${data.image}`]?.default}
            alt="{data.title} preview image"
            class:border={data.image_border}
            style="width: 350px; height: 200px; object-fit: cover;"
          />
        </div>
      </div>

      {#if data.subimages}
        <div class="hidden md:grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {#each data.subimages as image}
            <div class="col-span-full md:col-span-1">
              <img
                src={images[`../games/${image}`]?.default}
                alt="{data.title} subimage"
                style="width: 350px; height: 200px; object-fit: cover;"
              />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>

