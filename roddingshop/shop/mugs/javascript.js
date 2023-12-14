const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");
const photo5 = document.getElementById("photo5");
const addtocart = document.querySelector(".btn");
const blur = document.querySelector("#blur");
const cartConfirm = document.querySelector("#cart-confirm");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
const nrOfItems = document.getElementById("nr-of-items");
const quantityInput = document.getElementById("quantity-input");
let quantity = document.querySelector(".quantity-inputed");

function changepic1() {
  photo5.src = photo1.src;
  photo1.style.opacity = "1";
  photo2.style.opacity = "0.5";
  photo3.style.opacity = "0.5";
  photo4.style.opacity = "0.5";
}

function changepic2() {
  photo5.src = photo2.src;
  photo2.style.opacity = "1";
  photo1.style.opacity = "0.5";
  photo3.style.opacity = "0.5";
  photo4.style.opacity = "0.5";
}

function changepic3() {
  photo5.src = photo3.src;
  photo3.style.opacity = "1";
  photo2.style.opacity = "0.5";
  photo1.style.opacity = "0.5";
  photo4.style.opacity = "0.5";
}

function changepic4() {
  photo5.src = photo4.src;
  photo4.style.opacity = "1";
  photo2.style.opacity = "0.5";
  photo3.style.opacity = "0.5";
  photo1.style.opacity = "0.5";
}

function addToCart() {
  blur.style.display = "block";
  cartConfirm.style.display = "flex";
  quantityInput.innerHTML = `(quantity: ${quantity.value})`;
  console.log(quantity.value);
}

function addToCartConfirm() {
  blur.style.display = "none";
  cartConfirm.style.display = "none";
  nrOfItems.innerHTML = "1";
}

function addToCartCancel() {
  blur.style.display = "none";
  cartConfirm.style.display = "none";
}

photo1.addEventListener("click", changepic1);
photo2.addEventListener("click", changepic2);
photo3.addEventListener("click", changepic3);
photo4.addEventListener("click", changepic4);
addtocart.addEventListener("click", addToCart);
cancel.addEventListener("click", addToCartCancel);
confirm.addEventListener("click", addToCartConfirm);
console.log(photo1.src);
