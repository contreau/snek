<script lang="ts">
  import { currentScore, highScore } from "./store";

  // ** debug console logs if needed:
  // console.log("column:", gridWidth);
  // console.log("row:", gridHeight);
  // console.log(snek);
  // $: moves, console.log("moves", moves);

  let snek: Record<string, number[]> = {
    // coordinate pairs are in order x, y (column, row)
    head0: [21, 9],
  };

  let moves: number[][] = [];

  const gridWidth = Array(43);
  const gridHeight = Array(19);
  let foodRow: number;
  let foodCol: number;
  let gameOver = false;
  let gameStart = false;
  let paused = true;
  let direction = "right"; // starting direction
  let speed = 50; // speed of snek
  let lastInterval: any; // essentially the game loop - the interval that is constantly updated every {speed} milliseconds and with each keypress

  // * Reactivity
  // score increases when head of snek intersects with food
  $: if (snek.head0[1] === foodRow && snek.head0[0] === foodCol) {
    snek[`head${Object.keys(snek).length}`] = moves[moves.length - 1];
    generateFood();
    $currentScore += 1;
  }

  // upon game over, movement interval is cleared and high score updated
  $: if (gameOver) {
    clearInterval(lastInterval);
    if ($highScore < $currentScore) $highScore = $currentScore;
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
      moves = moves;
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
      moves = moves;
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
      moves = moves;
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
      moves = moves;
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
        }
        if (gameOver) {
          // resets game when space bar is pressed
          $currentScore = 0;
          snek = {
            head0: [21, 9],
          };
          direction = "right";
          lastInterval = setInterval(() => {
            moveRight();
          }, speed);
          gameOver = false;
          generateFood();
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
        } else {
          paused = true;
          clearInterval(lastInterval);
        }
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

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
  .game-grid {
    display: grid;
    place-items: center;
    border-radius: 5px;
    max-width: fit-content;
    margin: 0 auto;
    background-color: #191919;
  }

  .grid-row {
    max-width: fit-content;
    display: flex;
  }
  .grid-square {
    height: clamp(10px, 3.5vw, 28px);
    width: clamp(10px, 3.5vw, 28px);
    border-radius: 7.5px;
    border: solid 1px #ff46b517;
  }

  .activeSquare {
    background-color: #ff46b5;
  }

  .foodSquare {
    background-color: #ffffff;
  }

  p {
    color: var(--white-text);
  }
</style>
