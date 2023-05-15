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
