const selectColor = (event) => {
  const chosenColor = event.target.id;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = chosenColor;
};
const colorSquares = document.querySelectorAll(".color");
colorSquares.forEach((square) => {
  square.addEventListener("click", selectColor);
});
