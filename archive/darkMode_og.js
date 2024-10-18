function setupDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const html = document.documentElement;

  function setDarkMode(isDark) {
      if (isDark) {
          html.classList.add('dark');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          html.classList.remove('dark');
          localStorage.setItem('darkMode', 'disabled');
      }
      // Dispatch an event when dark mode changes
      document.dispatchEvent(new Event('darkModeChanged'));
  }

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
      setDarkMode(true);
  }

  // Set up event listener for toggle
  if (darkModeToggle) {
      darkModeToggle.checked = html.classList.contains('dark');
      darkModeToggle.addEventListener('change', function() {
          setDarkMode(this.checked);
      });
  }
}

// Run setup once DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupDarkMode);
} else {
  setupDarkMode();
}
