const DarkMode = {
    init() {
        const toggle = document.getElementById('dark-mode-toggle');
        if (!toggle) return;

        // Set initial state
        const isDark = localStorage.getItem('theme') === 'dark' ||
                      (!localStorage.getItem('theme') &&
                       window.matchMedia('(prefers-color-scheme: dark)').matches);

        this.setDarkMode(isDark);
        toggle.checked = isDark;

        // Handle changes
        toggle.addEventListener('change', () => {
            this.setDarkMode(toggle.checked);
        });
    },

    setDarkMode(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
};

// Initialize after navbar loads
document.addEventListener('navbarLoaded', () => DarkMode.init());

