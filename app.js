const randomizeBtn = document.querySelector(".randomBtn");
const box = document.querySelectorAll(".box");

const getRandomNumber = function () {
  return Math.floor(Math.random() * 255 + 1);
};

randomizeBtn.addEventListener("click", function () {
  for (let i = 0; i < box.length; i++) {
    box[
      i
    ].style.backgroundColor = `rgb( ${getRandomNumber()} ,${getRandomNumber()} , ${getRandomNumber()} )`;

    box[i].addEventListener("click", function (event) {
      event.target.innerHTML = box[i].style.backgroundColor;
    });
  }
});

// const onChangePaletteColors = function () {
//   for (let i = 0; i < box.length; i++) {
//     box[i].innerHTML = box[i].style.backgroundColor;
//   }
// };
