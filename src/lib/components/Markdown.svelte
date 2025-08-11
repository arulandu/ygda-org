<script lang="ts">
    import { marked } from "marked";
  
    export let source: string;
  
    marked.use({
      renderer: {
        link(args) {
          const { href, title, text } = args;
          let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
          if (title) {
            out += ' title="' + title + '"';
          }
          out += ">" + text + "</a>";
          console.log(out);
          return out;
        },
      },
    });
  
    $: html = marked.parse(source);
  </script>
  
  <div class="md-output">
    {@html html}
  </div>
  
  <style lang="postcss">
    .md-output :global(p) {
      @apply mb-4;
    }
  
    .md-output :global(strong) {
      @apply font-semibold;
    }
  
    .md-output :global(code) {
      @apply text-[95%];
    }
  </style>