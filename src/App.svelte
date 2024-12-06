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
  import TimedMode from "./lib/TimedMode.svelte";
  $: if (!$classicActive) $currentClassicScore = 0;
  $: if (!$speedyActive) $currentSpeedyScore = 0;
  $: if (!$timedActive) $currentTimedScore = 0;
  window.addEventListener("keydown", (event) => {
    // prevents arrow keys and space bar from causing any scrolling
    // mainly a fix for Safari
    if (event.code === "Space" && event.target == document.body) {
      event.preventDefault();
    } else if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  });
</script>

<header>
  <h1>snek</h1>
  {#if !$classicActive && !$speedyActive && !$timedActive}
    <div class="snakehead">
      <div class="tongue"></div>
    </div>
  {/if}
</header>
<main>
  {#if window.screen.width <= 1280}
    <div class="mobile-message">
      <p>Sorry! Computer only rn.</p>
    </div>
  {:else if $classicActive}
    <ClassicMode />
  {:else if $speedyActive}
    <SpeedyMode />
  {:else if $timedActive}
    <TimedMode />
  {:else}
    <MainMenu />
  {/if}
</main>
{#if !$classicActive && !$speedyActive && !$timedActive}
  <footer>
    <p>
      made by <a href="https://conorkelley.me" target="_blank">CK</a> //
      <a href="https://github.com/contreau/snek" target="_blank">source code</a>
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

  .snakehead {
    position: relative;
    margin: 0 auto;
    width: 55px;
    min-height: 55px;
    background-color: var(--snake-pink);
    border-radius: 7.5px;
    &::before {
      position: absolute;
      content: "";
      background-color: #ffffff;
      border-radius: 30px;
      height: 18px;
      width: 7px;
      bottom: 21%;
      left: 23%;
      rotate: -30deg;
    }
    &::after {
      position: absolute;
      content: "";
      background-color: #ffffff;
      border-radius: 30px;
      height: 18px;
      width: 7px;
      bottom: 21%;
      right: 23%;
      rotate: 30deg;
    }
    .tongue {
      z-index: -1;
      position: absolute;
      background-color: #b76aff;
      border-bottom: 5px solid #161616;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      height: 30px;
      width: 10px;
      bottom: 0%;
      right: 41%;
      animation: flick 0.7s ease infinite alternate;
    }

    @keyframes flick {
      100% {
        bottom: -25%;
      }
    }
  }

  .mobile-message {
    margin-top: 2rem;
  }

  footer {
    margin-top: 4.5rem;
    font-size: 1rem;
    a {
      color: var(--snake-pink);
    }
  }
</style>
