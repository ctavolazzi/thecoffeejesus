<script>
  import { onMount } from 'svelte';

  let iframeSrc = 'https://www.gofundme.com/f/establish-a-creative-studio-in-downtown-chico/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=sl:3266eb60-d840-4eaa-9ee7-e990a19fa209';

  onMount(() => {
    const iframe = document.getElementById('gentle-bull-iframe');
    iframe.src = iframeSrc;
  });
</script>

<iframe id="gentle-bull-iframe" class="gofundme-iframe" frameborder="0" scrolling="no"></iframe>

<style>
  .gofundme-iframe {
    width: 100%;
    height: 510px;
    border: none;
  }
</style>
