// Function to load and inject the navbar
async function loadNavbar() {
    try {
        const response = await fetch('/components/navbar/navbar.html');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();

        // Inject the navbar HTML
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = html;
            initNavbar(); // Initialize the mobile menu functionality after loading
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
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