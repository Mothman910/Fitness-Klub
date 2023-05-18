console.log("czujka");
// Wysuwanie lewego menu
document
  .getElementById("left-navbar-hidden")
  .addEventListener("mouseover", () => {
    document.getElementById("left-navbar-hidden").classList.add("nav-hover");
  });
document
  .getElementById("left-navbar-hidden")
  .addEventListener("mouseleave", () => {
    document.getElementById("left-navbar-hidden").classList.remove("nav-hover");
  });
// Obliczanie wysokości lewego menu
let navHeight =
  document.getElementById("search").getBoundingClientRect().bottom > 0
    ? document.getElementById("search").getBoundingClientRect().bottom
    : 0;
document.getElementById(
  "left-navbar-hidden"
).style.height = `calc(100% - ${navHeight}px)`;
// Zachowanie głównego menu
if (innerWidth > 576) {
  document.getElementById("search").classList.remove("sticky-top");
  document
    .getElementsByClassName("main-nav")[0]
    .classList.remove("position-relative");
  document.getElementById("search").classList.add("position-fixed");
} else {
  document.getElementById("search").classList.add("sticky-top");
  document
    .getElementsByClassName("main-nav")[0]
    .classList.add("position-relative");
  document.getElementById("search").classList.remove("position-fixed");
}
addEventListener("resize", () => {
  if (innerWidth > 576) {
    document.getElementById("search").classList.remove("sticky-top");
    document
      .getElementsByClassName("main-nav")[0]
      .classList.remove("position-relative");
    document.getElementById("search").classList.add("position-fixed");
  } else {
    document.getElementById("search").classList.add("sticky-top");
    document
      .getElementsByClassName("main-nav")[0]
      .classList.add("position-relative");
    document.getElementById("search").classList.remove("position-fixed");
  }
  navHeight =
    document.getElementById("search").getBoundingClientRect().bottom > 0
      ? document.getElementById("search").getBoundingClientRect().bottom
      : 0;
  document.getElementById(
    "left-navbar-hidden"
  ).style.height = `calc(100% - ${navHeight}px)`;
});
addEventListener("scroll", () => {
  navHeight =
    document.getElementById("search").getBoundingClientRect().bottom > 0
      ? document.getElementById("search").getBoundingClientRect().bottom
      : 0;
  document.getElementById(
    "left-navbar-hidden"
  ).style.height = `calc(100% - ${navHeight}px)`;
});

// Import animacji shake
import { scroll2 } from "./shake.js";
scroll2();
import { scroll3 } from "./wypunktowanie.js";
scroll3();
