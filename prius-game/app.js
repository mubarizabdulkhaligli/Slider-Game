let prius = document.querySelector("#prius");
let upButton = document.querySelector("#up");
let downButton = document.querySelector("#down");
let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");

let topPosition = 0;
let leftPosition = 0;

upButton.addEventListener("click", moveUp);
downButton.addEventListener("click", moveDown);
leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    moveUp();
    upButton.classList.add("hover");
  } else if (event.code === "ArrowDown") {
    moveDown();
    downButton.classList.add("hover");
  } else if (event.code === "ArrowLeft") {
    moveLeft();
    leftButton.classList.add("hover");
  } else if (event.code === "ArrowRight") {
    moveRight();
    rightButton.classList.add("hover");
  }
});

document.addEventListener("keyup", function(event) {
  if (event.code === "ArrowUp") {
    upButton.classList.remove("hover");
  } else if (event.code === "ArrowDown") {
    downButton.classList.remove("hover");
  } else if (event.code === "ArrowLeft") {
    leftButton.classList.remove("hover");
  } else if (event.code === "ArrowRight") {
    rightButton.classList.remove("hover");
  }
});

function moveUp() {
  if (topPosition > -50) {
    topPosition -= 40;
    prius.style.top = topPosition + "px";
    prius.style.transform = "rotate(-90deg)";
  }
}

function moveDown() {
  if (topPosition < 450) {
    topPosition += 40;
    prius.style.top = topPosition + "px";
    prius.style.transform = "rotate(90deg)";
  }
}

function moveLeft() {
  if (leftPosition >= -50) {
    leftPosition -= 40;
    prius.style.left = leftPosition + "px";
    prius.style.transform = "rotateY(180deg)";
    
  }
}

function moveRight() {
  if (leftPosition <= 940) {
    leftPosition += 40;
    prius.style.left = leftPosition + "px";
    prius.style.transform = "rotateY(0deg)";
  }
}

function checkPosition() {
  if (topPosition > 380 && leftPosition > 750) {
    let gameOver = document.querySelector("#game-over");
    gameOver.style.display = "block";
    prius.style.display = "none"
  }
}

setInterval(checkPosition, 100);
