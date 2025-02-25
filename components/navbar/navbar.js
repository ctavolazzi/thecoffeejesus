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
                </div>
            </div>
        </header>
    `;

    // Inject the navbar HTML
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHtml;
        // No need to initialize mobile menu functionality anymore
    }
}

/**
 * Initialize and manage the navigation bar functionality
 * @returns {void}
 */
function initNavbar() {
    // No mobile menu functionality needed anymore
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