
<script>
  import "../app.css";
  import { Button } from '$lib/components/ui/button';
</script>

<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="navbar-logo">@TheCoffeeJesus</a>
    <ul class="navbar-links">
      <li><a href="/about">About</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/login">Login</a></li>
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
      <p>Contact us: info@example.com</p>
      <p>Follow us on social media:</p>
      <!-- Social media icons go here -->
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
