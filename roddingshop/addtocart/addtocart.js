/*const product = [
  {
    id: 0,
    image: "image/gg-1.jpg",
    title: "Z Flip Foldable Mobile ",
    price: 120,
  },
  {
    id: 1,
    image: "image/hh-2.jpg",
    title: "Air Pods Pro ",
    price: 60,
  },
  {
    id: 2,
    image: "image/ee-1.jpg",
    title: "250D DSLR Camera",
    price: 230,
  },
  {
    id: 3,
    image: "image/aa-1.jpg",
    title: "headphones ",
    price: 100,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    }),
  ),
];
let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
    <div class='img-box'><img class= 'images' src=${image}></img></div><div class='bottom'><p>${title}</p><h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div></div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}
function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'><div class='row-img'><img class='rowimg' src=${image}></div><p style='font-size: 12px;'>${title}</p><h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='ri-delete-bin-fill' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
  const buttonGroupPressed = (e) => {
  console.log(e.target.parentElement);
};

const buttonGroup = document.querySelector(".sidebar");

buttonGroup.addEventListener("click", buttonGroupPressed);

let y = total.innerHTML - e.target. 
}*/

let x;
function deleteItem(e) {
  x = e.target.parentElement;
  x.remove();
  let y = x.children[1].innerHTML;
  y = y.slice(0, -1);
  let z = total.innerHTML;

  z = z.slice(0, -1);

  let totalprice = z - y;
  totalprice = totalprice.toFixed(2);
  total.innerHTML = totalprice + "€";
}

document
  .querySelectorAll(".ri-delete-bin-fill")
  .forEach((e) => e.addEventListener("click", deleteItem));
