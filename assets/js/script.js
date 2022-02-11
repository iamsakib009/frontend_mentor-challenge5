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
const mainImg = document.querySelector(".product-img");
const thumbSingleImg = document.querySelectorAll(".image");

// Previousbtn & NextBtn
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
// Initial count
let counterValue = 1;

// All Event Listeners

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

// Functions
const setProductCounter = (value) => {
  if (counterValue + value > 0) {
    counterValue += value;
    productCounter.innerHTML = counterValue;
  }
};

const onThumbSingleImgClick = (event) => {
  thumbSingleImg.forEach((img) => {
    img.classList.remove("active");
  });
  event.target.parentElement.classList.add("active");
  // update main image
  mainImg.src = event.target.src.replace("-thumbnail", "");
};

// thumb Image
thumbSingleImg.forEach((img) => {
  img.addEventListener("click", onThumbSingleImgClick);
});
