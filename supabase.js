import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://cflncektpegrccomneqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbG5jZWt0cGVncmNjb21uZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODg3MzQsImV4cCI6MjAzMTk2NDczNH0.YaNGZ3fjFKoGC48PXEpLCZZTjuH10OZqgxgxXKO8le8';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export async function initializeSupabase() {
    try {
        const { data, error } = await supabaseClient.from('thecoffeejesus_blog').select('id').limit(1);
        if (error) throw error;
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

        return count;
    } catch (error) {
        console.error('Error connecting to newsletter table:', error);
        throw error;
    }
}

// Test connection on load
initializeSupabase()
    .then(() => testNewsletterConnection())
    .catch(err => console.error('Connection test failed:', err));

export default supabaseClient;
