<script lang="ts">
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';

  let books = [
    {
      title: 'Surviving the Singularity',
      description: 'A workbook for helping you navigate and survive in an increasingly AI dominated world.',
      link: 'https://survivingthesingularity.com'
    },
    {
      title: 'A Farewell to Money',
      description: 'A comedic Magic: the Gathering strategy guide for intermediate players.',
      link: '/magicthegatheringbook'
    }
  ];
</script>

<style>
  .books-container {
    max-width: 800px;
    margin: auto;
    padding: 2rem 1rem;
  }

  .book-card {
    margin-bottom: 1.5rem;
  }

  .book-link {
    color: #1d4ed8;
    text-decoration: none;
  }

  .book-link:hover {
    text-decoration: underline;
  }
</style>

<div class="books-container">
  <h1 class="text-3xl font-bold mb-6">Books by Christopher Tavolazzi</h1>
  {#each books as book}
    <Card class="book-card">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Discover the unique insights and engaging storytelling that make these books a must-read.</p>
      </CardContent>
      <CardFooter>
        <a href={book.link} class="book-link">Read More</a>
      </CardFooter>
    </Card>
  {/each}
</div>
