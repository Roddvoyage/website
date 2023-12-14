const dropdown = document.querySelector(".dropdown");
const menu = document.getElementById("menu");
const firstMenu = document.querySelectorAll(".firstMenu");
const menuDropdown = document.getElementById("menuDropdown");
const addNewBook = document.getElementById("adding-new-book");
const blur = document.getElementById("blurr");
const x = document.querySelector(".x");
const x1 = document.querySelector(".x1");
const x2 = document.querySelector(".x2");
const check = document.querySelector(".check");
const check1 = document.querySelector(".check1");
const check2 = document.querySelector(".check2");
const pagesRead = document.getElementById("pagesRead");
const pagesReadx = document.querySelector(".pagesReadx");
const pagesReadx1 = document.querySelector(".pagesReadx1");
const pagesReadx2 = document.querySelector(".pagesReadx2");
const pagesReadCheck = document.querySelector(".pagesReadCheck");
const pagesReadCheck1 = document.querySelector(".pagesReadCheck1");
const pagesReadCheck2 = document.querySelector(".pagesReadCheck2");
const books = document.querySelector(".books");
const blur2 = document.getElementById("blur2");
const removeBook = document.getElementById("removeBook");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const editx = document.getElementById("edit");
const changeAlbum = document.getElementById("change-album");
const editBox = document.getElementById("edit-box");
const changeColorx = document.getElementById("change-color");
const changeTitlex = document.getElementById("change-title");
const editMenu = document.getElementById("edit-menu");
const html = document.querySelector("html");
const x34 = document.querySelector(".x34");
const check34 = document.querySelector(".check34");
const x3 = document.querySelector(".x3");
const x4 = document.querySelector(".x4");
const check3 = document.querySelector(".check3");
const check4 = document.querySelector(".check4");
let albumName = document.getElementById("album-name");
let currentHTMLBC = "#c53b54";
let colorChosen = "";
let boxShadowx = "40px 40px 40px rgb(0, 0, 0, 0.5)";

function edit() {
  blur.style.display = "flex";
  editBox.style.display = "flex";
  /*
  function editout(e) {
    if (e.target.id === "blurr") {
      blur.style.display = "none";
      editBox.style.display = "none";
    }
  }

  blur.addEventListener("click", editout);
  */
  x34.style.display = "flex";
}

function changeColor2(e) {
  colorChosen = e.srcElement.style.backgroundColor;
  html.style.backgroundColor = colorChosen;
}

function changeColor2x() {
  html.style.backgroundColor = currentHTMLBC;
  editBox.style.display = "none";
  blur.style.display = "none";
  changeColorx.style.transform = "translateY(0px)";
  changeColorx.style.transition = "transform 250ms ease-in-out";
  changeColorx.style.pointerEvents = "all";
  changeColorx.style.alignItems = "center";
  changeTitlex.style.display = "flex";
  editBox.style.display = "none";
  editMenu.style.height = "45%";
  editMenu.style.marginBottom = "25%";
  x34.style.display = "none";
  check34.style.display = "none";
}

function changeColor2check() {
  html.style.backgroundColor = colorChosen;
  currentHTMLBC = colorChosen;
  editBox.style.display = "none";
  blur.style.display = "none";
  changeColorx.style.transform = "translateY(0px)";
  changeColorx.style.transition = "transform 250ms ease-in-out";
  changeColorx.style.pointerEvents = "all";
  changeColorx.style.alignItems = "center";
  changeTitlex.style.display = "flex";
  editBox.style.display = "none";
  editMenu.style.height = "45%";
  editMenu.style.marginBottom = "25%";
  x34.style.display = "none";
  check34.style.display = "none";
}

x34.addEventListener("click", changeColor2x);
check34.addEventListener("click", changeColor2check);

function changeTitle() {
  changeTitlex.style.transform = "translateY(-20px)";
  changeTitlex.style.transition = "transform 250ms ease-in-out";
  changeTitlex.style.pointerEvents = "none";
  changeColorx.style.display = "none";
  const changeTitleInput = document.createElement("input");
  editBox.append(changeTitleInput);
  changeTitleInput.style.width = "250px";
  changeTitleInput.style.height = "50px";
  changeTitleInput.style.fontSize = "14pt";
  changeTitleInput.placeholder = albumName.innerHTML;
  changeTitleInput.style.marginBottom = "120px";
  editMenu.style.marginBottom = "0";
  editMenu.style.height = "5%";
  x34.style.display = "flex";
  check34.style.display = "flex";

  function changeTitleInputx() {
    albumName.innerHTML = changeTitleInput.placeholder;
    editBox.style.display = "none";
    blur.style.display = "none";
    changeTitlex.style.transform = "translateY(0px)";
    changeTitlex.style.transition = "transform 250ms ease-in-out";
    changeTitlex.style.pointerEvents = "all";
    changeTitlex.style.alignItems = "center";
    changeColorx.style.display = "flex";
    editBox.style.display = "none";
    editMenu.style.height = "45%";
    editMenu.style.marginBottom = "25%";
    x34.style.display = "none";
    check34.style.display = "none";
    changeTitleInput.remove();
  }

  function changeTitleInputcheck() {
    albumName.innerHTML =
      changeTitleInput.value.length === 0
        ? changeTitleInput.placeholder
        : changeTitleInput.value;
    editBox.style.display = "none";
    blur.style.display = "none";
    changeTitlex.style.transform = "translateY(0px)";
    changeTitlex.style.transition = "transform 250ms ease-in-out";
    changeTitlex.style.pointerEvents = "all";
    changeTitlex.style.alignItems = "center";
    changeColorx.style.display = "flex";
    editBox.style.display = "none";
    editMenu.style.height = "45%";
    editMenu.style.marginBottom = "25%";
    x34.style.display = "none";
    check34.style.display = "none";
    changeTitleInput.remove();
  }
  x34.addEventListener("click", changeTitleInputx);
  check34.addEventListener("click", changeTitleInputcheck);
}

function changeColor() {
  changeColorx.style.transform = "translateY(-40px)";
  changeColorx.style.transition = "transform 250ms ease-in-out";
  changeColorx.style.pointerEvents = "none";
  changeTitlex.style.display = "none";
  editMenu.style.height = "5%";
  editMenu.style.marginBottom = "0px";
  const colors = document.createElement("div");
  const color1 = document.createElement("div");
  const color2 = document.createElement("div");
  const color3 = document.createElement("div");
  const color4 = document.createElement("div");
  const color5 = document.createElement("div");
  const color6 = document.createElement("div");
  const color7 = document.createElement("div");
  const color8 = document.createElement("div");
  const color9 = document.createElement("div");
  const color10 = document.createElement("div");
  const color11 = document.createElement("div");
  const color12 = document.createElement("div");
  editBox.append(colors);
  colors.append(color1);
  colors.append(color2);
  colors.append(color3);
  colors.append(color4);
  colors.append(color5);
  colors.append(color6);
  colors.append(color7);
  colors.append(color8);
  colors.append(color9);
  colors.append(color10);
  colors.append(color11);
  colors.append(color12);

  color1.style.height = "60px";
  color1.style.width = "60px";
  color1.style.backgroundColor = "#fdc961";
  color1.style.cursor = "pointer";
  color1.className = "square";

  color2.style.height = "60px";
  color2.style.width = "60px";
  color2.style.backgroundColor = "#a78295";
  color2.style.cursor = "pointer";
  color2.className = "square";

  color3.style.height = "60px";
  color3.style.width = "60px";
  color3.style.backgroundColor = "#add8e5";
  color3.style.cursor = "pointer";
  color3.className = "square";

  color4.style.height = "60px";
  color4.style.width = "60px";
  color4.style.backgroundColor = "#f54242";
  color4.style.cursor = "pointer";
  color4.className = "square";

  color5.style.height = "60px";
  color5.style.width = "60px";
  color5.style.backgroundColor = "#eb579a";
  color5.style.cursor = "pointer";
  color5.className = "square";

  color6.style.height = "60px";
  color6.style.width = "60px";
  color6.style.backgroundColor = "#ec626a";
  color6.style.cursor = "pointer";
  color6.className = "square";

  color7.style.height = "60px";
  color7.style.width = "60px";
  color7.style.backgroundColor = "#81f542";
  color7.style.cursor = "pointer";
  color7.className = "square";

  color8.style.height = "60px";
  color8.style.width = "60px";
  color8.style.backgroundColor = "#42f584";
  color8.style.cursor = "pointer";
  color8.className = "square";

  color9.style.height = "60px";
  color9.style.width = "60px";
  color9.style.backgroundColor = "#429ef5";
  color9.style.cursor = "pointer";
  color9.className = "square";

  color10.style.height = "60px";
  color10.style.width = "60px";
  color10.style.backgroundColor = "#4e42f5";
  color10.style.cursor = "pointer";
  color10.className = "square";

  color11.style.height = "60px";
  color11.style.width = "60px";
  color11.style.backgroundColor = "#42f5e6";
  color11.style.cursor = "pointer";
  color11.className = "square";

  color12.style.height = "60px";
  color12.style.width = "60px";
  color12.style.backgroundColor = "#f54278";
  color12.style.cursor = "pointer";
  color12.className = "square";

  colors.style.height = "250px";
  colors.style.width = "90%";
  colors.style.backgroundColor = "rgb(31, 31, 31)";
  colors.style.display = "flex";
  colors.style.flexWrap = "wrap";
  colors.style.justifyContent = "space-around";
  colors.style.alignItems = "space-around";
  colors.style.gap = "20px";
  colors.style.paddingBottom = "20px";

  check34.style.display = "flex";

  colors.addEventListener("click", changeColor2);

  function colorsRemove() {
    colors.remove();
  }
  x34.addEventListener("click", colorsRemove);
  check34.addEventListener("click", colorsRemove);
}

function dropdownMenu() {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
    menuDropdown.style.height = "500px";
  } else {
    dropdown.style.display = "none";
    menuDropdown.style.height = "50px";
  }
}

function dropdownOff() {
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none";
    menuDropdown.style.height = "50px";
  }
}

function addNewBookInput() {
  blur.style.display = "flex";
  addNewBook.style.display = "flex";
}

function addNewBookClose() {
  blur.style.display = "none";
  addNewBook.style.display = "none";
  pagesRead.style.display = "none";
}

function xRed() {
  x1.style.backgroundColor = "red";
  x2.style.backgroundColor = "red";
}

function xRedOff() {
  x1.style.backgroundColor = "white";
  x2.style.backgroundColor = "white";
}

function checkGreen() {
  check1.style.backgroundColor = "green";
  check2.style.backgroundColor = "green";
}

function checkGreenOff() {
  check1.style.backgroundColor = "white";
  check2.style.backgroundColor = "white";
}

function xPagesReadRed() {
  pagesReadx1.style.backgroundColor = "red";
  pagesReadx2.style.backgroundColor = "red";
}

function xPagesReadRedOff() {
  pagesReadx1.style.backgroundColor = "white";
  pagesReadx2.style.backgroundColor = "white";
}

function checkPagesReadGreen() {
  pagesReadCheck1.style.backgroundColor = "green";
  pagesReadCheck2.style.backgroundColor = "green";
}

function checkPagesReadGreenOff() {
  pagesReadCheck1.style.backgroundColor = "white";
  pagesReadCheck2.style.backgroundColor = "white";
}

function pagesReadQuestion() {
  blur.style.display = "flex";
  pagesRead.style.display = "flex";
}

function pagesReadQuestionClose() {
  blur.style.display = "none";
  pagesRead.style.display = "none";
}

const bookLibrary = [];

class book {
  constructor(title, author, pages, pagesRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
  }
}

function addBook() {
  const bookDiv = document.createElement("div");
  bookDiv.style.height = "400px";
  bookDiv.style.width = "340px";
  bookDiv.style.backgroundColor = "white";
  bookDiv.style.margin = "20px";
  bookDiv.style.boxShadow = boxShadowx;

  const dotsDiv = document.createElement("div");
  dotsDiv.style.display = "flex";
  dotsDiv.style.flexDirection = "row";
  dotsDiv.style.justifyContent = "flex-end";
  dotsDiv.style.alignItems = "center";
  dotsDiv.style.marginRight = "20px";
  dotsDiv.style.paddingTop = "0";
  dotsDiv.style.marginTop = "0";
  dotsDiv.style.fontSize = "14pt";
  dotsDiv.style.height = "30px";

  const dots = document.createElement("p");
  dots.innerHTML = "-";
  dots.style.height = "5px";
  dots.style.cursor = "pointer";

  const books1body = document.createElement("div");
  books1body.style.display = "flex";
  books1body.style.height = "100px";
  books1body.style.flexDirection = "column";
  books1body.style.justifyContent = "space-between";
  books1body.style.alignItems = "center";
  books1body.style.margin = "25px";
  books1body.style.fontFamily = "ITCAvantGardeStd-Bk";

  const blackBar = document.createElement("div");
  blackBar.style.backgroundColor = "grey";
  blackBar.style.height = "50px";
  blackBar.style.color = "white";

  const blackBarValue = document.createElement("p");
  blackBarValue.style.display = "grid";
  blackBarValue.style.placeItems = "center";
  blackBarValue.style.color = "white";

  const titleInput = document.createElement("p");
  titleInput.maxLength = 5;

  const authorInput = document.createElement("p");
  const pagesInput = document.createElement("p");
  let y = bookLibrary.length;
  let bookTitleInput = document.getElementById("bookTitleInput");
  let bookAuthorInput = document.getElementById("bookAuthorInput");
  let bookPagesInput = document.getElementById("bookPagesInput");
  let titleInputValue = bookTitleInput.value;
  let authorInputValue = bookAuthorInput.value;
  let pagesInputValue = bookPagesInput.value + " pages";
  let read = document.createElement("p");
  read.style.fontFamily = "ITCAvantGardeStd-Bold";
  read.style.fontSize = "12pt";
  read.innerHTML = "not read";
  read.style.position = "relative";
  read.style.top = "190px";
  read.style.left = "240px";
  read.style.cursor = "pointer";
  read.style.color = "grey";
  read.style.textAlign = "right";
  read.style.width = "80px";

  function readColor() {
    if (read.innerHTML === "not read") {
      read.style.color = "green";
      read.innerHTML = "read!";
    } else {
      read.style.color = "grey";
      read.innerHTML = "not read";
    }
  }

  read.addEventListener("click", readColor);

  titleInput.style.fontFamily = "ITCAvantGardeStd-Bold";
  titleInput.style.fontSize = titleInputValue.length < 28 ? "21pt" : "18pt";
  titleInput.style.wordBreak = "break-word";
  titleInput.width = "90%";
  authorInput.style.wordBreak = "break-word";
  authorInput.width = "90%";
  authorInput.textAlign = "center";
  titleInput.height = "50px";
  titleInput.style.borderBottom = "2px solid black";
  titleInput.style.textAlign = "center";
  authorInput.style.fontFamily = "ITCAvantGardeStd-Md";
  authorInput.style.fontSize = "18pt";
  bookLibrary[y] = new book(titleInputValue, authorInputValue, pagesInputValue);
  titleInput.innerHTML = bookLibrary[y].title;
  authorInput.innerHTML = bookLibrary[y].author;
  pagesInput.innerHTML = bookLibrary[y].pages;

  books.appendChild(bookDiv);
  bookDiv.appendChild(dotsDiv);
  dotsDiv.appendChild(dots);
  bookDiv.appendChild(books1body);
  books1body.appendChild(titleInput);
  books1body.appendChild(authorInput);
  books1body.appendChild(pagesInput);
  blackBar.appendChild(blackBarValue);
  bookDiv.appendChild(read);

  addNewBookClose();

  function pagesReadQuestion(e) {
    blur.style.display = "flex";
    pagesRead.style.display = "flex";

    let pagesAnswer = document.getElementById("pagesAnswer");
    let w =
      e.target.parentElement.parentElement.parentElement.children[3].innerHTML;
    console.log(w.slice(0, -6));
    let z = w.slice(0, -6);
    let x = blackBarValue.innerHTML;
    let a = x.slice(0, -1);
    let b = Math.round(z * (a / 100));
    pagesAnswer.value = b;

    function percentageBarx() {
      blackBarValue.innerHTML = `${100 * (pagesAnswer.value / z)}%`;
      blackBar.style.width = `${100 * (pagesAnswer.value / z)}%`;
      pagesReadQuestionClose();
    }

    pagesReadCheck.addEventListener("click", percentageBarx);
  }

  function removeOpen(e) {
    blur.style.display = "flex";
    removeBook.style.display = "flex";

    let q = e.target.parentElement.parentElement;

    console.log(e.target.parentElement.parentElement);

    function removeOpenRemove() {
      q.remove();
      blur.style.display = "none";
      removeBook.style.display = "none";
    }

    function removeNotRemove() {
      blur.style.display = "none";
      removeBook.style.display = "none";
    }

    yes.addEventListener("click", removeOpenRemove);
    no.addEventListener("click", removeNotRemove);
  }

  dots.addEventListener("click", removeOpen);

  console.log("wara");

  pagesInput.style.marginTop = "20px";
}

editx.addEventListener("click", edit);
changeColorx.addEventListener("click", changeColor);
changeTitlex.addEventListener("click", changeTitle);

x.addEventListener("click", addNewBookClose);
x.addEventListener("mouseover", xRed);
x.addEventListener("mouseout", xRedOff);

check.addEventListener("click", addBook);
check.addEventListener("mouseover", checkGreen);
check.addEventListener("mouseout", checkGreenOff);

pagesReadx.addEventListener("click", pagesReadQuestionClose);
pagesReadx.addEventListener("mouseover", xPagesReadRed);
pagesReadx.addEventListener("mouseout", xPagesReadRedOff);

pagesReadCheck.addEventListener("mouseover", checkPagesReadGreen);
pagesReadCheck.addEventListener("mouseout", checkPagesReadGreenOff);

console.log("wara");

const introBackground = document.getElementById("intro-background");
const introimg = document.getElementById("introimg");

console.log("b" + 1);
console.dir(introimg);

/*
for (let i = 1; i < 12; i++) {
  (function (i) {
    setInterval(function () {
      introimg.src = "b" + i + ".png";
    }, 1000);
  })(i);
}
*/
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44,
];
let index = 1;

const loop = setInterval(() => {
  if (index === arr.length - 1) {
    clearInterval(loop);
  }
  introimg.src = "b" + index++ + ".png";
}, 25);

const arrSize = [
  200, 210, 220, 230, 240, 250, 240, 230, 220, 210, 200, 190, 180, 170, 160,
  150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0,
];
let index2 = 200;
function arrSizeFunction() {
  const loop2 = setInterval(() => {
    if (index2 === 250) {
      clearInterval(loop2);
    }
    console.log(index);
    introimg.style.height = index2++ + "px";
  }, 1);
}

function arrSizeFunction2() {
  const loop2 = setInterval(() => {
    if (index2 === 0) {
      clearInterval(loop2);
    }
    let wara = index--;
    let wara2 = wara - 1;
    introimg.style.height = wara2 + "px";
  }, 1);
}
let index3 = 1;
function introDisapper() {
  const loop3 = setInterval(() => {
    if (index3 === 0) {
      clearInterval(loop3);
    }
    index3 = index3 - 0.1;
    introBackground.style.opacity = index3;
  }, 25);
}

function introClose() {
  introBackground.style.display = "none";
}
setTimeout(arrSizeFunction, 1800);
setTimeout(arrSizeFunction2, 2000);
setTimeout(introDisapper, 2500);
setTimeout(introClose, 2600);
