<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';
  import Terminal from "lucide-svelte/icons/terminal";
  import CircleAlert from "lucide-svelte/icons/circle-alert";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { user } from '$lib/stores/auth';

  let email = '';
  let password = '';

  let showAlert = false;
  let alertType = ''; // 'success' or 'error'
  let alertTitle = '';
  let alertDescription = '';

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alertType = 'error';
      alertTitle = 'Error';
      alertDescription = 'Sign-up failed. Please try again.';
      showAlert = true;
      console.error('Error signing up:', error.message);
    } else {
      alertType = 'success';
      alertTitle = 'Success';
      alertDescription = 'Sign-up successful! Check your email for confirmation.';
      showAlert = true;
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error('Error fetching user data:', userError);
      } else {
        user.set(userData.user);
        goto('/profile');
      }
    }
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alertType = 'error';
      alertTitle = 'Error';
      alertDescription = 'Sign-in failed. Please try again.';
      showAlert = true;
      console.error('Error signing in:', error.message);
    } else {
      alertType = 'success';
      alertTitle = 'Success';
      alertDescription = 'Sign-in successful!';
      showAlert = true;
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error('Error fetching user data:', userError);
      } else {
        user.set(userData.user);
        goto('/profile');
      }
    }
  }
</script>

<div class="auth-page">
  <div class="auth-container">
    <h1>Welcome to The Coffee Jesus Community</h1>
    <p>Join us to unlock exclusive content, personalized support, and more!</p>

    {#if showAlert}
      {#if alertType === 'success'}
        <Alert.Root>
          <Terminal class="h-4 w-4" />
          <Alert.Title>{alertTitle}</Alert.Title>
          <Alert.Description>{alertDescription}</Alert.Description>
        </Alert.Root>
      {:else if alertType === 'error'}
        <Alert.Root variant="destructive">
          <CircleAlert class="h-4 w-4" />
          <Alert.Title>{alertTitle}</Alert.Title>
          <Alert.Description>{alertDescription}</Alert.Description>
        </Alert.Root>
      {/if}
    {/if}

    <Tabs.Root value="sign-in" class="w-full max-w-md">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Trigger value="sign-in">Sign In</Tabs.Trigger>
        <Tabs.Trigger value="sign-up">Sign Up</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="sign-in">
        <Card.Root>
          <Card.Header>
            <Card.Title>Sign In</Card.Title>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="sign-in-email">Email</Label>
              <Input id="sign-in-email" type="email" bind:value={email} placeholder="Email" />
            </div>
            <div class="space-y-1">
              <Label for="sign-in-password">Password</Label>
              <Input id="sign-in-password" type="password" bind:value={password} placeholder="Password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button on:click={signIn}>Sign In</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>

      <Tabs.Content value="sign-up">
        <Card.Root>
          <Card.Header>
            <Card.Title>Sign Up</Card.Title>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="sign-up-email">Email</Label>
              <Input id="sign-up-email" type="email" bind:value={email} placeholder="Email" />
            </div>
            <div class="space-y-1">
              <Label for="sign-up-password">Password</Label>
              <Input id="sign-up-password" type="password" bind:value={password} placeholder="Password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button on:click={signUp}>Sign Up</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>

<style>
  .auth-page {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align to the top */
    min-height: 100vh;
    background-color: #f0f0f0;
    padding: 2rem;
  }
  .auth-container {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 500px;
    width: 100%;
  }
  .auth-container h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  .auth-container p {
    margin-bottom: 2rem;
    color: #666;
  }
  .auth-container .tabs-list {
    margin-bottom: 2rem;
  }
  .auth-container .card {
    text-align: left;
  }
</style>
