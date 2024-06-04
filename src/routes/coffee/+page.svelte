<script>
  import GoFundMeEmbed from '$lib/components/GoFundMeEmbed.svelte';
  import GentleBullFundMe from '$lib/components/GentleBullFundMe.svelte'; // Import the new component
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
  import { Root as CardRoot, Header as CardHeader, Title as CardTitle, Description as CardDescription, Content as CardContent } from "$lib/components/ui/card";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import SocialPopover from '$lib/components/SocialPopover.svelte';
  import GBCIGEmbed from '$lib/components/GBCIGEmbed.svelte';


  let votes = { 'cjc-logo-1': 0, 'cjc-logo-2': 0 };
  let userVoted = false;
  let popoverOpen = false;

  function openPopover() {
    popoverOpen = true;
  }

  function closePopover() {
    popoverOpen = false;
  }

  onMount(async () => {
    await fetchVotes();
  });

  async function fetchVotes() {
    const { data, error } = await supabase
      .from('logo_votes')
      .select('cjc_logo_1_votes, cjc_logo_2_votes')
      .eq('id', 1)
      .single();

    if (error) {
      console.error('Error fetching votes:', error);
    } else {
      votes = { 'cjc-logo-1': data.cjc_logo_1_votes, 'cjc-logo-2': data.cjc_logo_2_votes };
    }
  }

  async function castVote(option) {
    if (userVoted) {
      console.log('User already voted');
      return;
    }

    const columnToUpdate = option === 'cjc-logo-1' ? 'cjc_logo_1_votes' : 'cjc_logo_2_votes';

    const { error } = await supabase
      .from('logo_votes')
      .update({ [columnToUpdate]: votes[option] + 1 })
      .eq('id', 1);

    if (error) {
      console.error('Error casting vote:', error);
    } else {
      votes[option]++;
      userVoted = true;
      console.log('Vote cast successfully');
    }
  }
</script>

<section class="hero">
  <div class="container mx-auto py-12 px-6 max-w-4xl bg-white shadow-md rounded-lg">
    <div class="text-center">
      <h1 class="text-3xl font-bold">Transform Lives with Every Cup</h1>
      <p class="text-gray-700 mt-4">
        Join us in our mission to create a positive impact through every cup of coffee. Coffee Jesus Coffee is dedicated to supporting families in Gaza and funding community programs in the US focused on literacy and socially conscious entrepreneurship.
      </p>
    </div>
  </div>
</section>

<section class="box-layout">
  <div class="left">
    <p>Your support helps us create sustainable change in communities that need it most. Thank you for joining us on this journey.</p>
  </div>
  <div class="right">
    <a href="https://gofund.me/46ebf2d5" target="_blank" rel="noopener noreferrer" class="cta-button">Donate Now</a>
    <a href="https://example.com/learn-more" target="_blank" rel="noopener noreferrer" class="cta-button secondary">Learn More</a>
  </div>
</section>

<!-- <section class="section">
  <h2 class="text-2xl font-bold text-center">Which Logo Do You Like Better?</h2>
  <div class="vote-container">
    <div class="vote-option">
      <img src="/cjc-logo-1.png" alt="CJC Logo 1" class="logo" />
      <button class="vote-button" on:click={() => castVote('cjc-logo-1')} disabled={userVoted}>
        Vote ({votes['cjc-logo-1']})
      </button>
    </div>
    <div class="vote-option">
      <img src="/cjc-logo-2.png" alt="CJC Logo 2" class="logo" />
      <button class="vote-button" on:click={() => castVote('cjc-logo-2')} disabled={userVoted}>
        Vote ({votes['cjc-logo-2']})
      </button>
    </div>
  </div>
</section> -->

<section class="section">
  <h2 class="text-2xl font-bold text-center">Which Logo Do You Like Better?</h2>
  <div class="vote-container">
    <div class="vote-option">
      <img src="/cjc-logo-1.png" alt="CJC Logo 1" class="logo" />
      <div class="vote-option-details">
        <div class="vote-button-container">
          <button class="vote-button" on:click={() => castVote('cjc-logo-1')} disabled={userVoted}>Vote</button>
        </div>
        <div class="vote-count-container">
          <span class="vote-count">{votes['cjc-logo-1']}</span>
        </div>
      </div>
    </div>
    <div class="vote-option">
      <img src="/cjc-logo-2.png" alt="CJC Logo 2" class="logo" />
      <div class="vote-option-details">
        <div class="vote-button-container">
          <button class="vote-button" on:click={() => castVote('cjc-logo-2')} disabled={userVoted}>Vote</button>
        </div>
        <div class="vote-count-container">
          <span class="vote-count">{votes['cjc-logo-2']}</span>
        </div>
      </div>
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
          Coffee Jesus Coffee was born of a deep passion to do good in the world. We're not rich - far from it. We are starving artists who just want to make a difference and do something meaningful, while giving back with gratitude for everyone who has supported us so far.
        </p>
        <p>
          As a barista for 4 years in small local coffee shops, Christopher Tavolazzi always dreamed of launching his own brand. With his social media handle, <a href="#" on:click|preventDefault={openPopover} class="text-primary underline">@thecoffeejesus</a>, a nickname inspired by his work as a barista, as well as playing Jesus in "Jesus Christ Superstar".
        </p>
        <p>
          We believe that coffee can be more than just a drink – it can be a force for good. That's why Coffee Jesus Coffee will donate 10% of our profits to support families in Gaza and another 10% to fund community programs in the US focused on literacy and socially conscious entrepreneurship.
        </p>
          By choosing Coffee Jesus Coffee, you're not just getting a great cup of coffee; you're also making a meaningful impact on the world.
        <p>
        </p>
        <p><strong>Our Impact:</strong></p>
        <ul>
          <li><strong>10% of profits go to families in Gaza, providing essential support.</strong></li>
          <li><strong>10% of profits fund US community programs focused on literacy and entrepreneurship.</strong></li>
        </ul>
        <p>
          Your support helps us create sustainable change in communities that need it most. Thank you for joining us on this journey.
        </p>
      </CardContent>
    </CardRoot>
  </section>

  <GoFundMeEmbed />

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
            Our vision is to source coffee from small farms committed to sustainable practices. Each batch will be roasted locally to ensure the freshest and most flavorful coffee. By supporting Coffee Jesus Coffee, you're contributing to meaningful causes while enjoying a premium product in the future.
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
            <li><strong>Graphic Designers:</strong> Creating beautiful packaging and branding materials.</li>
            <li><strong>Packaging:</strong> Buying eco-friendly, high-quality packaging for our coffee.</li>
            <li><strong>Distribution Network:</strong> Setting up a reliable and efficient distribution network.</li>
            <li><strong>Advertising:</strong> Promoting our brand to reach a wider audience.</li>
            <li><strong>Supplier Payments:</strong> Ensuring we can pay our suppliers like Stoble Coffee on time.</li>
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
          <a href="https://gofund.me/46ebf2d5" target="_blank" rel="noopener noreferrer" class="cta-button">Donate Now</a>
        </CardContent>
      </CardRoot>
    </div>
  </section>
</div>

<SocialPopover open={popoverOpen} closePopover={closePopover} />

<!-- Add the footer section with the Gentle Bull FundMe -->
<footer class="footer">
  <div class="footer-content">
    <p>
      In addition to Coffee Jesus Coffee, I have fundraised before and plan to use some of the proceeds of the sales of Coffee Jesus Coffee to revitalize and breathe life back into Gentle Bull, our once-fabled creative studio in downtown Chico.
    </p>
    <GentleBullFundMe />
    <GBCIGEmbed />
    <br>
    <h2 class="text-2xl font-bold">Your Donation Directly Supports:</h2>
    <h2 class="text-2xl font-bold">Small Businesses</h2>
    <h2 class="text-2xl font-bold">Families in Need</h2>
    <h2 class="text-2xl font-bold">and Creative Entrepreneurs All Around the World!</h2>
    <!-- <ul>
      <li>Small Businesses</li>
      <li>Families in Need</li>
      <li>Creative Entrepreneurs Around the World</li>
    </ul> -->
    <p>
      Your support helps us create sustainable change in communities that need it most. Thank you for joining us on this journey.
    </p>
    <!-- donation button -->

  </div>
</footer>

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
    line-height: 1.2; /* Adjust line-height to increase space between lines */
  }

  .hero p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #666;
  }

  .box-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem; /* Increase gap for better spacing */
    align-items: center; /* Center align items vertically */
    margin: 2rem 0;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    text-align: center; /* Center align text horizontally */
  }

  .right {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align buttons horizontally */
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
    display: block; /* Centering */
    width: fit-content; /* Ensure the button width is adjusted based on content */
    margin: 1rem auto; /* Center horizontally and add vertical margin */
    padding: 1rem 2rem; /* Increase padding for a bigger button */
    font-size: 1.5rem; /* Increase font size */
    background-color: #8B4513; /* Custom background color */
    color: white; /* Text color */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow for pop effect */
    transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
  }

  .cta-button.secondary {
    background-color: #6f360e; /* Darken background color for the secondary button */
  }

  .cta-button:hover {
    background-color: #6f360e; /* Darken on hover */
    transform: translateY(-2px); /* Lift button slightly on hover */
  }

  .cta-button.secondary:hover {
    background-color: #8B4513; /* Swap background color for hover */
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
  .vote-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.vote-option {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vote-option-details {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.vote-button-container {
  display: flex;
  justify-content: center;
}

.vote-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #8B4513;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.vote-count-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vote-count {
  font-weight: bold;
}

.logo {
  width: 250px;
  height: auto;
  margin: 10px;
}
  p {
    margin-bottom: 1.5rem; /* Add margin to the bottom of paragraphs */
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 0.5rem;
  }

  ul li::before {
    content: '→'; /* Custom bullet character */
    position: absolute;
    left: 0;
    color: #8B4513; /* Custom color */
    font-weight: bold; /* Custom weight */
  }

  .gofundme-iframe {
    width: 100%;
    height: 510px;
    border: none;
    margin: 0; /* Ensure no margin */
    padding: 0; /* Ensure no padding */
  }

  .gofundme-widget {
    padding: 0; /* Ensure no padding */
  }

  .footer {
    padding: 2rem 1rem;
    background-color: #f8f9fa;
    text-align: center;
  }

  .footer-content {
    max-width: 800px;
    margin: auto;
  }
</style>
