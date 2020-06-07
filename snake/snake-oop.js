class cSnake {
  #headPos = -1;
  #tail = [];

  constructor (pos) {
    this.#headPos = pos;
    // farok pos beállítása
  }
}

class cSnakeGame {
  #gameRegionWidth = 0;
  #gameRegionHeight = 0;
  #iterationVal = 5;  // játékciklus-ismétlés száma másodpercenként
  #snake = cSnake;

  constructor (width, height) {
    this.#gameRegionWidth = width;
    this.#gameRegionHeight = height;
    // kígyó beállítása
  }
}

$canvas = $("#canvas")[0];
var ctx = $canvas.getContext("2d");

var SnakeGameEnv = new cSnakeGame(500, 500);
//setInterval(draw, 1000 / iterationVal);  // játékciklus időzítő

$(document).keydown(function (event) {
  let key = event.which;
  //$(".info").text(key);
  switch (key) {
    case 88:  // x
      break;
    case 37:  // left
      break;
    case 39:  // right
      break;
    case 38:  // up
      break;
    case 40:  // down
      break;
    case 32:  // space
      break;
    case 27:  // esc
      break;
    default:
      break;
  }
});