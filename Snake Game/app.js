const gameBoard = document.querySelector(".game_board");
const showScore = document.querySelector(".score")
const showHighScore = document.querySelector(".high_score")

let boardSize = 30;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let directionX = 0, directionY = 0;
let setintervalId;
let gameOver = false;
let snakeSize = [];
let score = 0
let highScore = localStorage.getItem("high_score")


gameBoard.style = `grid-template: repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr);`;

const foodPositionChange = () => {
  foodX = Math.floor(Math.random() * boardSize + 1);
  foodY = Math.floor(Math.random() * boardSize + 1);
};

const moveSnake = (e) => {
  if (e.key === "ArrowDown" && directionY != -1) {
    directionX = 0;
    directionY = 1;
  } else if (e.key === "ArrowUp" && directionY != 1) {
    directionX = 0;
    directionY = -1;
  } else if (e.key === "ArrowLeft" && directionX != 1) {
    directionX = -1;
    directionY = 0;
  } else if (e.key === "ArrowRight" && directionX != -1) {
    directionX = 1;
    directionY = 0;
  }
  // startGame()
};

const gameOverHandler = () => {
  alert("Game Over");
  location.reload();
  clearInterval(setintervalId);
};

const updatedScore = () => {
    score++
    highScore = score >= highScore ? score : highScore
    localStorage.setItem("high_score", highScore)
    showScore.innerText = `Score: ${score}`
    showHighScore.innerText = `High Score: ${highScore}`
}


const eatFood = () => {
  if (foodX === snakeX && foodY === snakeY) {
    foodPositionChange();
    snakeSize.push([foodX, foodY]);
    updatedScore()
  }
};


const startGame = () => {
  if (gameOver) return gameOverHandler();
  gameBoard.innerHTML = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

  for(let j = snakeSize.length -1; j > 0; j--){
      snakeSize[j] = snakeSize[j - 1]
  }
  
  snakeY += directionY;
  snakeX += directionX;
  
  snakeSize[0] = [snakeX, snakeY];
  for (let i = 0; i < snakeSize.length; i++) {
      gameBoard.innerHTML += `<div class="snake" style="grid-area: ${snakeSize[i][1]}/${snakeSize[i][0]};"></div>`;
      if(i != 0 && snakeX === snakeSize[i][0] && snakeY === snakeSize[i][1]){
         gameOver = true
      }
    }

  if (
    snakeX <= 0 ||
    snakeX >= boardSize ||
    snakeY <= 0 ||
    snakeY >= boardSize
  ) {
    gameOver = true;
  }

  eatFood();
};

foodPositionChange();
setintervalId = setInterval(startGame, 100);


document.addEventListener("keydown", moveSnake);


