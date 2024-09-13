const btn = document.querySelector("button");

const color = document.querySelector(".color");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(100)}, ${random(100)}, ${random(100)})`;
  document.body.style.backgroundColor = rndCol;
  color.innerHTML = rndCol;
});
 