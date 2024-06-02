<script lang="ts">
  import { onMount } from 'svelte';
  import * as Tabs from '$lib/components/ui/tabs';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import '../app.css';
  import * as Collapsible from "$lib/components/ui/collapsible";
  import * as Carousel from '$lib/components/ui/carousel';
  import * as Accordion from '$lib/components/ui/accordion';
  import { ChevronLeft, ChevronRight, Mail, Check, Book, BookOpen, BookAudio, BookHeadphonesIcon, Globe, FileText, Settings } from "lucide-svelte/icons";
  import * as Pagination from "$lib/components/ui/pagination";
  import { Separator } from '$lib/components/ui/separator';

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

  function handleCheckout() {
    try {
      window.location.href = 'https://buy.stripe.com/test_fZe16wcEy9qP2Lm6oo';
    } catch (error) {
      console.error('Error during checkout redirection:', error);
      alert('There was an issue processing your checkout. Please try again later.');
    }
  }

  const packages = [
    { value: 'standard', label: 'Standard Package', price: 997 },
    { value: 'premium', label: 'Premium Package', price: 1497 },
    { value: 'elite', label: 'Elite Package', price: 2497 },
  ];
</script>


<!-- <header class="hero">
  <img src="https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg" alt="Person Flipping Book Page">
  <h1>Discover the Saint Within: The Book of Saint You</h1>
  <p>Transform your life story into a sacred keepsake, crafted with devotion and care.</p>
  <form on:submit|preventDefault={handleSubmit} class="email-form">
    <Label for="email"><Mail class="inline mr-2" /> Enter your email to get started</Label>
    <div class="email-input">
      <Input type="email" id="email" placeholder="Your email address" bind:value={email} required />
      <Button type="submit"><CheckCircle class="inline mr-2" /> Start My Journey</Button>
    </div>
  </form>
</header> -->
<header class="hero">
  <img src="https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg" alt="Person Flipping Book Page">
  <h1>Discover the Your Story: The Book of Saint You</h1>
  <p>Transform your life story into a sacred keepsake, crafted with devotion and care.</p>
  <form on:submit|preventDefault={handleSubmit} class="email-form">
    <Label for="email" class="email-label">
      <Mail class="email-icon" />
      Enter your email to get started
    </Label>
    <div class="email-input-container">
      <Input type="email" id="email" placeholder="Your email address" bind:value={email} required />
      <Button type="submit">
        <Check class="check-icon" />
        Start My Journey
      </Button>
    </div>
  </form>
</header>

<main class="container">
  <section class="features">
    <h2>What's Included</h2>
    <div class="feature-grid">
      <Card.Root>
        <Card.Content class="feature-content">
          <BookOpen class="feature-icon" />
          <div>
            <h3 class="font-semibold">In-Depth Interviews</h3>
            <p>Our expert writers will conduct confidential interviews to uncover the essence of your life story.</p>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content class="feature-content">
          <Book class="feature-icon" />
          <div>
            <h3 class="font-semibold">Engaging Storytelling</h3>
            <p>We'll transform your memories into a compelling narrative that captures your unique voice and personality.</p>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content class="feature-content">
          <BookAudio class="feature-icon" />
          <div>
            <h3 class="font-semibold">Premium Quality</h3>
            <p>Your memoir will be meticulously crafted and presented in a luxurious hardcover book that will stand the test of time.</p>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content class="feature-content">
          <Globe class="feature-icon" />
          <div>
            <h3 class="font-semibold">Memoir Website</h3>
            <p>Share your story with the world through a personalized website, accessible from anywhere at any time.</p>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content class="feature-content">
          <FileText class="feature-icon" />
          <div>
            <h3 class="font-semibold">Ebook Included</h3>
            <p>In addition to the physical book, you'll receive a beautifully formatted ebook version for easy sharing or printing.</p>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content class="feature-content">
          <Settings class="feature-icon" />
          <div>
            <h3 class="font-semibold">Customization Options</h3>
            <p>Upgrade your package to include a fully customized design and additional features.</p>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </section>

  <section class="testimonials">
    <h2>What Our Clients Say</h2>
    <div class="testimonial-grid">
      <Collapsible.Root class="testimonial-card">
        <Collapsible.Trigger>
          <p>"The Book of Saint You team truly captured the essence of my father's life. It's a masterpiece!"</p>
          <p>- Emily R.</p>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <p>Emily's father had always been a private man, rarely sharing stories about his past. But with The Book of Saint You, his life story came alive in a way that their family will cherish forever. The writers handled every detail with care and sensitivity, weaving together a powerful narrative that showcased her father's life journey.</p>
        </Collapsible.Content>
      </Collapsible.Root>
      <Collapsible.Root class="testimonial-card">
        <Collapsible.Trigger>
          <p>"I couldn't be happier with how my memoir turned out. It's a treasure I'll pass down for generations."</p>
          <p>- John S.</p>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <p>John had always dreamed of writing his memoir but never found the time or skills to do it justice. The Book of Saint You team made the process easy and enjoyable, interviewing him at length to uncover the pivotal moments and lessons of his life. The final book exceeded his expectations, and he's proud to share it with his children and grandchildren.</p>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  </section>

  <section class="pricing">
    <h2 class="text-3xl font-semibold text-center">Choose Your Journey</h2>
    <Tabs.Root value="standard" class="w-full">
      <Tabs.List class="grid grid-cols-3">
        {#each packages as pkg (pkg.value)}
          <Tabs.Trigger value={pkg.value}>{pkg.label}</Tabs.Trigger>
        {/each}
      </Tabs.List>
      {#each packages as pkg (pkg.value)}
        <Tabs.Content value={pkg.value}>
          <div class="p-4">
            <Card.Root class="package-card">
              <Card.Header>
                <h3 class="text-2xl font-semibold">{pkg.label}</h3>
                <p class="mt-1 text-sm text-muted-foreground">Starting at ${pkg.price}</p>
              </Card.Header>
              <Card.Content>
                {#if pkg.value === 'standard'}
                  <ul class="space-y-2 text-sm">
                    <li>5 hours of interviews</li>
                    <li>100-page memoir</li>
                    <li>Hardcover book</li>
                    <li>Ebook version</li>
                    <li>Custom memoir website</li>
                  </ul>
                {:else if pkg.value === 'premium'}
                  <ul class="space-y-2 text-sm">
                    <li>10 hours of interviews</li>
                    <li>150-page memoir</li>
                    <li>Hardcover book</li>
                    <li>Ebook version</li>
                    <li>Custom memoir website</li>
                    <li>Customized book design</li>
                    <li>Audiobook version</li>
                  </ul>
                {:else if pkg.value === 'elite'}
                  <ul class="space-y-2 text-sm">
                    <li>20 hours of interviews</li>
                    <li>200-page memoir</li>
                    <li>Hardcover book</li>
                    <li>Ebook version</li>
                    <li>Custom memoir website</li>
                    <li>Fully customized design</li>
                    <li>Leather-bound edition</li>
                    <li>Audiobook version</li>
                    <li>Video montage of memories</li>
                  </ul>
                {/if}
              </Card.Content>
              <Card.Footer>
                <Button on:click={handleCheckout} class="buy-button w-full">Start My {pkg.label}</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  </section>

  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-grid">
      <Accordion.Root class="w-full">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>How long does the process take?</Accordion.Trigger>
          <Accordion.Content>
            <p>The typical timeline for completing your memoir is 3-4 months, depending on the package you choose and the complexity of your story.</p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Can I include photos in my memoir?</Accordion.Trigger>
          <Accordion.Content>
            <p>Absolutely! We encourage you to provide photos that help bring your story to life. Our team will carefully select and place the images throughout your memoir.</p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>What if I'm not satisfied with the final product?</Accordion.Trigger>
          <Accordion.Content>
            <p>We are committed to your satisfaction. If you're not completely thrilled with your memoir, we'll work with you to make revisions until you are.</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  </section>

  <section class="guarantee">
    <div class="space-y-1">
      <h2 class="text-sm font-medium leading-none">Our 100% Satisfaction Guarantee</h2>
      <p class="text-sm text-muted-foreground">We're dedicated to creating a memoir that you'll cherish forever. If you're not completely satisfied with your Book of Saint You, we'll work with you to make it right or provide a full refund.</p>
    </div>
    <Separator class="my-4" />
  </section>

  <section class="cta">
    <h2>Ready to Start Your Journey?</h2>
    <p>Take the first step toward preserving your legacy. Choose your package and begin your memoir today.</p>
    <br />
    <span class="flex-1"></span>
        <Button on:click={handleCheckout} class="cta-button">Start My Memoir</Button>
     <span class="flex-1"></span>
  </section>
</main>

<footer>
  <p>&copy; 2024 The Book of Saint You. All rights reserved.</p>
</footer>

<style>
  .hero {
    text-align: center;
    padding: 2rem 1rem;
    background: #f7f7f7;
  }

  .hero img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }

  .hero h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  .hero p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .email-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .email-input {
    display: flex;
    align-items: center;
  }

  .email-input input {
    margin-right: 0.5rem;
  }

  .container {
    padding: 2rem 1rem;
  }

  .features, .testimonials, .pricing, .faq, .guarantee, .cta {
    margin-bottom: 2rem;
  }

  .features h2, .testimonials h2, .pricing h2, .faq h2, .cta h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .feature-grid, .testimonial-grid, .faq-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .feature-grid > div, .testimonial-grid > div, .faq-grid > div {
    flex: 1 1 300px;
    max-width: 300px;
  }

  .package-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .package-price {
    font-weight: bold;
  }

  .pricing-tabs {
    margin-top: 1rem;
  }

  .package-card ul {
    list-style: none;
    padding: 0;
  }

  .package-card li {
    margin-bottom: 0.5rem;
  }

  .cta {
    text-align: center;
    background: #f7f7f7;
    padding: 2rem 1rem;
  }

  .cta-button {
    margin-top: 1rem;
  }

  .pagination-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .carousel-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>
