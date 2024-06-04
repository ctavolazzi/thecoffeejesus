import { writable } from 'svelte/store';
import type { User } from '$lib/types';
import { supabase } from '$lib/supabaseClient';

export const user = writable<User | null>(null);

export const checkUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error checking user:', error);
    user.set(null);
  } else {
    user.set(data.user || null);
  }
};
