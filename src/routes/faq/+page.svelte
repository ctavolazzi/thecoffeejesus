<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";

  const faqs = [
    {
      question: "Who is @thecoffeejesus (Christopher Tavolazzi)?",
      answer: "Christopher Tavolazzi is a creative director, software engineer, writer, musician, and artist based in Northern California. He loves empowering people to empower themselves ❤️"
    },
    {
      question: "What genres of music do you work in?",
      answer: "My work spans many genres, from Americana and Bluegrass to Space Country and EDM. He has released three studio albums."
    },
    {
      question: "What do you write about?",
      answer: "Christopher has been a regular contributor to many publications including The Mandarin Magazine, various newspapers, and has written several books including: 'A Farewell to Money' and his upcoming non-fiction workbook 'Surviving the Singularity'."
    },
    {
      question: "What is Coffee Jesus Coffee?",
      answer: "Coffee Jesus Coffee is a socially conscious coffee line dedicated to empowering local communities by donating 10% of profits to help families in Gaza and an additional 10% local communities in the US."
    },
    {
      question: "What is Gentle Bull Co?",
      answer: "Gentle Bull Co is a creative studio providing affordable content services and opportunities for artists. Based in Chico, CA, GBC is focused on helping empower artists to make more of what matters."
    },
    {
      question: "What are some of your recent projects?",
      answer: "Christopher is working on 'Surviving the Singularity' and 'Escape Capitalism', providing free educational resources on AI and financial independence."
    },
    {
      question: "How can I support your work?",
      answer: "You can support Christopher by following him on social media, sharing his content, purchasing his products, and making donations."
    },
    {
      question: "How can I get in touch with you?",
      answer: "You can reach Christopher via social media @thecoffeejesus or email at ctavolazzi@gmail.com."
    }
  ];
</script>

<section class="container mx-auto py-12 px-6 max-w-4xl bg-white shadow-md rounded-lg text-center">
  <div class="mb-8">
    <h2 class="text-3xl font-bold">FAQs</h2>
  </div>
  <Accordion.Root class="w-full sm:max-w-[70%] mx-auto">
    {#each faqs as faq, i}
      <Accordion.Item value={`item-${i}`} class="accordion-item">
        <Accordion.Trigger class="accordion-trigger">{faq.question}</Accordion.Trigger>
        <Accordion.Content class="accordion-content">{faq.answer}</Accordion.Content>
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

  .accordion-root {
    width: 100%;
  }

  .accordion-item {
    margin-bottom: 1rem;
  }

  .accordion-trigger,
  .accordion-content {
    text-align: left;
    display: block;
    width: 100%;
    white-space: normal;
  }

  .accordion-trigger {
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;
    background: none;
    border: none;
    outline: none;
  }

  .accordion-content {
    padding: 0.5rem 1rem;
  }
</style>
