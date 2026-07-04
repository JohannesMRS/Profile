import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit";
import Typed from "typed.js";

const hamburgerMenu = document.getElementById("hamburger");
const navbarMobile = document.getElementById("navsm");
const homeNav = document.getElementById("home");
const skillsNav = document.getElementById("skills");
const aboutNav = document.getElementById("about");
const darkModeBtn = document.getElementById("dark-mode-btn"); 

darkModeBtn.addEventListener("click", ()=>{
  alert("Clicked")
})

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => {
  AOS.init({
    duration: 1200,
    delay: 100,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#myName", {
    strings: ["Hi, There im Johannes"],
    startDelay: 1200,
  }).go();
});

var typed3 = new Typed("#subtitle", {
  strings: [" Programmer", " Human", " Web Developer"],
  typeSpeed: 100,
  backSpeed: 20,
  smartBackspace: true,
  loop: true,
  startDelay: 200,
});



