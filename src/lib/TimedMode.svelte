<script lang="ts">
  import {
    currentTimedScore,
    timedHighScore,
    timedActive,
    modalClosed,
  } from "./store";
  import { onMount } from "svelte";

  // ** debug console logs if needed:
  // console.log("column:", gridWidth);
  // console.log("row:", gridHeight);
  // console.log(snek);
  // $: moves, console.log("moves", moves);

  let snek: Record<string, number[]> = {
    // coordinate pairs are in order x, y (column, row)
    head0: [21, 9],
  };

  // stores all moves made by the snek head
  let moves: number[][] = [];

  const gridWidth = Array(43);
  const gridHeight = Array(19);
  let foodRow: number;
  let foodCol: number;
  let gameOver = false;
  let gameStart = false;
  let paused = true;
  let direction = "right"; // starting direction
  let speed = 80; // speed of snek
  let lastInterval: any; // essentially the game loop - the interval that is constantly updated every {speed} milliseconds and with each keypress
  let scoreChange: HTMLSpanElement | null;
  let scoreNote: number = 0;
  let scoreChangeClass: boolean = false;

  // * Reactivity
  // score increases when head of snek intersects with food
  $: if (snek.head0[1] === foodRow && snek.head0[0] === foodCol) {
    snek[`head${Object.keys(snek).length}`] = moves[moves.length - 1];
    generateFood();
    $currentTimedScore += 1;
    clearInterval(globalCountdown);
    countdown(calculateCountdown());
  }

  // upon game over, movement interval is cleared and high score updated
  $: if (gameOver) {
    clearInterval(lastInterval);
    clearInterval(globalCountdown);
    if ($timedHighScore < $currentTimedScore) {
      $timedHighScore = $currentTimedScore;
    }
  }

  function generateFood() {
    foodCol = Math.floor(Math.random() * 43);
    foodRow = Math.floor(Math.random() * 19);
    while (
      // ensures that food does not spawn on snek body
      Object.values(snek).some((arr) =>
        arr.every((val, index) => val === [foodCol, foodRow][index])
      )
    ) {
      foodCol = Math.floor(Math.random() * 43);
      foodRow = Math.floor(Math.random() * 19);
    }
  }

  function calculateCountdown(): number {
    let distance =
      Math.abs(snek.head0[0] - foodCol) + Math.abs(snek.head0[1] - foodRow);
    let speed = 43 / 3.5;
    let timeToReachFood = distance / speed;
    let bufferTime = 2;
    let totalTime = Math.floor(timeToReachFood + bufferTime);
    return totalTime;
  }

  function moveUp() {
    let nextPosition = [snek.head0[0], snek.head0[1] - 1];

    // Check for collision with self
    for (let i = 1; i < Object.keys(snek).length; i++) {
      if (
        snek[`head${i}`][0] === nextPosition[0] &&
        snek[`head${i}`][1] === nextPosition[1]
      ) {
        gameOver = true;
        return;
      }
    }

    if (snek.head0[1] - 1 < 0) {
      gameOver = true;
      return;
    } else if (snek.head0[1] > 0) {
      snek.head0[1] = snek.head0[1] - 1;
      moves.push(snek.head0.slice());
      for (let i = 1; i < Object.keys(snek).length; i++) {
        snek[`head${i}`] = moves[moves.length - i - 1];
      }
    } else {
      snek.head0[1] = snek.head0[1];
    }
    direction = "up";
  }

  function moveDown() {
    let nextPosition = [snek.head0[0], snek.head0[1] + 1];

    // Check for collision with self
    for (let i = 1; i < Object.keys(snek).length; i++) {
      if (
        snek[`head${i}`][0] === nextPosition[0] &&
        snek[`head${i}`][1] === nextPosition[1]
      ) {
        gameOver = true;
        return;
      }
    }

    if (snek.head0[1] + 1 > gridHeight.length - 1) {
      gameOver = true;
      return;
    } else if (snek.head0[1] === gridHeight.length - 1) {
      snek.head0[1] = snek.head0[1];
    } else if (snek.head0[1] === 0 || snek.head0[1] > 0) {
      snek.head0[1] = snek.head0[1] + 1;
      moves.push(snek.head0.slice());
      for (let i = 1; i < Object.keys(snek).length; i++) {
        snek[`head${i}`] = moves[moves.length - i - 1];
      }
    }
    direction = "down";
  }

  function moveRight() {
    let nextPosition = [snek.head0[0] + 1, snek.head0[1]];

    // Check for collision with self
    for (let i = 1; i < Object.keys(snek).length; i++) {
      if (
        snek[`head${i}`][0] === nextPosition[0] &&
        snek[`head${i}`][1] === nextPosition[1]
      ) {
        gameOver = true;
        return;
      }
    }

    if (snek.head0[0] + 1 > gridWidth.length - 1) {
      gameOver = true;
      return;
    } else if (snek.head0[0] === gridWidth.length - 1) {
      snek.head0[0] = snek.head0[0];
    } else if (snek.head0[0] === 0 || snek.head0[0] > 0) {
      snek.head0[0] = snek.head0[0] + 1;
      moves.push(snek.head0.slice());
      for (let i = 1; i < Object.keys(snek).length; i++) {
        snek[`head${i}`] = moves[moves.length - i - 1];
      }
    }
    direction = "right";
  }

  function moveLeft() {
    let nextPosition = [snek.head0[0] - 1, snek.head0[1]];

    // Check for collision with self
    for (let i = 1; i < Object.keys(snek).length; i++) {
      if (
        snek[`head${i}`][0] === nextPosition[0] &&
        snek[`head${i}`][1] === nextPosition[1]
      ) {
        gameOver = true;
        return;
      }
    }

    if (snek.head0[0] - 1 < 0) {
      gameOver = true;
      return;
    } else if (snek.head0[0] > 0) {
      snek.head0[0] = snek.head0[0] - 1;
      moves.push(snek.head0.slice());
      for (let i = 1; i < Object.keys(snek).length; i++) {
        snek[`head${i}`] = moves[moves.length - i - 1];
      }
    } else {
      snek.head0[0] = snek.head0[0];
    }
    direction = "left";
  }

  function moveSnek(
    // takes in the two directions in which snek cannot turn while moving in its current direction, plus the correct movement function corresponding to key input
    restriction1: string,
    restriction2: string,
    moveFn: () => void
  ) {
    if (!paused) {
      if (direction !== restriction1 && direction !== restriction2) {
        moveFn();
        clearInterval(lastInterval);
        lastInterval = setInterval(() => {
          moveFn();
        }, speed);
      }
    }
  }

  // Listen to keydown event at the component level
  function handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        if (!gameOver) moveSnek("down", "up", moveUp);
        break;
      case "ArrowDown":
      case "KeyS":
        if (!gameOver) moveSnek("up", "down", moveDown);
        break;
      case "ArrowRight":
      case "KeyD":
        if (!gameOver) moveSnek("left", "right", moveRight);
        break;
      case "ArrowLeft":
      case "KeyA":
        if (!gameOver) moveSnek("right", "left", moveLeft);
        break;
      case "Space":
        if (!gameStart) {
          generateFood();
          gameStart = true;
          countdown(calculateCountdown());
        }
        if (gameOver) {
          // resets game when space bar is pressed
          moves = [];
          $currentTimedScore = 0;
          snek = {
            head0: [21, 9],
          };
          direction = "right";
          lastInterval = setInterval(() => {
            moveRight();
          }, speed);
          gameOver = false;
          generateFood();
          countdown(calculateCountdown());
        } else if (!gameOver && paused) {
          // handles pause behavior once first playthrough is started
          paused = false;
          lastInterval = setInterval(() => {
            if (direction === "up") {
              moveUp();
            } else if (direction === "down") {
              moveDown();
            } else if (direction === "right") {
              moveRight();
            } else if (direction === "left") {
              moveLeft();
            }
          }, speed);
          clearInterval(globalCountdown);
          countdown(pausedTime);
        } else {
          paused = true;
          clearInterval(lastInterval);
          clearInterval(globalCountdown);
        }
    }
  }

  let timeDisplay: number = 0; // dynamic text that displays in html
  let globalCountdown: any; // main countdown interval that is cleared every collision / food acquisition
  let pausedTime: number; // current second to hold when paused

  function countdown(timeAmount: number) {
    // essential function invoked upon collisions / food gains
    timeDisplay = timeAmount; // immediately updates display timer
    let currentSecond = timeAmount;
    pausedTime = timeAmount;
    globalCountdown = setInterval(() => {
      if (currentSecond === 0) {
        // determines how much to shave off snek based on length
        if (Object.keys(snek).length >= 8 && Object.keys(snek).length < 15) {
          for (let i = 0; i < 2; i++) {
            delete snek[`head${Object.keys(snek).length - 1}`];
          }
          $currentTimedScore = $currentTimedScore - 2;
          scoreNote = 2;
          scoreChangeClass = true;
          setTimeout(() => {
            scoreChangeClass = false;
          }, 2000);
        } else if (Object.keys(snek).length >= 15) {
          for (let i = 0; i < 4; i++) {
            delete snek[`head${Object.keys(snek).length - 1}`];
          }
          $currentTimedScore = $currentTimedScore - 4;
          scoreNote = 4;
          scoreChangeClass = true;
          setTimeout(() => {
            scoreChangeClass = false;
          }, 2000);
        } else {
          delete snek[`head${Object.keys(snek).length - 1}`];
          if ($currentTimedScore > 0)
            $currentTimedScore = $currentTimedScore - 1;
          scoreNote = 1;
          scoreChangeClass = true;
          setTimeout(() => {
            scoreChangeClass = false;
          }, 2000);
        }

        if (Object.keys(snek).length === 0) {
          // ends game if snek has lost all mass
          gameOver = true;
          const snakehead = document.querySelector(".activeSquare");
          snakehead?.classList.remove("activeSquare");
          return;
        }
        timeDisplay = 0;
        clearInterval(globalCountdown);
        countdown(calculateCountdown()); // recursive call to infinitely invoke the countdown
      } else {
        // decrement time as normal
        currentSecond--;
        pausedTime--;
        timeDisplay = currentSecond;
      }
    }, 1000);
  }

  let modal: any;
  onMount(() => {
    modal = document.querySelector("dialog");
    scoreChange = document?.querySelector(".score-change") ?? null;
    if (!$modalClosed) modal?.showModal();
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<dialog>
  <p>know before you play</p>
  <ul>
    <li>the time you have to reach food is based on your distance from it.</li>
    <li>
      when the countdown reaches the end of 0, you start losing mass.
      <ul>
        <li>
          body length is 1-7 units: <span style="color: var(--timed-mode);"
            >-1</span
          >
        </li>
        <li>
          body length is 8-14 units: <span style="color: var(--timed-mode);"
            >-2</span
          >
        </li>
        <li>
          body length is 15+ units: <span style="color: var(--timed-mode);"
            >-4</span
          >
        </li>
      </ul>
    </li>
  </ul>
  <button
    on:click={() => {
      modal?.close();
      $modalClosed = true;
    }}>ok, thanks</button
  >
</dialog>

<section class="above-game">
  <div class="hud">
    <p>
      <button on:click={() => ($timedActive = false)} class="menu-button"
        >return to menu</button
      >
    </p>
    <span>//</span>
    <p style="color: var(--timed-mode)">time crunch mode</p>
  </div>
  <p class="counter">{timeDisplay}</p>
  <div class="hud scores">
    <span class="score-change" class:showScoreChange={scoreChangeClass}
      >-{scoreNote}</span
    >
    <p>
      <span style="color: var(--snake-pink);">current score:</span>
      {$currentTimedScore}
    </p>
    <span>//</span>
    <p>
      <span style="color: var(--high-score);">high score:</span>
      {$timedHighScore}
    </p>
  </div>
</section>

<section class="game-grid">
  {#each gridHeight as _, row}
    <div class="grid-row">
      {#each gridWidth as _, col}
        <!-- sets active color on snek parts share coordinate indices  -->
        {#if Object.values(snek).some( (arr) => arr.every((val, index) => val === [col, row][index]) )}
          <div class="grid-square activeSquare"></div>
        {:else if col === foodCol && row === foodRow}
          <div class="grid-square foodSquare"></div>
        {:else}
          <div class="grid-square"></div>
        {/if}
      {/each}
    </div>
  {/each}
</section>

{#if !gameStart}
  <p>PRESS SPACE TO PLAY - USE WASD OR ARROW KEYS</p>
{:else if paused}
  <p>PAUSED</p>
{:else if gameOver}
  <p>GAME OVER - PRESS SPACE TO REPLAY</p>
{/if}

<style lang="scss">
  dialog {
    margin-top: 17%;
    p {
      font-size: 1.5rem;
      font-weight: 650;
      line-height: 0;
      margin-top: 0.7rem;
      margin-bottom: 2.5rem;
      text-align: center;
    }
    opacity: 0;
    color: var(--white-text);
    background-color: #161616;
    animation: fadeIn 0.2s ease-in forwards;
    border: solid 2px var(--snake-pink);
    border-radius: 15px;
    max-width: 800px;
    text-align: left;

    ul {
      padding-left: 0;
      font-size: 1rem;
      list-style: none;
      li {
        ul {
          padding-left: 1.5rem;
          li::before {
            color: var(--white-text);
          }
        }
      }
      li::before {
        content: "\2022";
        color: var(--snake-pink);
        padding-right: 0.5em;
      }
      li + li {
        margin-top: 0.8rem;
      }
    }

    button {
      color: var(--snake-pink);
      display: block;
      margin: 0 auto;
      margin-top: 1rem;
      font-weight: 500;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  .scores {
    position: relative;

    .score-change {
      opacity: 0;
      position: absolute;
      color: var(--timed-mode);
      font-size: 1.4rem;
      font-weight: 600;
      top: -2rem;
      left: 39%;
      transform: rotate(25deg);
      transition: opacity 0.2s;
    }
  }

  .showScoreChange {
    animation: swell 2s ease 1;
  }

  @keyframes swell {
    25% {
      opacity: 1;
      transform: scale(1.3) rotate(25deg);
    }
    50% {
      opacity: 1;
      transform: scale(1) rotate(25deg);
    }
    75% {
      opacity: 1;
      transform: scale(1.3) rotate(25deg);
    }
    100% {
      opacity: 0;
      transform: scale(1) rotate(25deg);
    }
  }

  .foodSquare {
    background-color: var(--timed-mode);
  }

  .above-game {
    position: relative;

    p.counter {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -75%);
      font-size: 2.2rem;
      line-height: 1.2;
      background-color: var(--bg-color);
      padding: 0em 1em;
      border-radius: 15px;
      border: solid 1px var(--white-text);
    }
  }
</style>
