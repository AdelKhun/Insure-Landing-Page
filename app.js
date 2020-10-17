const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const mobileActive = document.querySelector(".mobile-active");

const navStyle = nav.style;

hamburger.addEventListener("click", function (){
    nav.classList.toggle("mobile-active"); 
})
