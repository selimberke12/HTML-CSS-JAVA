const canvas = document.getElementById("game-board");
const context = canvas.getContext("2d");
const gridSize = 10;
const snakeColor = "#000";
const foodColor = "#FF0000";

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = "right";

function drawSnake() {
  snake.forEach(segment => {
    context.fillStyle = snakeColor;
    context.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

function drawFood() {
  context.fillStyle = foodColor;
  context.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateGame() {
  const head = Object.assign({}, snake[0]);

  switch (direction) {
    case "up":
      head.y -= 1;
      break;
    case "down":
      head.y += 1;
      break;
    case "left":
      head.x -= 1;
      break;
    case "right":
      head.x += 1;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    // Snake eats food [snake groeiproblemen?]
    food.x = Math.floor(Math.random() * canvas.width / gridSize);
    food.y = Math.floor(Math.random() * canvas.height / gridSize);
  } else {
    snake.pop();
  }

  if (head.x < 0 || head.x >= canvas.width / gridSize || head.y < 0 || head.y >= canvas.height / gridSize) {
    // ronde is klaar {je moet nog reset knop zetten nadat game klaar is}
    alert("Game Over!");
    snake = [{ x: 10, y: 10 }];
    direction = "right";
    food.x = 5;
    food.y = 5;
  }

  drawSnake();
  drawFood();
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
  }
});

setInterval(updateGame, 100);
