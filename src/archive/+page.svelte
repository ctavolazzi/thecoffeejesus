<!-- <script lang="ts">
  import { onMount } from 'svelte';
  import { Root as CardRoot, Header as CardHeader, Title as CardTitle, Description as CardDescription, Content as CardContent } from "$lib/components/ui/card";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import SocialPopover from '$lib/components/SocialPopover.svelte';

  let popoverOpen = false;

  function openPopover() {
    popoverOpen = true;
  }

  function closePopover() {
    popoverOpen = false;
  }

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gofundme.com/static/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);
  });
</script>

<style>
  .hero {
    text-align: center;
    padding: 2rem 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .hero h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  .hero p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #666;
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
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: auto;
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
      <h1 class="text-4xl font-bold">Transform Lives with Every Cup</h1>
      <p class="text-gray-700 mt-4">
        Join us in our mission to create a positive impact through every cup of coffee. Coffee Jesus Coffee is dedicated to supporting families in Gaza and funding community programs in the US focused on literacy and socially conscious entrepreneurship.
      </p>
      <div class="gfm-embed" data-url="https://www.gofundme.com/f/coffeejesuscoffee/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=sl:e4f9830a-95bb-4ac0-b7f8-f3f7e77e11d9"></div>
      <script defer src="https://www.gofundme.com/static/js/embed.js"></script>
    </div>
  </div>
</section>

<div class="container">
  <h2 class="text-2xl font-bold">Our Mission</h2>
  <section class="section">
    <CardRoot>
      <CardHeader>
        <CardTitle>Why We Started Coffee Jesus Coffee</CardTitle>
        <CardDescription>Our story and vision.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Coffee Jesus Coffee was born of a deep passion to do good in the world. We're not rich - far from it. We are starving artists who just want to make a difference and do something meaningful, while giving back with gratitude for everyone who has supported us so far. As a former barista for 4 years in small local coffee shops, I’ve always dreamed of launching my own brand. With my social media handle, <a href="#" on:click|preventDefault={openPopover} class="text-primary underline">@thecoffeejesus</a>, inspired by my time as a barista and playing Jesus in "Jesus Christ Superstar," this dream is now a reality.
        </p>
        <p>
          We believe that coffee can be more than just a drink – it can be a force for good. That's why we donate 10% of our profits to support families in Gaza and another 10% to fund community programs in the US focused on literacy and socially conscious entrepreneurship. By choosing Coffee Jesus Coffee, you're not just getting a great cup of coffee; you're also making a positive impact.
        </p>
        <p><strong>Our Impact:</strong></p>
        <ul>
          <li>10% of profits go to families in Gaza, providing essential support.</li>
          <li>10% of profits fund US community programs focused on literacy and entrepreneurship.</li>
        </ul>
        <p>
          Your support helps us create sustainable change in communities that need it most. Thank you for joining us on this journey.
        </p>
      </CardContent>
    </CardRoot>
  </section>

  <section class="section">
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Our Coffee Vision</h2>
      <CardRoot>
        <CardHeader>
          <CardTitle>Ethically Sourced, Locally Roasted</CardTitle>
          <CardDescription>Small-batch beans with a big impact.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our vision is to source coffee from small farms committed to sustainable practices. Each batch will be roasted locally to ensure the freshest and most flavorful coffee. By supporting Coffee Jesus Coffee, you’re contributing to meaningful causes while enjoying a premium product in the future.
          </p>
          <p><strong>Why Our Coffee Will Stand Out:</strong></p>
          <ul>
            <li>Handpicked beans from sustainable farms.</li>
            <li>Locally roasted to perfection for the freshest taste.</li>
            <li>Every purchase will support our mission to create positive change.</li>
          </ul>
          <p>
            Our coffee will be proudly supplied by <a href="https://stoblecoffee.com/" target="_blank" class="text-primary underline">Stoble Coffee</a>, ensuring the highest quality and sustainability.
          </p>
        </CardContent>
      </CardRoot>
    </div>
  </section>

  <section class="section">
    <h2 class="text-2xl font-bold">Our Funding Needs</h2>
    <section class="section">
      <CardRoot>
        <CardHeader>
          <CardTitle>How Your Donations Help</CardTitle>
          <CardDescription>What we need funds for.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            To launch Coffee Jesus Coffee, we need funds for several key areas:
          </p>
          <ul>
            <li>Graphic Designers: Creating beautiful packaging and branding materials.</li>
            <li>Packaging: Buying eco-friendly, high-quality packaging for our coffee.</li>
            <li>Distribution Network: Setting up a reliable and efficient distribution network.</li>
            <li>Advertising: Promoting our brand to reach a wider audience.</li>
            <li>Supplier Payments: Ensuring we can pay our suppliers like Stoble Coffee on time.</li>
          </ul>
          <p>
            Every dollar you contribute brings us one step closer to making Coffee Jesus Coffee a reality. Your support is crucial and deeply appreciated.
          </p>
        </CardContent>
      </CardRoot>
    </section>
  </section>

  <section class="section">
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Get Involved</h2>
      <CardRoot>
        <CardHeader>
          <CardTitle>Join Our Community</CardTitle>
          <CardDescription>Ways you can help.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            There are many ways to support Coffee Jesus Coffee and our mission:
          </p>
          <ul>
            <li><strong>Donate:</strong> Your donations help us provide essential support to families in Gaza and fund community programs in the US.</li>
            <li><strong>Spread the Word:</strong> Follow us on social media and share our mission with your friends and family.</li>
          </ul>
          <Button class="cta-button">
            <a href="https://gofund.me/46ebf2d5" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </CardContent>
      </CardRoot>
    </div>
  </section>
</div>

<SocialPopover open={popoverOpen} closePopover={closePopover} /> -->


<script lang="ts">
  import { onMount } from 'svelte';
  import { Root as CardRoot, Header as CardHeader, Title as CardTitle, Description as CardDescription, Content as CardContent } from "$lib/components/ui/card";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import SocialPopover from '$lib/components/SocialPopover.svelte';
  import LogoVotingWidget from './LogoVotingWidget.svelte';

  let popoverOpen = false;

  function openPopover() {
    popoverOpen = true;
  }

  function closePopover() {
    popoverOpen = false;
  }

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gofundme.com/static/js/embed.js';
    script.defer = true;
    script.onload = () => {
      const embedDiv = document.querySelector('.gfm-embed');
      if (embedDiv) {
        embedDiv.innerHTML = '<div class="gfm-embed" data-url="https://www.gofundme.com/f/coffeejesuscoffee/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=sl:fc6dd618-8a90-48f1-8e2c-5b3783f3b4bf"></div>';
        const embedScript = document.createElement('script');
        embedScript.src = 'https://www.gofundme.com/static/js/embed.js';
        embedScript.defer = true;
        embedDiv.appendChild(embedScript);
      }
    };
    document.body.appendChild(script);
  });
</script>

<style>
  .hero {
    text-align: center;
    padding: 2rem 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .hero h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  .hero p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #666;
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
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: auto;
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
      <h1 class="text-4xl font-bold">Transform Lives with Every Cup</h1>
      <p class="text-gray-700 mt-4">
        Join us in our mission to create a positive impact through every cup of coffee. Coffee Jesus Coffee is dedicated to supporting families in Gaza and funding community programs in the US focused on literacy and socially conscious entrepreneurship.
      </p>
      <div class="gfm-embed"></div>
    </div>
  </div>
</section>

<div class="container">
  <h2 class="text-2xl font-bold">Our Mission</h2>
  <section class="section">
    <CardRoot>
      <CardHeader>
        <CardTitle>Why We Started Coffee Jesus Coffee</CardTitle>
        <CardDescription>Our story and vision.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Coffee Jesus Coffee was born of a deep passion to do good in the world. We're not rich - far from it. We are starving artists who just want to make a difference and do something meaningful, while giving back with gratitude for everyone who has supported us so far. As a former barista for 4 years in small local coffee shops, I’ve always dreamed of launching my own brand. With my social media handle, <a href="#" on:click|preventDefault={openPopover} class="text-primary underline">@thecoffeejesus</a>, inspired by my time as a barista and playing Jesus in "Jesus Christ Superstar," this dream is now a reality.
        </p>
        <p>
          We believe that coffee can be more than just a drink – it can be a force for good. That's why we donate 10% of our profits to support families in Gaza and another 10% to fund community programs in the US focused on literacy and socially conscious entrepreneurship. By choosing Coffee Jesus Coffee, you're not just getting a great cup of coffee; you're also making a positive impact.
        </p>
        <p><strong>Our Impact:</strong></p>
        <ul>
          <li>10% of profits go to families in Gaza, providing essential support.</li>
          <li>10% of profits fund US community programs focused on literacy and entrepreneurship.</li>
        </ul>
        <p>
          Your support helps us create sustainable change in communities that need it most. Thank you for joining us on this journey.
        </p>
      </CardContent>
    </CardRoot>
  </section>

  <section class="section">
    <LogoVotingWidget />
  </section>

  <section class="section">
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Our Coffee Vision</h2>
      <CardRoot>
        <CardHeader>
          <CardTitle>Ethically Sourced, Locally Roasted</CardTitle>
          <CardDescription>Small-batch beans with a big impact.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our vision is to source coffee from small farms committed to sustainable practices. Each batch will be roasted locally to ensure the freshest and most flavorful coffee. By supporting Coffee Jesus Coffee, you’re contributing to meaningful causes while enjoying a premium product in the future.
          </p>
          <p><strong>Why Our Coffee Will Stand Out:</strong></p>
          <ul>
            <li>Handpicked beans from sustainable farms.</li>
            <li>Locally roasted to perfection for the freshest taste.</li>
            <li>Every purchase will support our mission to create positive change.</li>
          </ul>
          <p>
            Our coffee will be proudly supplied by <a href="https://stoblecoffee.com/" target="_blank" class="text-primary underline">Stoble Coffee</a>, ensuring the highest quality and sustainability.
          </p>
        </CardContent>
      </CardRoot>
    </div>
  </section>

  <section class="section">
    <h2 class="text-2xl font-bold">Our Funding Needs</h2>
    <section class="section">
      <CardRoot>
        <CardHeader>
          <CardTitle>How Your Donations Help</CardTitle>
          <CardDescription>What we need funds for.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            To launch Coffee Jesus Coffee, we need funds for several key areas:
          </p>
          <ul>
            <li>Graphic Designers: Creating beautiful packaging and branding materials.</li>
            <li>Packaging: Buying eco-friendly, high-quality packaging for our coffee.</li>
            <li>Distribution Network: Setting up a reliable and efficient distribution network.</li>
            <li>Advertising: Promoting our brand to reach a wider audience.</li>
            <li>Supplier Payments: Ensuring we can pay our suppliers like Stoble Coffee on time.</li>
          </ul>
          <p>
            Every dollar you contribute brings us one step closer to making Coffee Jesus Coffee a reality. Your support is crucial and deeply appreciated.
          </p>
        </CardContent>
      </CardRoot>
    </section>
  </section>

  <section class="section">
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Get Involved</h2>
      <CardRoot>
        <CardHeader>
          <CardTitle>Join Our Community</CardTitle>
          <CardDescription>Ways you can help.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            There are many ways to support Coffee Jesus Coffee and our mission:
          </p>
          <ul>
            <li><strong>Donate:</strong> Your donations help us provide essential support to families in Gaza and fund community programs in the US.</li>
            <li><strong>Spread the Word:</strong> Follow us on social media and share our mission with your friends and family.</li>
          </ul>
          <Button class="cta-button">
            <a href="https://gofund.me/46ebf2d5" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </CardContent>
      </CardRoot>
    </div>
  </section>
</div>

<SocialPopover open={popoverOpen} closePopover={closePopover} />
