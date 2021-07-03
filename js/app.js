const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-links");
const links = document.querySelector(".menu-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})