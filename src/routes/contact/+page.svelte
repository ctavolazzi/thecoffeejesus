<script lang="ts">
  import { supabase } from '../../archive/auth/supabaseClient';
  let name = '';
  let email = '';
  let message = '';

  async function handleSubmit() {
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }]);
    if (error) {
      console.error('Error sending message:', error.message);
      alert('There was an error sending your message. Please try again later.');
    } else {
      alert('Message sent successfully! Thank you for reaching out.');
      // Clear the form fields
      name = '';
      email = '';
      message = '';
    }
  }
</script>

<div class="contact-page">
  <h2>Contact Us</h2>
  <p>If you have any questions, comments, or concerns, please feel free to reach out to us using the form below.</p>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={name} required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" bind:value={message} required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</div>

<style>
  .contact-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .contact-page h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .contact-page p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .form-group textarea {
    resize: vertical;
    height: 100px;
  }

  button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #333;
  }
</style>
