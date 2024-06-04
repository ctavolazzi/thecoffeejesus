<script>
  import { onMount } from 'svelte';

  let iframeSrc = 'https://www.gofundme.com/f/coffeejesuscoffee/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=sl:0faab629-6336-4fd1-9915-65a62c8b08f7';

  onMount(() => {
    const iframe = document.getElementById('gofundme-iframe');
    iframe.src = iframeSrc;
  });
</script>

<iframe id="gofundme-iframe" class="gofundme-iframe" frameborder="0" scrolling="no"></iframe>

<style>
  .gofundme-iframe {
    width: 100%;
    height: 510px; /* Set an appropriate fixed height */
    border: none;
    margin: 0; /* Ensure no margin */
    padding: 0; /* Ensure no padding */
    display: block; /* Ensure block display to remove any inline spacing */
  }

  /* Ensure the container around the iframe has no padding or margin */
  .gofundme-widget {
    padding: 0;
    margin: 0;
  }
</style>
