import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://cflncektpegrccomneqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbG5jZWt0cGVncmNjb21uZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODg3MzQsImV4cCI6MjAzMTk2NDczNH0.YaNGZ3fjFKoGC48PXEpLCZZTjuH10OZqgxgxXKO8le8';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;

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
