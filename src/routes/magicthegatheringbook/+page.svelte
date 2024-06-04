<script>
  import { onMount } from 'svelte';
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
</script>

<main class="content">
  <section class="hero">
    <div class="container">
      <img src="/aftm-header.png" alt="AFTM Header" class="header-image" />
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl font-bold">Do you want to spend all your money and time on the sickest card game ever?</CardTitle>
          <CardDescription>So you’ve decided to dive a little deeper into the clusterfuck of rule bending and creative destruction that is Magic: the Gathering. Perhaps you’re a newer player who wants to get a little insight on how more experienced players build decks, or maybe you already know how to fill a library, and just want to see what some dumb guys on the internet have to say about their strategy. Either way, this book is now yours. Sick. Stay with us and we will teach you how to have a good time and (hopefully) not suck at this game we love.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>

  <section class="book-content">
    <div class="container">
      <Card>
        <CardContent>
          <p>This book is for players who are already familiar with how to play Magic: the Gathering and are interested in learning how to build decks that aren’t trash. It was written by two guys who have, combined, over twenty-five years of experience throwing an alarming amount of time and money into the battlefield. We have created, edited, dismantled and rebuilt decks using strategies tried-and-true to utterly harebrained, and everything in between.</p>

          <p>In it, you will find four major sections: Core Concepts, Advanced Strategy, Strategies That Are Straight-up Cancer, and Abject Fucking Nonsense (our personal favorite). You will learn about synergy, bending and breaking the rules, and how to not play like an asshole. Hopefully by the end of this not only will you be a better Magic player, but you'll also have more fun with the game. Thanks for taking the time to read our stupid book, we hope you enjoy it.</p>

          <h2>Core Concepts</h2>
          <h3>Basic Strategy</h3>
          <p>Magic: the Gathering is a game of choices. First published by Wizards of the Coast in 1993, the concept of the game was fairly simple: players play lands, which produce mana that’s used to pay for spells and creatures that, hopefully, make whoever you’re playing against super dead.</p>

          <p>Since 1993 there have been over 170 sets of cards released, each adding additional rules and ways to play the game. It never gets old, but it’s definitely not simple. It’s like Nathan Fillion said:</p>

          <blockquote>And that’s where we come in.</blockquote>

          <p>This isn’t a book to teach you how the game works. There are plenty of blogs and tutorials for that. No, this book is about teaching beginner level players how not to play like a blind dog chasing a frisbee.</p>

          <p>You’ll get a decent foundation in the first few chapters which cover card types and their uses, combining multiple colors, and building a deck that doesn’t suck. Later we cover intermediate game strategy (generating massive mana, aggro, drawing more cards than Siegfried and Roy) and some more...advanced concepts.</p>

          <p>For now, let’s start with the most basic principles of Magic: how the gosh darn heck do I build a deck?</p>
        </CardContent>
      </Card>
    </div>
  </section>

  <section class="download-section">
    <div class="container">
      <Button as="a" href="/AFTM_How-to-Improve-Your-MTG-Strategy-Public-Copy.pdf" download="AFTM_How-to-Improve-Your-MTG-Strategy.pdf" class="download-link">Download the Full PDF</Button>
    </div>
  </section>
</main>

<style>
  .content {
    font-family: Arial, sans-serif;
  }
  .hero {
    background-color: #f7f7f7;
    padding: 2rem 1rem;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
  }
  .container {
    max-width: 800px;
    margin: auto;
    padding: 0 1rem;
  }
  .header-image {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
  .book-content {
    padding: 2rem 1rem;
  }
  .book-content h2 {
    font-size: 2rem;
    margin-top: 2rem;
  }
  .book-content h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  .book-content p {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  blockquote {
    font-size: 1.2rem;
    color: #888;
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 3px solid #ccc;
  }
  .download-section {
    text-align: center;
    padding: 2rem 1rem;
    background-color: #f1f1f1;
  }
</style>
