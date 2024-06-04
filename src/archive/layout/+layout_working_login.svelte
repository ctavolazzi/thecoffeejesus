<!-- /routes/+layout.svelte
<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { user, checkUser } from '../auth/auth';
  import { supabase } from '$lib/supabaseClient';
  import { Button } from '$lib/components/ui/button';

  let userData;

  onMount(async () => {
    await checkUser();
    user.subscribe(value => {
      userData = value;
    });
  });

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      await checkUser();
    }
  }
</script>

<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="navbar-logo">@TheCoffeeJesus</a>
    <ul class="navbar-links">
      <li><a href="/about">About</a></li>
      <li><a href="/faq">FAQ</a></li>
      {#if userData}
        <li><a href="/profile">Profile</a></li>
        <li><button on:click={handleSignOut}>Sign Out</button></li>
      {:else}
        <li><a href="/auth">Login</a></li>
      {/if}
    </ul>
  </div>
</nav>

<slot />

<footer class="footer">
  <div class="footer-content">
    <ul class="footer-links">
      <li><a href="/terms">Terms of Service</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="footer-contact">
      <p>Contact us: <a href="mailto:info@thecoffeejesus.com">info@thecoffeejesus.com</a></p>
      <p>Follow us on social media:</p>
    </div>
  </div>
</footer>

<style>
  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    padding: 1rem;
  }
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .navbar-links {
    display: flex;
    list-style: none;
  }
  .navbar-links li {
    margin-right: 1rem;
  }
  .navbar-links a {
    text-decoration: none;
    color: #000;
  }
  .footer {
    background-color: #f7f7f7;
    padding: 2rem 1rem;
    text-align: center;
  }
  .footer-content {
    max-width: 800px;
    margin: auto;
  }
  .footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .footer-links a {
    text-decoration: none;
    color: #000;
  }
  .footer-contact p {
    margin: 0.5rem 0;
  }
</style>
