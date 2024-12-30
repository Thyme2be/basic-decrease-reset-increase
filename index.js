const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const number = document.getElementById("number");
let count = 0;

decreaseBtn.onclick = function () {
  count--;
  number.textContent = count;
};
increaseBtn.onclick = function () {
  count++;
  number.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  number.textContent = count;
};
