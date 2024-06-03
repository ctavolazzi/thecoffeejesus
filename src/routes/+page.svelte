<script lang="ts">
  import { onMount } from 'svelte';
  import { Root as CardRoot, Header as CardHeader, Title as CardTitle, Description as CardDescription, Content as CardContent } from "$lib/components/ui/card";
  import { Separator } from '$lib/components/ui/separator';
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { goto } from '$app/navigation';
  import SocialPopover from '$lib/components/SocialPopover.svelte';
  import { supabase } from '$lib/supabaseClient';

  let socialMediaHandle = '';
  let socialMediaPlatform = '';
  let followersCount = '';
  let popoverOpen = false;

  async function handleSubmit() {
    console.log('Social media handle submitted:', socialMediaHandle);
    console.log('Social media platform submitted:', socialMediaPlatform);
    console.log('Followers count submitted:', followersCount);

    const { data, error } = await supabase
      .from('profiles')
      .insert([{ handle: socialMediaHandle, platform: socialMediaPlatform, followers: followersCount }]);

    if (error) {
      console.error('Error saving profile:', error);
    } else {
      console.log('Profile saved:', data);
    }

    // Clear the form fields
    socialMediaHandle = '';
    socialMediaPlatform = '';
    followersCount = '';

    // Redirect to the thank you page
    goto('/thank-you');
  }

  function openPopover() {
    popoverOpen = true;
  }

  function closePopover() {
    popoverOpen = false;
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
  }

  .hero h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  .hero p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
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
    height: auto;
  }

  .hero-image-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
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
        Do you want to escape the grind and do more things that matter? I'm here to help you grow, live more authentically, and overcome your fears.
      </p>
      <Dialog.Root>
        <Dialog.Trigger class={`${buttonVariants({ variant: "blackBorder" })} font-bold`}>
          <span class="font-bold">Start Your Journey</span>
        </Dialog.Trigger>
        <Dialog.Content class="sm:max-w-[425px]">
          <Dialog.Header>
            <Dialog.Title>Enter Your Social Media Details</Dialog.Title>
            <Dialog.Description>
              Please provide your social media handle, platform, and current number of followers. Click save when you're done.
            </Dialog.Description>
          </Dialog.Header>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="handle" class="text-right">Handle</Label>
              <Input id="handle" bind:value={socialMediaHandle} placeholder="e.g., @thecoffeejesus" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="platform" class="text-right">Platform</Label>
              <Input id="platform" bind:value={socialMediaPlatform} placeholder="e.g., Twitter" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="followers" class="text-right">Followers</Label>
              <Input id="followers" bind:value={followersCount} placeholder="e.g., 5000" class="col-span-3" />
            </div>
          </div>
          <Dialog.Footer>
            <Button type="button" on:click={handleSubmit}>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  </div>
</section>

<div class="container">
  <h2 class="text-2xl font-bold">About Me</h2>
  <section class="section">
    <CardRoot>
      <CardHeader>
        <CardTitle>Who is Christopher Tavolazzi?</CardTitle>
        <CardDescription>Learn more about <a href="#" on:click|preventDefault={openPopover} class="text-primary underline">@thecoffeejesus</a></CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          I'm Christopher Tavolazzi, known online as <a href="#" on:click|preventDefault={openPopover} class="text-primary underline">@thecoffeejesus</a>. I'm a creator, artist, musician, software developer, and more. My work spans across various fields, from art and music to software development and AI research.
        </p>
        <p>
          My mission is to empower you to empower yourself. <span style="display: block; height: .25em;"></span>
          I want you to unlock your full potential through wellness, financial growth, and skill enhancement. <span style="display: block; height: .25em;"></span>
          I strive for personal freedom and full-time mobility, all while living with increasing integrity.
        </p>
        <p>
          Previously, I worked as a tech lead at Adobe and as a designer for AES Solar. <span style="display: block; height: .25em;"></span>
          I left my job to help my disabled mother with her mobility needs, which inspired me to take my social media presence seriously. <span style="display: block; height: .25em;"></span>
          In just two months I transformed my social media accounts, growing from 4,000 to 30,000 followers, with several videos over 1 million views. <span style="display: block; height: .25em;"></span>
          I found my niche discussing science and tech while spreading a positive message.
        </p>
        <p>
          Now, I help people grow their accounts, monetize their creativity, and overcome their fears and insecurities. <span style="display: block; height: .25em;"></span>
          My mission is to empower individuals to empower themselves, showing them that they too can achieve remarkable growth and success.
        </p>
      </CardContent>
    </CardRoot>
  </section>

  <section class="section">
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Christopher's Projects</h2>
      <CardRoot>
        <CardHeader>
          <CardTitle>Gentle Bull Co (GBC)</CardTitle>
          <CardDescription>Community Art Organization</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            A community art organization dedicated to fostering creativity and collaboration.
          </p>
        </CardContent>
      </CardRoot>
      <CardRoot>
        <CardHeader>
          <CardTitle>AIECO</CardTitle>
          <CardDescription>AI/ML and R&D</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Specializing in AI/ML and R&D, pushing the boundaries of technology and innovation.
          </p>
        </CardContent>
      </CardRoot>
      <CardRoot>
        <CardHeader>
          <CardTitle>Tavolazzi Tavern</CardTitle>
          <CardDescription>YouTube Channel</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            My YouTube channel where I discuss news and tech commentary.
          </p>
        </CardContent>
      </CardRoot>
      <CardRoot>
        <CardHeader>
          <CardTitle>Surviving the Singularity</CardTitle>
          <CardDescription>Comprehensive Guide</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            A comprehensive guide on surviving and thriving in the age of AI and rapid technological change.
          </p>
        </CardContent>
      </CardRoot>
      <CardRoot>
        <CardHeader>
          <CardTitle>Escape Capitalism</CardTitle>
          <CardDescription>Financial Independence</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Providing free educational resources and consultations on achieving financial independence and alternative living.
          </p>
        </CardContent>
      </CardRoot>
      <CardRoot>
        <CardHeader>
          <CardTitle>Coffee Jesus Coffee</CardTitle>
          <CardDescription>New Coffee Line</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Coffee Jesus Coffee is my new socially conscious coffee line, supplied by Stoble Coffee Roasters in Chico, CA. <span style="display: block; height: .25em;"></span>
            We are committed to making a difference, donating 10% of our profits to help families in Gaza and another 10% to support local communities here in the US.
          </p>
        </CardContent>
      </CardRoot>
    </div>
  </section>

  <section class="section">
    <h2 class="text-2xl font-bold">Get in Touch</h2>
    <CardRoot>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Get in touch with Christopher Tavolazzi</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          If you want to get in touch, feel free to reach out via my social media channels or through email. <span style="display: block; height: .25em;"></span>
          Email: <a href="mailto:christopher@gmail.com" class="text-primary">christopher@gmail.com</a> <span style="display: block; height: .25em;"></span>
          Twitter: <a href="https://twitter.com/thecoffeejesus" class="text-primary">@thecoffeejesus</a>
        </p>
      </CardContent>
    </CardRoot>
  </section>

  <Separator class="my-4" />

  <section class="section">
    <h2 class="text-2xl font-bold">100% Satisfaction Guarantee</h2>
    <CardRoot>
      <CardHeader>
        <CardTitle>Your Growth is my Top Priority</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          I'm committed to ensuring your success. If you're not completely satisfied with the work I do, I'll work with you to make it right or provide a full refund. <span style="display: block; height: .25em;"></span>
        </p>
      </CardContent>
    </CardRoot>
  </section>
</div>

<SocialPopover open={popoverOpen} closePopover={closePopover} />
