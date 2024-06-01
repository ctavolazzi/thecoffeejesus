<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<div class="success-container">
  <h1 class="success-header">Congratulations!</h1>
  <p class="success-paragraph">Thank you for purchasing the Book of Saint You.</p>

  <img src="https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg" alt="Person Flipping Book Page" class="success-image">
  <p class="success-paragraph">We are thrilled to start this journey with you. Here are the next steps:</p>

  <ol class="instructions-list">
    <li><strong>Check Your Email:</strong> We have sent a confirmation email to <em>[user's email address]</em>. Please make sure to check your inbox (and spam folder) for this email.</li>
    <li><strong>Complete Your Profile:</strong> Click on the link in the confirmation email to complete your profile. This will help us personalize your memoir experience.</li>
    <li><strong>Schedule Your Interview:</strong> Once your profile is complete, you will be directed to our scheduling page to book your in-depth interviews. These interviews are crucial for capturing the essence of your story.</li>
    <li><strong>Upload Photos and Documents:</strong> After scheduling your interview, you can upload any photos or documents that you would like to include in your memoir. This can be done through your profile page.</li>
    <li><strong>Stay in Touch:</strong> We will keep you updated throughout the process. If you have any questions, feel free to contact us at <em>[support email]</em>.</li>
  </ol>

  <p class="success-paragraph">If you need any assistance, please don't hesitate to reach out. We are here to help you every step of the way.</p>

  <Button class="cta-button">
    <a href="/profile" style="color: inherit; text-decoration: none;">Go to Your Profile</a>
  </Button>
</div>

<style>
  .success-header {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }

  .success-paragraph {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #555;
  }

  .success-container {
    text-align: center;
    padding: 2rem;
    background: #f7f7f7;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    max-width: 600px;
  }

  .success-image {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .instructions-list {
    text-align: left;
    padding: 0;
    list-style: decimal;
    margin: 1rem 0;
  }

  .instructions-list li {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .cta-button {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }

  .cta-button:hover {
    background-color: #333;
  }
</style>
