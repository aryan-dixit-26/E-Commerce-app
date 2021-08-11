const loginbutton = document.querySelector("#login-home button");
loginbutton.addEventListener("click", () => {
  window.location = "login.html";
});

const menButton = document.querySelector("#men-button");
const womenButton = document.querySelector("#women-button");
const kidsButton = document.querySelector("#kids-button");
const menDropDown = document.querySelector(".drop-down-men");
const womenDropDown = document.querySelector(".drop-down-women");
const kidsDropDown = document.querySelector(".drop-down-kids");
const categories = document.querySelector(".categories");
menButton.addEventListener("click", () => {
  categories.classList.toggle("fadeOut");

  setTimeout(() => {
    menDropDown.classList.toggle("fadeIn");
  }, 1000);
});
womenButton.addEventListener("click", () => {
  categories.classList.toggle("fadeOut");
  setTimeout(() => {
    womenDropDown.classList.toggle("fadeIn");
  }, 1000);
});
kidsButton.addEventListener("click", () => {
  categories.classList.toggle("fadeOut");
  setTimeout(() => {
    kidsDropDown.classList.toggle("fadeIn");
  }, 1000);
});

const payment = document.querySelector('#cart-home-page img');
payment.addEventListener("click", ()=> {
    window.location = "cart.html";
});
