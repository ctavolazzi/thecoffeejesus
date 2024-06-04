<script lang="ts">
  function handleVote(option) {
    console.log(`Clicked vote button for ${option}`);
  }
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
    display: inline-block !important;
    margin-top: 0.5rem !important;
    padding: 0.5rem 1rem !important;
    background-color: #8B4513 !important;
    color: white !important;
    border: none !important;
    border-radius: 4px !important;
    cursor: pointer !important;
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
    <button class="vote-button" on:click={() => handleVote('cjc-logo-1')}>Vote</button>
  </div>
  <div class="vote-option">
    <img src="/cjc-logo-2.png" alt="CJC Logo 2" class="logo" />
    <button class="vote-button" on:click={() => handleVote('cjc-logo-2')}>Vote</button>
  </div>
</div>