<script lang="ts">
  import SocialPopover from '$lib/components/SocialPopover.svelte';
  let popoverOpen = false;

  function openPopover() {
    popoverOpen = true;
  }

  function closePopover() {
    popoverOpen = false;
  }
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

<div class="container mx-auto py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Christopher Tavolazzi</h1>
    <img src="/christopher_photo_headshot.png" alt="Christopher Tavolazzi" class="mx-auto max-w-[300px] rounded-lg">
    <p class="text-lg text-gray-700">Creative Director | Software Developer | Writer | Musician | Artist | Entrepreneur | Human</p>
  </div>

  <div class="mt-10 text-center">
    <h2 class="text-2xl font-semibold mb-2">Welcome to my creative universe!</h2>
    <p class="text-gray-600 mb-6">
      Multidisciplinary artist based in Northern California. I have a deep passion for science, spirituality, self-development, education, and art.
    </p>
  </div>

  <div class="mt-10">
    <h2 class="text-xl font-semibold mb-4">About Me</h2>
    <p>
      I'm Christopher Tavolazzi, known online as <a href="#" on:click|preventDefault={openPopover} class="text-primary underline">@thecoffeejesus</a>. I'm a creator, artist, musician, software developer, and more. My work spans various fields, from art and music to software development and AI research.
    </p>
    <p>
      <strong>My mission is to empower you to empower yourself.</strong>
      <span style="display: block; height: .25em;"></span>
      I want you to unlock your full potential through wellness, financial growth, and skill enhancement.
      <span style="display: block; height: .25em;"></span>
      I strive for personal freedom and full-time mobility, all while living with increasing integrity.
    </p>
    <p>
      I have a birth defect called <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/chiari-malformation-type-i" target="_blank" class="text-primary underline"><strong>Chiari 1</strong></a>, which affects my ability to sense touch and move my extremities.
      <span style="display: block; height: .25em;"></span>
      This has affected my ability to use my hands, which has decreased my ability to use my computer and play guitar, but Capitalism never sleeps and bills don't pay themselves.
    </p>
    <p>
      Recently, I worked as a tech contractor for <a href="https://creativecloud.adobe.com/cc/learn?locale=en" target="_blank" class="text-primary underline">Adobe's Learn team</a>, where I crafted educational content that empowers users.
      <span style="display: block; height: .25em;"></span>
      As a <strong>social media consultant</strong>, I specialize in helping small creators grow their following to 10,000 and monetize. The path I currently recommend is qualifying for the <a href="https://newsroom.tiktok.com/en-gb/tiktok-creator-fund-your-questions-answered" target="_blank" class="text-primary underline">TikTok Creator Fund</a>.
      <span style="display: block; height: .25em;"></span>
      In addition to my consulting work, I have <strong>authored two books</strong>, composed numerous essays, written <strong>hundreds of songs</strong>, and developed compelling sales and marketing materials.
    </p>
  </div>

  <div class="mt-10">
    <h2 class="text-xl font-semibold mb-4">My Creative Journey</h2>
    <div class="text-gray-600">
        <div class="mb-6">
            <strong>Books:</strong>
            <ul class="list-disc list-inside ml-4">
              <li class="mb-2">
                <em>Surviving the Singularity</em>: A workbook for helping you navigate and survive in an increasingly AI dominated world.
                <a href="https://survivingthesingularity.com" class="text-blue-500 hover:underline">Read More</a>
              </li>
              <li class="mb-2">
                  <em>A Farewell to Money</em>: A comedic Magic: the Gathering strategy guide for intermediate players.
                  <a href="/magicthegatheringbook" class="text-blue-500 hover:underline">Download Here</a>
              </li>
            </ul>
        </div>
        <div class="mb-6">
            <strong>Music:</strong>
            <ul class="list-disc list-inside ml-4">
                <li class="mb-2">
                    <em>Are You Coming?</em> (with Bungo): A comedic bar rock anthem album.
                </li>
                <li class="mb-2">
                    <em>Buttknuckle, Vol. II: Audio Suppository</em> (with Buttknuckle): A goofy space adventure album.
                </li>
                <li class="mb-2">
                    <em>Cautionary Tale</em>: An Americana ode to classic country.
                </li>
            </ul>
        </div>
    </div>
  </div>

  <div class="mt-10">
    <h2 class="text-xl font-semibold mb-4">In the Media</h2>
    <p class="text-gray-600">
      I regularly contribute to various publications, writing about a range of topics from personal experiences to profound losses.
    </p>
  </div>

  <div class="mt-10">
    <h2 class="text-xl font-semibold mb-4">Gentle Bull Co</h2>
    <p class="text-gray-600">
      I founded Gentle Bull Co, a creative studio offering affordable content services to organizations and creative opportunities for artists.
    </p>
  </div>

  <div class="mt-10">
    <h2 class="text-xl font-semibold mb-4">Stay Connected</h2>
    <p class="text-gray-600 mb-4">
      Follow me for more on poetry, science, spirituality, self-development, and art. Join my community to stay updated on my latest projects and exclusive content.
    </p>
  </div>

  <div class="mt-10 text-center">
    <h2 class="text-xl font-semibold mb-4">Connect with Christopher Tavolazzi</h2>
    <div class="flex justify-center space-x-4">
      <a href="#" class="text-blue-500 hover:underline">Medium</a>
      <a href="#" class="text-blue-500 hover:underline">Website</a>
      <a href="#" class="text-blue-500 hover:underline">Twitter</a>
      <a href="#" class="text-blue-500 hover:underline">Instagram</a>
    </div>
  </div>
</div>

<SocialPopover open={popoverOpen} closePopover={closePopover} />
