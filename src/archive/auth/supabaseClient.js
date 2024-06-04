// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://rnqilljtbjqmzorznkxc.supabase.co';
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucWlsbGp0YmpxbXpvcnpua3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NTgzNzgsImV4cCI6MjAzMjIzNDM3OH0.pD2GHT5Kt1f-xyFrwbaRITQqalNRqHqqsN3oMt6V-gY';
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rnqilljtbjqmzorznkxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucWlsbGp0YmpxbXpvcnpua3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NTgzNzgsImV4cCI6MjAzMjIzNDM3OH0.pD2GHT5Kt1f-xyFrwbaRITQqalNRqHqqsN3oMt6V-gY';

export const supabase = createClient(supabaseUrl, supabaseKey);


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export default supabase;