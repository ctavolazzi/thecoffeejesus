import supabaseClient from './supabase.js';

function createFallingBeans() {
    const container = document.getElementById('falling-beans-container');
    const numberOfBeans = 30;

    for (let i = 0; i < numberOfBeans; i++) {
        const bean = document.createElement('div');
        bean.classList.add('coffee-bean');
        bean.style.left = `${Math.random() * 100}vw`;
        bean.style.animationDuration = `${Math.random() * 15 + 20}s`;
        const delay = Math.random() * 5;
        bean.style.setProperty('--delay', delay);
        container.appendChild(bean);
    }
}

function animateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const currentAmount = document.getElementById('current-amount');
    const goalAmount = document.getElementById('goal-amount');

    const goal = 10000;
    const current = 2500; // Example: 25% funded
    const percentage = (current / goal) * 100;

    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.width = percentage + '%';
    }, 500);

    currentAmount.textContent = '$' + current.toLocaleString();
    goalAmount.textContent = '$' + goal.toLocaleString();
}

// Waitlist Form Elements
const waitlistForm = document.getElementById('coffee-waitlist-form');
const waitlistName = document.getElementById('coffee-waitlist-name');
const waitlistEmail = document.getElementById('coffee-waitlist-email');
const waitlistMessage = document.getElementById('coffee-waitlist-message');
const waitlistCount = document.getElementById('waitlist-count');

// Function to fetch and display waitlist count
async function fetchWaitlistCount() {
    try {
        const { count, error } = await supabaseClient
            .from('coffeejesuscoffee_waitlist')
            .select('*', { count: 'exact', head: true });

        if (error) throw error;

        waitlistCount.textContent = count !== null ? count : '0';
    } catch (error) {
        console.error('Error fetching waitlist count:', error);
        waitlistCount.textContent = '0';
    }
}

// Initial fetch of waitlist count when the page loads
document.addEventListener('DOMContentLoaded', fetchWaitlistCount);

// Handle form submission
waitlistForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = waitlistName.value.trim();
    const email = waitlistEmail.value.trim();

    // Basic Validation
    if (!name || !email) {
        showMessage('Please provide both name and email.', 'error');
        return;
    }

    // Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    try {
        const { data, error } = await supabaseClient
            .from('coffeejesuscoffee_waitlist')
            .insert([{ name, email }])
            .select();

        if (error) throw error;

        waitlistForm.reset();
        showMessage('Thank you for joining the Coffee Jesus Coffee waitlist!', 'success');

        // Update the waitlist count
        fetchWaitlistCount();
    } catch (error) {
        console.error('Error inserting waitlist data:', error);
        if (error.message.includes('duplicate key value')) {
            showMessage('This email is already registered in the waitlist.', 'error');
        } else {
            showMessage('There was an error signing you up. Please try again.', 'error');
        }
    }
});

function showMessage(message, type) {
    waitlistMessage.textContent = message;
    waitlistMessage.className = 'mt-4 text-center font-medium';
    if (type === 'error') {
        waitlistMessage.classList.add('text-red-600', 'dark:text-red-400');
    } else {
        waitlistMessage.classList.add('text-green-600', 'dark:text-green-400');
    }

    // Clear message after 5 seconds
    setTimeout(() => {
        waitlistMessage.textContent = '';
        waitlistMessage.className = 'mt-4 text-center text-coffee-800 dark:text-coffee-200 font-medium';
    }, 5000);
}

/**
 * Toggle the visibility of the FAQ answer and rotate the chevron icon.
 * @param {Event} event - The click event.
 */
function toggleFAQ(event) {
    const button = event.currentTarget;
    const answer = button.nextElementSibling;

    // Check if the clicked FAQ is already open
    const isOpen = answer.classList.contains('open');

    // Close all open FAQs
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('open'));

    // If the clicked FAQ was not open, open it
    if (!isOpen) {
        answer.classList.add('open');
        button.classList.add('open');
    }
}

// Initialize all functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
        button.addEventListener('click', toggleFAQ);
    });

    createFallingBeans();
    animateProgressBar();
});

// Sticky nav scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.sticky-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.transform = `scaleX(${scrolled / 100})`;
});

// Animated section reveal
const revealSections = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check on page load

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.sticky-nav a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('font-bold', 'bg-coffee-300', 'dark:bg-coffee-700');
        if (item.getAttribute('href').slice(1) === currentSectionId) {
            item.classList.add('font-bold', 'bg-coffee-300', 'dark:bg-coffee-700');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);