<script lang="ts">
  import {
    classicHighScore,
    classicActive,
    speedyHighScore,
    speedyActive,
  } from "./store";
  import trophy from "../assets/trophy-65x65.svg";
  let timedmodeText = "grab food in time or shed your skin.";
  function timedComingSoonMsg() {
    timedmodeText = "under construction!";
    setTimeout(() => {
      timedmodeText = "grab food in time or shed your skin.";
    }, 1500);
  }
</script>

<section class="menu-container">
  <div class="selections">
    <ul class="heading-row">
      <li class="mode-name">game mode</li>
      <li class="description-text">&nbsp;</li>
      <li style="max-height: 46px;">
        <img src={trophy} alt="trophy" height="46" width="46" />
      </li>
    </ul>
    <ul class="classic-row">
      <li class="mode-name">
        <button
          on:click={() => ($classicActive = true)}
          style="color: var(--classic-mode);">classic</button
        >
      </li>
      <li class="description-text">the snek you know and love.</li>
      <li class="score">{$classicHighScore}</li>
    </ul>
    <ul class="speed-row">
      <li class="mode-name">
        <button
          on:click={() => ($speedyActive = true)}
          style="color: var(--speed-mode);">speedy</button
        >
      </li>
      <li class="description-text">movement speed jumps with each bite.</li>
      <li class="score">{$speedyHighScore}</li>
    </ul>
    <ul class="time-row">
      <li class="mode-name">
        <button on:click={timedComingSoonMsg} style="color: var(--timed-mode);"
          >time crunch</button
        >
      </li>
      <li class="description-text">{timedmodeText}</li>
      <li class="score">0</li>
    </ul>
  </div>
</section>

<style lang="scss">
  .menu-container {
    max-width: 1300px;
    // border: solid 1px var(--white-text);
    margin: 0 auto;
    margin-top: 2.5rem;
    border-radius: 5px;
    padding: 0 5rem;
  }
  .selections {
    display: flex;
    flex-direction: column;
    ul {
      list-style-type: none;
      text-align: center;
      font-size: 1.6rem;
      padding-left: 0;

      &.heading-row,
      &.classic-row,
      &.speed-row,
      &.time-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      &.heading-row {
        margin-bottom: 1rem;
      }

      li.mode-name {
        min-width: 228px;
        text-align: left;
      }

      li.description-text {
        min-width: 438px;
        font-size: 1.1rem;
        text-align: left;
      }

      li.score {
        min-width: 46px;
        margin-bottom: 0.3rem;
        color: var(--high-score);
      }
    }
  }
</style>
