<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';

  let blogPosts = [];

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
      } else {
        blogPosts = data;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  onMount(() => {
    fetchBlogPosts();
  });
</script>

<style>
  .blog-container {
    max-width: 800px;
    margin: auto;
    padding: 2rem 1rem;
  }

  .blog-card {
    margin-bottom: 1.5rem;
  }

  .blog-link {
    color: #1d4ed8;
    text-decoration: none;
  }

  .blog-link:hover {
    text-decoration: underline;
  }
</style>

<div class="blog-container">
  <h1 class="text-3xl font-bold mb-6">Blog</h1>
  {#each blogPosts as post}
    <Card class="blog-card">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.description}</p>
      </CardContent>
      <CardFooter>
        <a href={`/blog/${post.slug}`} class="blog-link">Read More</a>
      </CardFooter>
    </Card>
  {/each}
</div>
