<script>
  import { onMount } from 'svelte';
  import * as Collapsible from "$lib/components/ui/collapsible";
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  import * as Select from '$lib/components/ui/select';
  import { Separator } from '$lib/components/ui/separator';
  import * as Tabs from '$lib/components/ui/tabs';
  import * as Card from '$lib/components/ui/card';
  import '../app.css';

  let email = '';

  function handleSubmit() {
    // TODO: Implement form submission logic
    console.log('Email submitted:', email);
    email = '';
  }

  onMount(() => {
    // Stripe script loading logic...
  });

  function handleCheckout() {
    // Checkout redirection logic...
  }

  const packages = [
    { value: 'standard', label: 'Standard Package', price: 997 },
    { value: 'premium', label: 'Premium Package', price: 1497 },
    { value: 'elite', label: 'Elite Package', price: 2497 },
  ];
</script>

<header class="hero">
  <img src="https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg" alt="Person Flipping Book Page">
  <h1>Discover the Saint Within: The Book of Saint You</h1>
  <p>Transform your life story into a sacred keepsake, crafted with devotion and care.</p>
  <form on:submit|preventDefault={handleSubmit}>
    <Label for="email">Enter your email to get started</Label>
    <div class="email-input">
      <Input type="email" id="email" placeholder="Your email address" bind:value={email} required />
      <Button type="submit">Start My Journey</Button>
    </div>
  </form>
</header>

<main class="container">
  <section class="features">
    <h2>What's Included</h2>
    <div class="feature-grid">
      <Card.Root>
        <Card.Content>
          <h3>In-Depth Interviews</h3>
          <p>Our expert writers will conduct intimate interviews to uncover the essence of your life story.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content>
          <h3>Engaging Storytelling</h3>
          <p>We'll transform your memories into a compelling narrative that captures your unique voice and personality.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content>
          <h3>Premium Quality</h3>
          <p>Your memoir will be meticulously crafted and presented in a luxurious hardcover book that will stand the test of time.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content>
          <h3>Memoir Website</h3>
          <p>Share your story with the world through a personalized website, accessible from anywhere at any time.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content>
          <h3>Ebook Included</h3>
          <p>In addition to the physical book, you'll receive a beautifully formatted ebook version for easy digital sharing.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Content>
          <h3>Customization Options</h3>
          <p>Upgrade your package to include a fully customized design, additional copies, and even the book's source code.</p>
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
    <h2>Choose Your Journey</h2>
    <Tabs.Root value="premium" class="pricing-tabs">
      {#each packages as pkg}
        <Tabs.List>
          <Tabs.Trigger value={pkg.value} class="pricing-tab">
            <div class="package-label">
              {pkg.label}
              <span class="package-price">${pkg.price}</span>
            </div>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={pkg.value}>
          <Card.Root class="package-card">
            <Card.Content>
              {#if pkg.value === 'standard'}
                <ul>
                  <li>5 hours of interviews</li>
                  <li>100-page memoir</li>
                  <li>Hardcover book</li>
                  <li>Ebook version</li>
                  <li>Custom memoir website</li>
                  <li>3 copies</li>
                </ul>
              {:else if pkg.value === 'premium'}
                <ul>
                  <li>10 hours of interviews</li>
                  <li>150-page memoir</li>
                  <li>Hardcover book</li>
                  <li>Ebook version</li>
                  <li>Custom memoir website</li>
                  <li>Customized book design</li>
                  <li>5 copies</li>
                  <li>Audiobook version</li>
                </ul>
              {:else if pkg.value === 'elite'}
                <ul>
                  <li>20 hours of interviews</li>
                  <li>200-page memoir</li>
                  <li>Hardcover book</li>
                  <li>Ebook version</li>
                  <li>Custom memoir website</li>
                  <li>Fully customized design</li>
                  <li>Leather-bound edition</li>
                  <li>10 copies</li>
                  <li>Audiobook version</li>
                  <li>Video montage of memories</li>
                </ul>
              {/if}
            </Card.Content>
            <Card.Footer>
              <Button on:click={handleCheckout} class="buy-button">Start My {pkg.label}</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  </section>

  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-grid">
      <Collapsible.Root class="faq-item">
        <Collapsible.Trigger>How long does the process take?</Collapsible.Trigger>
        <Collapsible.Content>
          <p>The typical timeline for completing your memoir is 3-4 months, depending on the package you choose and the complexity of your story.</p>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root class="faq-item">
        <Collapsible.Trigger>Can I include photos in my memoir?</Collapsible.Trigger>
        <Collapsible.Content>
          <p>Absolutely! We encourage you to provide photos that help bring your story to life. Our team will carefully select and place the images throughout your memoir.</p>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root class="faq-item">
        <Collapsible.Trigger>What if I'm not satisfied with the final product?</Collapsible.Trigger>
        <Collapsible.Content>
          <p>We are committed to your satisfaction. If you're not completely thrilled with your memoir, we'll work with you to make revisions until you are.</p>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  </section>

  <section class="guarantee">
    <Card.Root class="guarantee-card">
      <Card.Content>
        <h2>Our 100% Satisfaction Guarantee</h2>
        <p>We're dedicated to creating a memoir that you'll cherish forever. If you're not completely satisfied with your Book of Saint You, we'll work with you to make it right or provide a full refund.</p>
      </Card.Content>
    </Card.Root>
  </section>

  <section class="cta">
    <h2>Ready to Start Your Journey?</h2>
    <p>Take the first step toward preserving your legacy. Choose your package and begin your memoir today.</p>
    <Button on:click={handleCheckout} class="cta-button">Start My Memoir</Button>
  </section>
</main>

<footer>
  <p>&copy; 2023 The Book of Saint You. All rights reserved.</p>
</footer>