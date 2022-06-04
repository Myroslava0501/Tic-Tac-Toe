const area = document.getElementById("area");
let move = 0;
let result = "";
let contentWrapper = document.getElementById("content");
let modelResult = document.getElementById("model-result-wrapper");
let overlay = document.getElementById("overlay");
let btnClose = document.getElementById("btn-close");

area.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move++;
    check();
  }
});

function check() {
  const boxes = document.getElementsByClassName("box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "crosses";
      showResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML == "0" &&
      boxes[arr[i][1]].innerHTML == "0" &&
      boxes[arr[i][2]].innerHTML == "0"
    ) {
      result = "zeros";
      showResult(result);
    }
  }
}

const showResult = (winner) => {
  contentWrapper.innerHTML = `The winner is ${winner}`;
  modelResult.style.display = "block";
};
const closeModal = () => {
  modelResult.style.display = "block";
  location.reload();
};
overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
