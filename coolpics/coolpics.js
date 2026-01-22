let menuBtn = document.getElementById("menu-btn");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("open");
});