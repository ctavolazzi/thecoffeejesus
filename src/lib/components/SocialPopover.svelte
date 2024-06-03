<!-- <script>
  export let open = false;
  export let closePopover;

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopover();
    }
  };
</script>

<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" on:click={handleOutsideClick} class:invisible={!open}>
  <div class="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative">
    <button class="absolute top-2 right-2" on:click={closePopover}>&times;</button>
    <h2 class="text-xl font-bold mb-4">My Profiles</h2>
    <div>
      <h3 class="text-lg font-semibold">Instagram</h3>
      <iframe src="https://www.instagram.com/thecoffeejesus/embed" width="100%" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
    </div>
    <div class="mt-4">
      <h3 class="text-lg font-semibold">TikTok</h3>
      <iframe src="https://www.tiktok.com/embed/v2/@thecoffeejesus/embed" width="100%" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
    </div>
  </div>
</div>

<style>
  .invisible {
    display: none;
  }
</style> -->


<script>
  export let open = false;
  export let closePopover;

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopover();
    }
  };
</script>

<div class:invisible={!open} class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" on:click={handleOutsideClick}>
  <div class="bg-white p-4 rounded-lg shadow-lg max-w-md w-full max-h-full overflow-y-auto relative">
    <button class="absolute top-2 right-2" on:click={closePopover}>&times;</button>
    <h2 class="text-xl font-bold mb-4">My Profiles</h2>
    <div>
      <h3 class="text-lg font-semibold">Instagram</h3>
      <iframe src="https://www.instagram.com/thecoffeejesus/embed" width="100%" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
    </div>
    <div class="mt-4">
      <h3 class="text-lg font-semibold">TikTok</h3>
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@thecoffeejesus" data-unique-id="thecoffeejesus" data-embed-type="creator" style="max-width: 780px; min-width: 288px;">
        <section>
          <a target="_blank" href="https://www.tiktok.com/@thecoffeejesus?refer=creator_embed">@thecoffeejesus</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  </div>
</div>

<style>
  .invisible {
    display: none;
  }

  .overflow-y-auto {
    overflow-y: auto;
  }
</style>
