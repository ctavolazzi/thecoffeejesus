// Navbar initialization
const initNavbar = async () => {
    try {
        // Load navbar content
        const response = await fetch('/components/navbar/navbar.html');
        if (!response.ok) throw new Error('Failed to load navbar');

        const navbarHtml = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = navbarHtml;

        // Setup mobile menu
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (event) => {
                if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });

            // Close mobile menu on escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    } catch (error) {
        console.error('Error initializing navbar:', error);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
