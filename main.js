const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

let bol = false;
toggle.addEventListener("click", () => {
  if (!bol) {
    toggle.src = "images/icon-close.svg";
    nav.style.height = "100%";
    document.body.style.overflow = "hidden";
    bol = true;
  } else {
    toggle.src = "images/icon-hamburger.svg";
    nav.style.height = "0";
    document.body.style.overflow = "auto";

    bol = false;
  }
});
