function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    // Function to apply dark mode
    function setDarkMode(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme based on saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setDarkMode(true);
    } else if (savedTheme === 'light') {
        setDarkMode(false);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }

    // Event listener for toggle
    if (darkModeToggle) {
        darkModeToggle.checked = htmlElement.classList.contains('dark');
        darkModeToggle.addEventListener('change', () => {
            setDarkMode(darkModeToggle.checked);
        });
    } else {
        console.error('Dark mode toggle element not found');
    }
}

// Initialize dark mode
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDarkMode);
} else {
    setupDarkMode();
}

