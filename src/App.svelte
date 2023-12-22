<script lang="ts">
  // Supports weights 200-900
  import "@fontsource-variable/source-code-pro";
  // Supports weights 400-700
  import "@fontsource-variable/pixelify-sans";
  import MainMenu from "./lib/MainMenu.svelte";
  import GameGrid from "./lib/GameGrid.svelte";
  import { classicActive, currentScore } from "./lib/store";
  import pinksnake from "./assets/android-chrome-192x192.png";
  $: if (!$classicActive) $currentScore = 0;
</script>

<main>
  <header>
    <h1>snek</h1>
  </header>
  {#if window.screen.width <= 1280}
    <div class="mobile-message">
      <img src={pinksnake} alt="pink snake" width="100" height="100" />
      <p>Sorry! Computer only rn.</p>
    </div>
  {:else if $classicActive}
    <GameGrid></GameGrid>
  {:else}
    <MainMenu />
  {/if}
</main>

<style lang="scss">
  header {
    h1 {
      font-family: "Pixelify Sans Variable", sans-serif;
      margin: 0;
      margin-bottom: 1rem;
      font-weight: 200;
      font-size: clamp(2.5rem, 10vw, 3.5rem);
      color: var(--snake-pink);
    }
  }

  .mobile-message {
    margin-top: 2rem;
  }
</style>
