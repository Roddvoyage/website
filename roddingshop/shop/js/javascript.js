const next = document.getElementById("next");
const previous = document.getElementById("previous");

let currentslide = "1";

function slideshownext() {
  if (currentslide === "1") {
    currentslide = "2";
    next.href = "#mugs-2";
  } else if (currentslide === "2") {
    currentslide = "3";
    next.href = "#mugs-3";
  } else {
    currentslide = "4";
    next.href = "#mugs-4";
  }
}

function slideshowprevious() {
  if (currentslide === "2") {
    currentslide = "1";
    previous.href = "#mugs-1";
  } else if (currentslide === "3") {
    currentslide = "2";
    previous.href = "#mugs-2";
  } else if (currentslide === "4") {
    currentslide = "3";
    previous.href = "#mugs-3";
  }
}

next.addEventListener("click", slideshownext);
previous.addEventListener("click", slideshowprevious);
