const firstSquare = document.getElementById("first-square");
const secondSquare = document.getElementById("second-square");
const caneca = document.getElementById("caneca");
const roddingShop = document.getElementById("roddingShop");
const introScreen = document.getElementById("intro-screen");

let indexRoddingShop = 80;
let indexCaneca = 0;

function introRoddingShop() {
  const roddingShoploop = setInterval(() => {
    if (indexRoddingShop >= 200) {
      clearInterval(roddingShoploop);
    }
    indexRoddingShop = indexRoddingShop + 2;
    let wara = indexRoddingShop.toString();
    roddingShop.style.left = wara + "px";
  }, 10);
}

function redSquare() {
  firstSquare.style.display = "none";
}

function introCaneca() {
  const canecaloop = setInterval(() => {
    if (indexCaneca >= 170) {
      clearInterval(canecaloop);
    }
    indexCaneca = indexCaneca + 2;
    let wara = indexCaneca.toString();
    caneca.style.right = wara + "px";
  }, 10);
}
function blueSquare() {
  secondSquare.style.display = "none";
}

setTimeout(introRoddingShop, 500);
setTimeout(redSquare, 1500);
setTimeout(introCaneca, 1000);
setTimeout(blueSquare, 1700);

function disableScroll() {
  document.body.classList.add("remove-scrolling");
}

disableScroll();

let indexOpacity = 1;

function introClose() {
  const canecaloop = setInterval(() => {
    if (indexOpacity <= 0) {
      clearInterval(canecaloop);
    }
    indexOpacity = indexOpacity - 0.1;
    introScreen.style.opacity = indexOpacity;
  }, 50);
}
function removeScrollingFunction() {
  document.body.classList.remove("remove-scrolling");
  introScreen.style.display = "none";
}
setTimeout(introClose, 3000);
setTimeout(removeScrollingFunction, 3500);

window.onunload = function () {
  window.scrollTo(0, 0);
};
