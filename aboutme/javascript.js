const skillsh1 = document.querySelector("#skills h1");
let nroflogos = 30;

let logos = document.querySelector("#skills-logos");

function logochangecolor(e) {
  let x = e.srcElement.id;
  let y = x.replace(/ /g, "");

  e.srcElement.firstChild.src = y + ".png";

  if (x !== "skills-logos") {
    skillsh1.innerHTML = x;
    skillsh1.style.color = "white";
  } else {
    skillsh1.innerHTML = "skill";
    skillsh1.style.color = "transparent";
  }
  console.log(e.srcElement.firstChild.src);
}

function logochangecolorout(e) {
  let x = e.srcElement.id;
  let y = x.replace(/ /g, "");

  e.srcElement.firstChild.src = y + "grey.png";
  skillsh1.innerHTML = "skill";
  skillsh1.style.color = "transparent";
}

console.log(logos.children);
logos.addEventListener("mouseover", logochangecolor);
logos.addEventListener("mouseout", logochangecolorout);
