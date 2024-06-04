import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { data, error: err } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (err) {
    throw error(404, 'Not found');
  }

  return {
    post: data
  };
}
