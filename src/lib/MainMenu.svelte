<script lang="ts">
  import { highScore, classicActive } from "./store";
  import trophy from "../assets/trophy-65x65.svg";
  let speedmodeText = "movement speed jumps with each bite.";
  let timedmodeText = "grab food in time or shed your skin.";
  function speedComingSoonMsg() {
    speedmodeText = "under construction!";
    setTimeout(() => {
      speedmodeText = "movement speed jumps with each bite.";
    }, 1500);
  }
  function timedComingSoonMsg() {
    timedmodeText = "under construction!";
    setTimeout(() => {
      timedmodeText = "grab food in time or shed your skin.";
    }, 1500);
  }
</script>

<div class="snakehead">
  <div class="tongue"></div>
</div>

<section class="menu-container">
  <div class="selections">
    <ul class="heading-row">
      <li class="mode-name">game mode</li>
      <li class="description-text">&nbsp;</li>
      <li><img src={trophy} alt="trophy" height="46" width="46" /></li>
    </ul>
    <ul class="classic-row">
      <li class="mode-name">
        <button
          on:click={() => ($classicActive = true)}
          style="color: var(--classic-mode);">classic</button
        >
      </li>
      <li class="description-text">the snek you know and love.</li>
      <li class="score">{$highScore}</li>
    </ul>
    <ul class="speed-row">
      <li class="mode-name">
        <button on:click={speedComingSoonMsg} style="color: var(--speed-mode);"
          >speedy</button
        >
      </li>
      <li class="description-text">{speedmodeText}</li>
      <li class="score">0</li>
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

  .menu-container {
    max-width: 1300px;
    // border: solid 1px var(--white-text);
    margin: 0 auto;
    margin-top: 3.5rem;
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
        margin-bottom: 0.2rem;
      }
    }
  }
</style>
