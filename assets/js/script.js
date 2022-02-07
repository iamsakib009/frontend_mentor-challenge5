const menu = document.querySelector(".menu");
const btnHamburger = document.querySelector(".hamburger");
const btnClose = document.querySelector("#btn-close");

// Show Menu
btnHamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

// Hide Menu
btnClose.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// Show and Hide Cart
const cartBtn = document.querySelector(".cart");
const mainCart = document.querySelector(".main-cart");
cartBtn.addEventListener("click", () => {
  mainCart.classList.toggle("hidden");
});
