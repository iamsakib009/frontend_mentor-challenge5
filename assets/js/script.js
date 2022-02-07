//Selecting things
//Navigation
const menu = document.querySelector(".menu");
const btnHamburger = document.querySelector(".hamburger");
const btnClose = document.querySelector("#btn-close");
//Cart
const cartBtn = document.querySelector(".cart");
const mainCart = document.querySelector(".main-cart");
//Counter
const minusBtn = document.querySelector("#btn-minus");
const plusBtn = document.querySelector("#btn-plus");
const productCounter = document.querySelector(".counter");
// Gallery
const manImg = document.querySelector(".product-img");
const thumbSingleImg = document.querySelector(".image");

// Initial count
let counterValue = 1;

// Show Menu
btnHamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

// Hide Menu
btnClose.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// Show and Hide Cart

cartBtn.addEventListener("click", () => {
  mainCart.classList.toggle("hidden");
});

// Plus Count
plusBtn.addEventListener("click", () => {
  console.log("click");
  setProductCounter(1);
});
// Minus Count
minusBtn.addEventListener("click", () => {
  setProductCounter(-1);
});

const setProductCounter = (value) => {
  if (counterValue + value > 0) {
    counterValue += value;
    productCounter.innerHTML = counterValue;
  }
};
