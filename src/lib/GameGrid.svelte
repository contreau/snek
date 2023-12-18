<script lang="ts">
  // ** NOTES
  // * from the point of contact with food, active squares are added in the direction of the snake's movement and then the rest of the body follows

  const gridWidth = Array(21);
  const gridHeight = Array(11);
  let currentRow = 5; // starting row #
  let currentColumn = 10; // starting column #
  let gameOver = false;
  $: if (gameOver) clearInterval(lastInterval);
  let gameStart = false;
  let paused = true;
  let direction = "right"; // starting direction
  let speed = 50; // speed of snek
  let lastInterval: any; // essentially the game loop - the interval that is constantly updated every {speed} milliseconds and with each keypress

  function moveUp() {
    if (currentRow - 1 < 0) {
      gameOver = true;
      return;
    } else if (currentRow > 0) {
      currentRow = currentRow - 1;
    } else {
      currentRow = currentRow;
    }
    direction = "up";
    console.log(currentRow);
  }

  function moveDown() {
    if (currentRow + 1 > gridHeight.length - 1) {
      gameOver = true;
      return;
    } else if (currentRow === gridHeight.length - 1) {
      currentRow = currentRow;
    } else if (currentRow === 0 || currentRow > 0) {
      currentRow = currentRow + 1;
    }
    direction = "down";
    console.log(currentRow);
  }

  function moveRight() {
    if (currentColumn + 1 > gridWidth.length - 1) {
      gameOver = true;
      return;
    } else if (currentColumn === gridWidth.length - 1) {
      currentColumn = currentColumn;
    } else if (currentColumn === 0 || currentColumn > 0) {
      currentColumn = currentColumn + 1;
    }
    direction = "right";
    console.log(currentColumn);
  }

  function moveLeft() {
    if (currentColumn - 1 < 0) {
      gameOver = true;
      return;
    } else if (currentColumn > 0) {
      currentColumn = currentColumn - 1;
    } else {
      currentColumn = currentColumn;
    }
    console.log(currentColumn);
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
        if (!gameOver) moveSnek("down", "up", moveUp);
        break;
      case "ArrowDown":
        if (!gameOver) moveSnek("up", "down", moveDown);
        break;
      case "ArrowRight":
        if (!gameOver) moveSnek("left", "right", moveRight);
        break;
      case "ArrowLeft":
        if (!gameOver) moveSnek("right", "left", moveLeft);
        break;
      case "Space":
        if (!gameStart) gameStart = true;
        if (gameOver) {
          // resets game when space bar is pressed
          currentRow = 5;
          currentColumn = 10;
          direction = "right";
          lastInterval = setInterval(() => {
            moveRight();
          }, speed);
          gameOver = false;
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
        <div
          class={col === currentColumn && row === currentRow
            ? "grid-square activeSquare"
            : "grid-square"}
        ></div>
      {/each}
    </div>
  {/each}
</section>

{#if !gameStart}
  <p>PRESS SPACE TO PLAY</p>
{:else if paused}
  <p>PAUSED</p>
{:else if gameOver}
  <p>GAME OVER - PRESS SPACE TO REPLAY</p>
{/if}

<style lang="scss">
  .game-grid {
    display: grid;
    place-items: center;
    border: solid 2px #ffffff;
    max-width: fit-content;
    margin: 0 auto;
  }

  .grid-row {
    max-width: fit-content;
    display: flex;
  }
  .grid-square {
    height: clamp(10px, 3.5vw, 50px);
    width: clamp(10px, 3.5vw, 50px);
    border: 1px solid #ffffff1c;
  }

  .activeSquare {
    background-color: #ffffff;
  }
</style>
