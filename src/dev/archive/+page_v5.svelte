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
    /* padding: 1rem 1rem; */
    /* background: #f7f7f7; */
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

  .hero-image {
    width: 600px;
    height: auto; /* This maintains the aspect ratio */
  }

  .hero-image-container {
    display: flex;
    justify-content: center;
  }
  .hero-image-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .hero-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>

<section class="hero">

<div class="container mx-auto py-12 px-6 max-w-4xl bg-white shadow-md rounded-lg">
  <div class="text-center">
    <h2 class="text-2xl font-bold">Thank you for being here ❣️</h2>
    <br>
    <div class="hero-image-container">
      <img src="/hero_image.png" alt="Christopher Tavolazzi" class="hero-image" />
    </div>
    <p class="text-gray-700 mt-4">
      Do you want to escape the grind and do more things that matter? I'm here to help you grow, monetize your creativity, and overcome your fears.
    </p>
  </div>
</div>
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
  <h2 class="text-2xl font-bold">About Me</h2>
  <section class="section">
    <Root>
      <Header>
        <Title>Who is Christopher Tavolazzi?</Title>
        <Description>Learn more about @thecoffeejesus</Description>
      </Header>
      <Content>
        <p>
          I'm Christopher Tavolazzi, known online as @thecoffeejesus. I'm a creator, artist, musician, software developer, and more. My work spans across various fields, from art and music to software development and AI research.
        </p>
        <p>
          My mission is to unlock potential through wellness, financial growth, and skill enhancement. I strive for personal freedom and full-time mobility, all while living with increasing integrity.
        </p>
        <p>
          Previously, I worked as a tech lead at Adobe and as a designer for AES Solar. I left my job to help my disabled mother with her mobility needs, which inspired me to take my social media presence seriously. Applying all the growth strategies I could find, I transformed my social media accounts, growing from 4,000 to 30,000 followers in just two months. I found my niche discussing science and tech while spreading a positive message.
        </p>
        <p>
          Now, I help people grow their accounts, monetize their creativity, and overcome their fears and insecurities. My mission is to empower individuals to empower themselves, showing them that they too can achieve remarkable growth and success.
        </p>
      </Content>
    </Root>
  </section>

  <section class="section">
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Christopher's Projects</h2>
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
    <h2 class="text-2xl font-bold">Get in Touch</h2>
    <Root>
      <Header>
        <Title>Contact Me</Title>
        <Description>Get in touch with Christopher Tavolazzi</Description>
      </Header>
      <Content>
        <p>If you want to get in touch, feel free to reach out via my social media channels or through email.</p>
        <p>Email: <a href="mailto:christopher@gmail.com" class="text-primary">christopher@gmail.com</a></p>
        <p>Twitter: <a href="https://twitter.com/thecoffeejesus" class="text-primary">@thecoffeejesus</a></p>
      </Content>
    </Root>
  </section>

  <Separator class="my-4" />

  <section class="section">
    <h2 class="text-2xl font-bold">100% Satisfaction Guarantee</h2>
    <Root>
      <Header>
        <Title>Your Growth is my Top Priority</Title>
      </Header>
      <Content>
        <p>
          I'm committed to ensuring your success. If you're not completely satisfied with the work I do, I'll work with you to make it right or provide a full refund.
        </p>
      </Content>
    </Root>
  </section>
</div>
