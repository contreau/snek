<script lang="ts">
  // Supports weights 200-900
  import "@fontsource-variable/source-code-pro";
  // Supports weights 400-700
  import "@fontsource-variable/pixelify-sans";
  import GameGrid from "./lib/GameGrid.svelte";
  import { currentScore, highScore } from "./lib/store";
</script>

<main>
  <h1>snek</h1>

  {#if window.screen.width >= 1280}
    <div class="hud-grid">
      <p><span style="color: #ff46b5;">high score:</span> {$highScore}</p>
      <p>definitely not snake</p>
      <p><span style="color: #ff46b5;">current score:</span> {$currentScore}</p>
    </div>
    <GameGrid></GameGrid>
  {:else}
    <div class="mobile-message">
      <img
        src="src/assets/android-chrome-192x192.png"
        alt="pink snake"
        width="100"
        height="100"
      />
      <p>Sorry! Computer only rn.</p>
    </div>
  {/if}
</main>

<style lang="scss">
  h1 {
    font-family: "Pixelify Sans Variable", sans-serif;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 200;
    font-size: clamp(2.5rem, 10vw, 3.8rem);
    color: #fad1e9;
  }
  p {
    margin-top: 0;
    color: #ffdbf0;
  }

  .hud-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5.5rem;
  }

  .mobile-message {
    margin-top: 2rem;
  }
</style>
