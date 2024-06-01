<script lang="ts">
  import { onMount } from 'svelte';
  import { Root, Header, Title, Description, Content, Footer } from "$lib/components/ui/card";
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import { Mail } from "lucide-svelte/icons";

  let email = '';

  function handleSubmit() {
    console.log('Email submitted:', email);
    email = '';
  }

  onMount(() => {
    try {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      script.onerror = () => console.error('Failed to load Stripe script.');
      document.head.appendChild(script);
    } catch (error) {
      console.error('Error during script loading:', error);
    }
  });
</script>

<style>
  .hero {
    text-align: center;
    padding: 4rem 1rem;
    background: #f7f7f7;
  }

  .hero h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  .hero p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .email-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .email-label {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .email-icon {
    margin-right: 0.5rem;
  }

  .email-input-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .container {
    padding: 2rem 1rem;
  }

  .section {
    margin: 2rem 0;
  }

  .card {
    margin-bottom: 1rem;
  }

  .cta-button {
    margin-top: 1rem;
  }
</style>

<section class="hero">
  <h1>Welcome to the World of Christopher Tavolazzi</h1>
  <p>@thecoffeejesus</p>
  <form on:submit|preventDefault={handleSubmit} class="email-form">
    <label for="email" class="email-label">
      <Mail class="email-icon" />
      Enter your email to get started
    </label>
    <div class="email-input-container">
      <input type="email" id="email" placeholder="Your email address" bind:value={email} required class="input input-bordered" />
      <Button type="submit" class="btn btn-primary">
        Start My Journey
      </Button>
    </div>
  </form>
</section>

<div class="container">
  <section class="section">
    <h2>About Me</h2>
    <Root>
      <Header>
        <Title>About Me</Title>
        <Description>Learn more about Christopher Tavolazzi</Description>
      </Header>
      <Content>
        <p>
          I'm Christopher Tavolazzi, known online as @thecoffeejesus. I'm a creator, artist, musician, software developer, and more. My work spans across various fields, from art and music to software development and AI research.
        </p>
        <p>
          My mission is to unlock potential through wellness, financial growth, and skill enhancement. I strive for personal freedom and full-time mobility, all while living with increasing integrity.
        </p>
      </Content>
    </Root>
  </section>

  <section class="section">
    <h2>Projects and Offerings</h2>
    <div class="space-y-4">
      <Root>
        <Header>
          <Title>Gentle Bull Co (GBC)</Title>
          <Description>Community Art Organization</Description>
        </Header>
        <Content>
          <p>A community art organization dedicated to fostering creativity and collaboration.</p>
        </Content>
      </Root>
      <Root>
        <Header>
          <Title>AIECO</Title>
          <Description>AI/ML and R&D</Description>
        </Header>
        <Content>
          <p>Specializing in AI/ML and R&D, pushing the boundaries of technology and innovation.</p>
        </Content>
      </Root>
      <Root>
        <Header>
          <Title>Tavolazzi Tavern</Title>
          <Description>YouTube Channel</Description>
        </Header>
        <Content>
          <p>My YouTube channel where I discuss news and tech commentary.</p>
        </Content>
      </Root>
      <Root>
        <Header>
          <Title>Surviving the Singularity</Title>
          <Description>Comprehensive Guide</Description>
        </Header>
        <Content>
          <p>A comprehensive guide on surviving and thriving in the age of AI and rapid technological change.</p>
        </Content>
      </Root>
      <Root>
        <Header>
          <Title>Escape Capitalism</Title>
          <Description>Financial Independence</Description>
        </Header>
        <Content>
          <p>Providing free educational resources and consultations on achieving financial independence and alternative living.</p>
        </Content>
      </Root>
    </div>
  </section>

  <section class="section">
    <h2>Contact Me</h2>
    <Root>
      <Header>
        <Title>Contact Me</Title>
        <Description>Get in touch with Christopher Tavolazzi</Description>
      </Header>
      <Content>
        <p>If you want to get in touch, feel free to reach out via my social media channels or through email.</p>
        <p>Email: <a href="mailto:christopher@example.com" class="text-primary">christopher@example.com</a></p>
        <p>Twitter: <a href="https://twitter.com/thecoffeejesus" class="text-primary">@thecoffeejesus</a></p>
      </Content>
    </Root>
  </section>

  <Separator class="my-4" />

  <section class="section">
    <h2>100% Satisfaction Guarantee</h2>
    <Root>
      <Header>
        <Title>100% Satisfaction Guarantee</Title>
        <Description>Our Commitment to You</Description>
      </Header>
      <Content>
        <p>
          We're dedicated to creating a memoir that you'll cherish forever. If you're not completely satisfied with your Book of Saint You, we'll work with you to make it right or provide a full refund.
        </p>
      </Content>
    </Root>
  </section>
</div>
