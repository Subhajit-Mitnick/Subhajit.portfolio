
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active"); // Hide the menu
  });
});
