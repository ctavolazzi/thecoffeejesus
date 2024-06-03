<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion/index.js";

  const faqs = [
    {
      question: "Who is Christopher Tavolazzi?",
      answer: "Christopher Tavolazzi is a creative director, writer, musician, and artist based in Northern California. He graduated from Chico State in 2013 with a degree in journalism and public relations. Since then, he has written two books, several essays, hundreds of songs, and a lot of sales and marketing copy."
    },
    {
      question: "What genres of music does Christopher Tavolazzi work in?",
      answer: "In his personal time, Tavolazzi is a recording artist and singer. His work spans many genres, from Americana and Bluegrass to Space Country and EDM. He has released three studio albums: a comedic bar rock anthem album 'Are You Coming?' with his band Bungo, a goofy space adventure album 'Buttknuckle, Vol. II: Audio Suppository' with his experimental project Buttknuckle, and an Americana ode to classic country 'Cautionary Tale' under his own name, all produced by Blondillion of Kinky Rat Records."
    },
    {
      question: "What are Christopher Tavolazzi's contributions to literature?",
      answer: "Christopher is a regular contributor to The Mandarin Magazine where he writes about topics ranging from an unexpected date with an old flame to the loss of his father. His first book, 'A Farewell to Money' is a comedic and slightly sarcastic Magic: the Gathering deck-building strategy guide for intermediate-level players. His second book, 'What the HELL is Crypto?' is the first installation in an educational literature series called 'What the HELL is...'."
    },
    {
      question: "What is Gentle Bull Co?",
      answer: "Gentle Bull Co is a creative studio based in Northern California that provides creative services to organizations looking for affordable content, and creative opportunities to artists looking to expand and grow."
    },
    {
      question: "What are some of Christopher's recent projects?",
      answer: "Christopher is working on multiple projects including 'Surviving the Singularity', a comprehensive guide on surviving and thriving in the age of AI and rapid technological change, and 'Escape Capitalism', providing free educational resources and consultations on achieving financial independence and alternative living."
    },
    {
      question: "What is Coffee Jesus Coffee?",
      answer: "Coffee Jesus Coffee is a socially conscious coffee line supplied by Stoble Coffee Roasters in Chico, CA. We are committed to making a difference, donating 10% of our profits to help families in Gaza and another 10% to support local communities here in the US."
    },
    {
      question: "How can I support Christopher Tavolazzi's work?",
      answer: "You can support Christopher by following him on social media, sharing his content, purchasing his products, and making donations for his works like 'A Farewell to Money'."
    },
    {
      question: "How can I get in touch with Christopher Tavolazzi?",
      answer: "You can get in touch with Christopher via his social media channels or through email at christopher@gmail.com."
    }
  ];
</script>

<section class="container mx-auto py-12 px-6 max-w-4xl bg-white shadow-md rounded-lg">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold">Frequently Asked Questions</h2>
    <p class="text-gray-700 mt-4">Find answers to the most common questions about Christopher Tavolazzi and his work.</p>
  </div>
  <Accordion.Root class="w-full sm:max-w-[70%] mx-auto">
    {#each faqs as faq, i}
      <Accordion.Item value={`item-${i}`}>
        <Accordion.Trigger>{faq.question}</Accordion.Trigger>
        <Accordion.Content>{faq.answer}</Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</section>

<style>
  .container {
    padding: 2rem 1rem;
  }

  .text-center {
    text-align: center;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .font-bold {
    font-weight: 700;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .text-gray-700 {
    color: #4a5568;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  .max-w-4xl {
    max-width: 56rem;
  }

  .bg-white {
    background-color: #fff;
  }

  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
</style>
