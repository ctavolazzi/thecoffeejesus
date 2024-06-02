<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Root as CardRoot, Header as CardHeader, Title as CardTitle, Description as CardDescription, Content as CardContent } from "$lib/components/ui/card";
</script>

<style>
  .container {
    padding: 2rem 1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .section {
    margin: 2rem 0;
  }

  .cta-button {
    margin-top: 1rem;
  }

  .button-container {
    margin-top: 1rem;
  }
</style>

<div class="container">
  <section class="section text-center">
    <CardRoot>
      <CardHeader>
        <CardTitle>Thank You!</CardTitle>
        <CardDescription>Your details have been saved.</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-gray-700">
          Thank you for providing your social media details. We're excited to help you grow and empower your creativity.
        </p>
        <p class="text-gray-700 mt-4">
          Sign up for a free account to get the opportunity to work with me directly. Enjoy personalized custom services that address your specific needs.
        </p>
        <p class="text-gray-700 mt-4 justify-left">
          Benefits of signing up:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-2">
          <li>Direct access to personalized support</li>
          <li>Exclusive tips and strategies to grow your social media presence</li>
          <li>Opportunities for collaborations and partnerships</li>
          <li>Access to premium content and resources</li>
        </ul>
        <div class="button-container flex justify-center">
          <Button class="cta-button btn-primary" on:click={() => { /* redirect to sign-up page */ }}>
            Sign Up for a Free Account
          </Button>
        </div>
      </CardContent>
    </CardRoot>
  </section>
</div>
