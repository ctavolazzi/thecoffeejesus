<script lang="ts">
  export let data;

  const { post } = data;
</script>

<style>
  .blog-post-container {
    max-width: 800px;
    margin: auto;
    padding: 2rem 1rem;
  }

  .blog-post-content {
    margin-top: 1rem;
  }

  .main-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
</style>

<div class="blog-post-container">
  <h1 class="text-3xl font-bold mb-4">{post.title}</h1>
  <p class="text-gray-500 mb-4">{post.date}</p>
  {#if post.main_image_url}
    <img src={post.main_image_url} alt={post.title} class="main-image" />
  {/if}
  <div class="blog-post-content">
    {@html post.content}
  </div>
</div>
