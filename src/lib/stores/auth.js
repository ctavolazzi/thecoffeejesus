// src/lib/stores/auth.js
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export const user = writable(null);

export const checkUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error checking user:', error);
    user.set(null);
  } else {
    user.set(data.user);
  }
};
