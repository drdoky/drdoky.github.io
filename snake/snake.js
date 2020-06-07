$canvas = $("#gcanvas")[0];
$canvas.width = 500;
$canvas.height = 500;
const ctx = $canvas.getContext("2d");  // 2d rajzolási környezet előállítása


// kígyó adatai:
var defaultTailSize = 3;
var tailSize = defaultTailSize;
var snakeTrail = [];
var headX = headY = 12;

// kaja
var foodX = foodY = -1;

// játék környezet
var gridSize = 25;
var tileSize = 20;
var nextX = nextY = 0;
var gameOver = true;
var score = 0;

function setFoodPos(pos = {x: 0, y: 0}) {
  pos.x = Math.floor(Math.random() * gridSize);
  pos.y = Math.floor(Math.random() * gridSize);
  if (coordIsOnSnake(pos)) setFoodPos(pos);
  foodX = pos.x;
  foodY = pos.y;
}

function setSnakeNewPos() {
  let neckX = headX;
  let neckY = headY;
  headX += nextX;
  headY += nextY;
  if (!snakeEatCheck({x: foodX, y: foodY})) snakeTrail.pop();
  snakeTrail.unshift({x: neckX, y: neckY});
}

function snakeEatCheck(pos) {
  if (coordIsOnSnakeHead(pos)) {
    score++;
    tailSize++;
    setFoodPos();
    return true;
  };
  return false;
}

function coordIsOnSnake(pos) {
  return (
    coordIsOnSnakeTrail(pos) ||
    coordIsOnSnakeHead(pos)
  );
}

function coordIsOnSnakeHead(pos) {
  return (pos.x == headX && pos.y == headY);
}

function coordIsOnSnakeTrail(pos) {
  let retVal = false;
  snakeTrail.forEach((trailPart) => {
    retVal = retVal || (pos.x == trailPart.x && pos.y == trailPart.y);
  });
  return retVal;
}

function collisionCheck(pos) {
  return (
    coordIsOnSnakeTrail(pos) ||
    pos.x < 0 ||
    pos.x >= gridSize ||
    pos.y < 0 ||
    pos.y >= gridSize
  );
}

function gameCycle () {
  if (gameOver) return;
  setSnakeNewPos();
  if (gameOver = collisionCheck({x: headX, y: headY})) {
    $(".gameover").show();
    return;
  }
  draw();
  $(".score").text(`Score: ${score}`);
  $(".length").text(`Length: ${snakeTrail.length}`);
}

function resetGame() {
  score = 0;
  tailSize = defaultTailSize;
  headX = headY = 13;
  snakeTrail = [];
  do {
    snakeTrail.push({x: headX, y: headY + 1 + snakeTrail.length});
  } while (snakeTrail.length < defaultTailSize);
  nextX = 0;
  nextY = -1;
  gameOver = false;
  setFoodPos();
  draw();
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, $canvas.width, $canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(foodX * tileSize, foodY * tileSize, tileSize, tileSize);

  ctx.fillStyle = "lime";
  ctx.fillRect(headX * tileSize, headY * tileSize, tileSize, tileSize);

  ctx.fillStyle = "green";
  snakeTrail.forEach((trailPart) => {
    ctx.fillRect(trailPart.x * tileSize, trailPart.y * tileSize, tileSize, tileSize);
  });
}

// játék"ciklus"
var iterationVal = 10;  // játékciklus-ismétlés száma másodpercenként
setInterval(gameCycle, 1000 / iterationVal);  // játékciklus időzítő

$(document).keydown(function (event) {
  //let key = event.which;  // info/hibakeresés
  //$(".info").text(key);  // info/hibakeresés
  switch (event.which) {
    case 37:  // left
      if (nextX == 1) break;
      nextX = -1;
      nextY = 0;
      break;
    case 39:  // right
      if (nextX == -1) break;
      nextX = 1;
      nextY = 0;
      break;
    case 38:  // up
      if (nextY == 1) break;
      nextX = 0;
      nextY = -1;
      break;
    case 40:  // down
      if (nextY == -1) break;
      nextX = 0;
      nextY = 1;
      break;
    case 27:  // esc
      gameOver = true;
      $(".gameover").show();
      break;
    case 32:  // space
      $(".gameover").hide();
      resetGame();
      break;
    case 88:  // x
      break;
    default:
      break;
  }
});