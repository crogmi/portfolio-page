const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-links");
const links = document.querySelector(".menu-items");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

// Meed to understand what is causing the error on the About and Contact links

links.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})