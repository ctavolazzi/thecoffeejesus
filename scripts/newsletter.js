// Import Supabase client
import supabaseClient from '../supabase.js';

console.log('Newsletter.js loaded');

// Newsletter handling with closure to protect variables
const NewsletterManager = (function() {
    // Rate limiting
    let lastSubmitTime = 0;
    const SUBMIT_COOLDOWN = 2000; // 2 seconds between submissions

    // Private methods
    function validateEmail(email) {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    }

    async function updateSubscriberCount() {
        try {
            const { count, error } = await supabaseClient
                .from('thecoffeejesus_newsletter_subscribers')
                .select('*', { count: 'exact', head: true });

            if (error) throw error;

            const countElement = document.getElementById('subscriber-number');
            if (countElement) {
                countElement.textContent = count || '0';
            }
        } catch (error) {
            console.error('Error updating subscriber count:', error);
        }
    }

    // Public interface
    return {
        init: function() {
            this.setupListeners();
            this.updateSubscriberCount();
        },

        setupListeners: function() {
            const form = document.getElementById('newsletter-form');
            if (form) {
                form.addEventListener('submit', this.handleSubmit.bind(this));
            }
        },

        async handleSubmit: function(e) {
            e.preventDefault();

            // Rate limiting check
            const now = Date.now();
            if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
                this.showMessage('Please wait a moment before trying again.', true);
                return;
            }
            lastSubmitTime = now;

            // Get form values
            const nameInput = document.querySelector('.newsletter-name');
            const emailInput = document.querySelector('.newsletter-email');
            const messageInput = document.querySelector('textarea[name="message"]');

            const name = nameInput?.value?.trim();
            const email = emailInput?.value?.trim();
            const note = messageInput?.value?.trim();

            // Validation
            if (!name || !email) {
                this.showMessage('Please provide both name and email.', true);
                return;
            }

            if (!validateEmail(email)) {
                this.showMessage('Please enter a valid email address.', true);
                return;
            }

            try {
                const { data, error } = await supabaseClient
                    .from('thecoffeejesus_newsletter_subscribers')
                    .insert([{
                        name: name,
                        email: email,
                        note: note || null
                    }]);

                if (error) {
                    if (error.code === '23505') { // Unique violation
                        this.showMessage('This email is already subscribed.', true);
                    } else {
                        throw error;
                    }
                    return;
                }

                // Success
                this.showMessage('Thank you for subscribing!');
                e.target.reset();
                await this.updateSubscriberCount();

            } catch (error) {
                console.error('Error:', error);
                this.showMessage('An error occurred. Please try again.', true);
            }
        },

        showMessage: function(message, isError = false) {
            const messageElement = document.getElementById('newsletter-message');
            if (messageElement) {
                messageElement.textContent = message;
                messageElement.style.color = isError ? '#f87171' : '#4ade80';

                // Clear message after 5 seconds
                setTimeout(() => {
                    messageElement.textContent = '';
                }, 5000);
            }
        }
    };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    NewsletterManager.init();
});