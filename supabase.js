import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://cflncektpegrccomneqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbG5jZWt0cGVncmNjb21uZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODg3MzQsImV4cCI6MjAzMTk2NDczNH0.YaNGZ3fjFKoGC48PXEpLCZZTjuH10OZqgxgxXKO8le8';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

console.log('Supabase client initialized:', supabaseClient);

export async function initializeSupabase() {
    try {
        const { data, error } = await supabaseClient.from('thecoffeejesus_blog').select('id').limit(1);
        if (error) throw error;
        console.log('Supabase connection successful');
    } catch (error) {
        console.error('Error initializing Supabase:', error);
    }
}

export async function getUser() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
}

export async function signIn(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) throw error;
    return data;
}

export async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
}

export async function testNewsletterConnection() {
    try {
        const { count, error } = await supabaseClient
            .from('thecoffeejesus_newsletter_subscribers')
            .select('*', { count: 'exact', head: true });

        if (error) throw error;

        // Update the subscriber count in the HTML
        const countElement = document.getElementById('subscriber-number');
        if (countElement) {
            countElement.textContent = count || '0';
        }

        console.log('Newsletter table connection successful. Subscriber count:', count);
        return count;
    } catch (error) {
        console.error('Error connecting to newsletter table:', error);
        throw error;
    }
}

export async function handleNewsletterSubmission(event) {
    event.preventDefault();

    const nameInput = document.querySelector('.newsletter-name');
    const emailInput = document.querySelector('.newsletter-email');
    const messageInput = document.querySelector('textarea[name="message"]');

    const name = nameInput?.value?.trim();
    const email = emailInput?.value?.trim();
    const note = messageInput?.value?.trim();

    try {
        const { error } = await supabaseClient
            .from('thecoffeejesus_newsletter_subscribers')
            .insert([{ name, email, note }]);

        if (error) throw error;

        // Clear form
        event.target.reset();

        // Update count
        await testNewsletterConnection();

        showMessage('Thank you for subscribing!');
    } catch (error) {
        console.error('Error:', error);
        showMessage('An error occurred. Please try again.', true);
    }
}

function showMessage(message, isError = false) {
    const messageElement = document.getElementById('newsletter-message');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.color = isError ? '#f87171' : '#4ade80';
        setTimeout(() => {
            messageElement.textContent = '';
        }, 5000);
    }
}

// Add form listener
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', handleNewsletterSubmission);
    }
});

// Test connection
initializeSupabase()
    .then(() => testNewsletterConnection())
    .then(count => console.log('Newsletter count:', count))
    .catch(err => console.error('Connection test failed:', err));

export default supabaseClient;
