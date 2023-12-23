<script lang="ts">
  // Supports weights 200-900
  import "@fontsource-variable/source-code-pro";
  // Supports weights 400-700
  import "@fontsource-variable/pixelify-sans";
  import MainMenu from "./lib/MainMenu.svelte";
  import ClassicMode from "./lib/ClassicMode.svelte";
  import SpeedyMode from "./lib/SpeedyMode.svelte";
  import {
    classicActive,
    currentClassicScore,
    speedyActive,
    currentSpeedyScore,
    timedActive,
    currentTimedScore,
  } from "./lib/store";
  import pinksnake from "./assets/android-chrome-192x192.png";
  $: if (!$classicActive) $currentClassicScore = 0;
  $: if (!$speedyActive) $currentSpeedyScore = 0;
  $: if (!$timedActive) $currentTimedScore = 0;
</script>

<header>
  <h1>snek</h1>
</header>
<main>
  {#if window.screen.width <= 1280}
    <div class="mobile-message">
      <img src={pinksnake} alt="pink snake" width="100" height="100" />
      <p>Sorry! Computer only rn.</p>
    </div>
  {:else if $classicActive}
    <ClassicMode />
  {:else if $speedyActive}
    <SpeedyMode />
  {:else}
    <MainMenu />
  {/if}
</main>
{#if !$classicActive && !$speedyActive && !$timedActive}
  <footer>
    <p>
      made by <a href="https://conorkelley.me" target="_blank">CK</a> //
      <a href="https://github.com/zenDev-2/snek" target="_blank">source code</a>
    </p>
  </footer>
{/if}

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

  footer {
    margin-top: 5rem;
    font-size: 1rem;
    a {
      color: var(--snake-pink);
    }
  }
</style>
