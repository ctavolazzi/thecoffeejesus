<script lang="ts">
  import "../app.css";
  import { Button } from '$lib/components/ui/button';
  import '@fortawesome/fontawesome-free/css/all.css';

</script>

<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="navbar-logo">@TheCoffeeJesus</a>
    <ul class="navbar-links">
      <li><a href="/about">About</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/coffeejesuscoffee" class="coffee-link">Coffee</a></li> <!-- Link to the Coffee page -->
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
      <p>Contact us: <a href="mailto:info@thecoffeejesus.com">info@coffeejesuscoffee.com</a></p>
      <!-- <p>Follow us on social media:</p>
      <div>
        <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
        <a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a>
        <a href="https://tiktok.com"><i class="fab fa-tiktok"></i></a>
      </div>
    </div> -->
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
    gap: 0;
  }
  .navbar-links li {
    margin-right: 0;
  }
  .navbar-links a {
    text-decoration: none;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border-right: 1px solid #eaeaea;
  }
  .navbar-links li:last-child a {
    border-right: none;
  }
  .navbar-links a.coffee-link {
    font-weight: bold;
    background-color: #d2b48c;
    color: #000;
  }
  .navbar-links a.coffee-link:hover {
    background-color: #b8860b;
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