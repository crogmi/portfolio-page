const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-links");
const links = document.querySelector(".menu-items");
const scrollContainer = document.querySelector(".scroll-container");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

// Meed to understand what is causing the error on the About and Contact links

links.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

scrollContainer.onwheel = function(event) {
    scrollContainer.scrollBy(0, event.deltaY);
    return false;
}