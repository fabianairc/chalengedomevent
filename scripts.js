const selectColor = (event) => {
  const chosenColor = event.target.id;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = chosenColor;
};
const colorSquares = document.querySelectorAll(".color");
colorSquares.forEach((square) => {
  square.addEventListener("click", selectColor);
});

const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".painterBlock");

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

gridSquares.forEach((square) =>
  square.addEventListener("mousemove", paintSquareOnMove)
);

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", resetGrid);
