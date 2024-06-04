// // src/lib/supabaseClient.js
// import { createClient } from '@supabase/supabase-js';
// import { user } from '$lib/stores/auth'; // Import the user store

// const supabaseUrl = 'https://rnqilljtbjqmzorznkxc.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucWlsbGp0YmpxbXpvcnpua3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NTgzNzgsImV4cCI6MjAzMjIzNDM3OH0.pD2GHT5Kt1f-xyFrwbaRITQqalNRqHqqsN3oMt6V-gY';

// export const supabase = createClient(supabaseUrl, supabaseKey);

// // Set the user store when signing in
// supabase.auth.onAuthStateChange((event, session) => {
//   if (event === 'SIGNED_IN') {
//     user.set(session.user); // Set the user store with the signed-in user
//   } else if (event === 'SIGNED_OUT') {
//     user.set(null); // Set the user store to null when signed out
//   }
// });

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rnqilljtbjqmzorznkxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucWlsbGp0YmpxbXpvcnpua3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NTgzNzgsImV4cCI6MjAzMjIzNDM3OH0.pD2GHT5Kt1f-xyFrwbaRITQqalNRqHqqsN3oMt6V-gY';

export const supabase = createClient(supabaseUrl, supabaseKey);
