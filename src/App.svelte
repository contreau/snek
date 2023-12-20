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
  <div class="hud-grid">
    <p><span style="color: #ff46b5;">high score:</span> {$highScore}</p>
    <p>definitely not snake</p>
    <p><span style="color: #ff46b5;">current score:</span> {$currentScore}</p>
  </div>
  <GameGrid></GameGrid>
</main>

<style lang="scss">
  h1 {
    font-family: "Pixelify Sans Variable", sans-serif;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 200;
    font-size: clamp(2.5rem, 10vw, 3.8rem);
  }
  p {
    margin-top: 0;
  }

  .hud-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5.5rem;
  }
</style>
