<script lang="ts">
  // Supports weights 200-900
  import "@fontsource-variable/source-code-pro";
  // Supports weights 400-700
  import "@fontsource-variable/pixelify-sans";
  import GameGrid from "./lib/GameGrid.svelte";
</script>

<main>
  <h1>snek</h1>
  <p>definitely not snake</p>
  <GameGrid></GameGrid>
</main>

<style lang="scss">
  h1 {
    font-family: "Pixelify Sans Variable", sans-serif;
    margin-top: 0;
    margin-bottom: 0rem;
    font-weight: 200;
    font-size: clamp(2.5rem, 10vw, 3.8rem);
  }
  p {
    margin-top: 0;
  }
</style>
