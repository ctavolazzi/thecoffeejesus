<!-- <script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';

  let votes = { 'cjc-logo-1': 0, 'cjc-logo-2': 0 };
  let userVoted = false;

  async function fetchVotes() {
    const { data, error } = await supabase
      .from('logo_votes')
      .select('cjc_logo_1_votes, cjc_logo_2_votes')
      .single();

    if (error) {
      console.error('Error fetching votes:', error);
    } else {
      votes = { 'cjc-logo-1': data.cjc_logo_1_votes, 'cjc-logo-2': data.cjc_logo_2_votes };
    }
  }

  async function castVote(option: string) {
    const column = option === 'cjc-logo-1' ? 'cjc_logo_1_votes' : 'cjc_logo_2_votes';
    const { error: voteError } = await supabase
      .from('logo_votes')
      .update({ [column]: votes[option] + 1 })
      .eq('id', 1);

    if (voteError) {
      console.error('Error casting vote:', voteError);
    } else {
      votes[option] += 1;
      userVoted = true;
    }
  }

  onMount(fetchVotes);
</script>

<style>
  .vote-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .vote-option {
    margin: 0 1rem;
    text-align: center;
  }

  .vote-button {
    display: block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .vote-button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  .vote-count {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #333;
  }

  .logo {
    width: 150px;
    height: auto;
    margin: 10px;
  }
</style>

<div class="vote-container">
  <div class="vote-option">
    <img src="/cjc-logo-1.png" alt="CJC Logo 1" class="logo" />
    <button class="vote-button" on:click={() => castVote('cjc-logo-1')} disabled={userVoted}>Vote</button>
    <div class="vote-count">Votes: {votes['cjc-logo-1']}</div>
  </div>
  <div class="vote-option">
    <img src="/cjc-logo-2.png" alt="CJC Logo 2" class="logo" />
    <button class="vote-button" on:click={() => castVote('cjc-logo-2')} disabled={userVoted}>Vote</button>
    <div class="vote-count">Votes: {votes['cjc-logo-2']}</div>
  </div>
</div> -->


<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';

  let votes = { 'cjc-logo-1': 0, 'cjc-logo-2': 0 };
  let userVoted = false;

  async function fetchVotes() {
    const { data, error } = await supabase
      .from('logo_votes')
      .select('cjc_logo_1_votes, cjc_logo_2_votes')
      .eq('id', 1)
      .single();

    if (error) {
      console.error('Error fetching votes:', error);
    } else {
      votes = { 'cjc-logo-1': data.cjc_logo_1_votes, 'cjc-logo-2': data.cjc_logo_2_votes };
    }
  }

  async function castVote(option: string) {
    if (userVoted) {
      return;
    }

    const column = option === 'cjc-logo-1' ? 'cjc_logo_1_votes' : 'cjc_logo_2_votes';
    const { data, error } = await supabase
      .from('logo_votes')
      .update({ [column]: votes[option] + 1 })
      .eq('id', 1)
      .select();

    if (error) {
      console.error('Error casting vote:', error);
    } else {
      votes[option] += 1;
      userVoted = true;
    }
  }

  onMount(fetchVotes);
</script>

<style>
  .vote-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .vote-option {
    margin: 0 1rem;
    text-align: center;
  }

  .vote-button {
    display: block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #8B4513; /* Shade of brown */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .vote-button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  .vote-count {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #333;
  }

  .logo {
    width: 150px;
    height: auto;
    margin: 10px;
  }
</style>

<div class="vote-container">
  <div class="vote-option">
    <img src="/cjc-logo-1.png" alt="CJC Logo 1" class="logo" />
    <button class="vote-button" on:click={() => castVote('cjc-logo-1')} disabled={userVoted}>Vote</button>
    <div class="vote-count">Votes: {votes['cjc-logo-1']}</div>
  </div>
  <div class="vote-option">
    <img src="/cjc-logo-2.png" alt="CJC Logo 2" class="logo" />
    <button class="vote-button" on:click={() => castVote('cjc-logo-2')} disabled={userVoted}>Vote</button>
    <div class="vote-count">Votes: {votes['cjc-logo-2']}</div>
  </div>
</div>

