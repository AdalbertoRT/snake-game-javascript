let canvas = document.querySelector("#snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "rigth";

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criaCobrinha() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function iniciarJogo() {
  criarBG();
  criaCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  switch (direction) {
    case "rigth":
      snakeX += box;
      break;
    case "left":
      snakeX -= box;
      break;
    case "up":
      snakeY -= box;
      break;
    case "down":
      snakeY += box;
      break;
  }

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
