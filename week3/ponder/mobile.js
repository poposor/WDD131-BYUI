let menuBtn = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
    console.log("Menu button clicked");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
    for (let i = 0; i < nav.children.length; i++) {
        nav.children[i].style.display = "block";
    }
});