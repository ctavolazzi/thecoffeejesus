// Function to load and inject the navbar
function loadNavbar() {
    const navbarHtml = `
        <header class="main-navbar bg-gray-900 shadow-sm fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex-1">
                        <a href="/index.html" class="text-xl font-bold text-white hover:text-[#FFD700] transition duration-300">
                            @TheCoffeeJesus
                        </a>
                    </div>
                    <div class="flex items-center space-x-3">
                        <a href="/coffee.html" class="text-base font-medium">
                            <button class="px-5 py-2 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-opacity-50">
                                <span class="hidden sm:inline">☕ Coffee</span>
                                <span class="sm:hidden">☕</span>
                            </button>
                        </a>
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFD700] transition duration-300 ease-in-out" aria-expanded="false" id="mobile-menu-button">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile menu (hidden by default) -->
            <div class="hidden absolute top-16 right-4 w-48 p-2 transition transform origin-top-right" id="mobile-menu">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-700">
                    <div class="py-2 px-4">
                        <nav class="space-y-2">
                            <a href="/index.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">Home</a>
                            <a href="/about.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">About</a>
                            <a href="/faq.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">FAQ</a>
                            <a href="/blog.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">Blog</a>
                            <a href="/coffee.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">Coffee</a>
                            <a href="/contact.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">Contact</a>
                            <a href="/projects.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">Projects</a>
                            <a href="/games.html" class="block py-2 px-4 text-right text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out">Games</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    `;

    // Inject the navbar HTML
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHtml;
        initNavbar(); // Initialize the mobile menu functionality after loading
    }
}

/**
 * Initialize and manage the navigation bar functionality
 * @returns {void}
 */
function initNavbar() {
    const navbar = document.querySelector('.main-navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!navbar || !mobileMenuButton || !mobileMenu) {
        console.error('Required navbar elements not found');
        return;
    }

    // Mobile menu functionality
    let isMenuOpen = false;

    function toggleMobileMenu(forceClose = false) {
        isMenuOpen = forceClose ? false : !isMenuOpen;
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
        mobileMenuButton.setAttribute('aria-expanded', isMenuOpen.toString());
    }

    // Event Listeners
    mobileMenuButton.addEventListener('click', () => toggleMobileMenu());

    // Close on outside click
    document.addEventListener('click', (event) => {
        if (isMenuOpen &&
            !mobileMenu.contains(event.target) &&
            !mobileMenuButton.contains(event.target)) {
            toggleMobileMenu(true);
        }
    });

    // Escape key handler
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu(true);
        }
    });

    // Dispatch event when navbar is ready
    document.dispatchEvent(new CustomEvent('navbarLoaded'));
}

// Load the navbar when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initNavbar, loadNavbar };
}