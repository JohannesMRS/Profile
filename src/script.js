import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit";
import Typed from "typed.js";

const hamburgerMenu = document.getElementById("hamburger");
const navbarMobile = document.getElementById("navsm");
const homeNav = document.getElementById("home");
const skillsNav = document.getElementById("skills");
const aboutNav = document.getElementById("about");

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
    delay: 600,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#myName", {
    strings: ["Hi, There im Johannes"],
    startDelay: 1200,
  }).go();
});

// window.addEventListener("DOMContentLoaded", () => {
//   new TypeIt("#quotes", {
//     speed: 30,
//     waitUntilVisible: true,
//   })
//     .type("Nvver", { delay: 300 })
//     .move(-3)
//     .delete(1)
//     .type("e")
//     .move(null, { to: "END" })
//     .type(" let yees")
//     .pause(300)
//     .delete(2)
//     .type("sterday use up to muc")
//     .move(-4)
//     .type("o")
//     .move(null, { to: "END" })
//     .type("h of today.")
//     .pause(500)
//     .break({ delay: 500 })
//     .break({ delay: 500 })
//     .type("<em>- Will Rogers</em>")
//     .go();
// });

var typed3 = new Typed("#subtitle", {
  strings: [" Programmer", " Human", " Web Developer"],
  typeSpeed: 20,
  backSpeed: 20,
  smartBackspace: true, // this is a default
  loop: true,
});
// hamburgerMenu.addEventListener("click", () => {
//   navsm.classList.toggle("actived");
//   hamburgerMenu.classList.toggle("toggle");
//   event.stopPropagation();
// });

// window.addEventListener("click", () => {
//   if (navsm.classList.contains("actived")) {
//     if (!navsm.contains(event.target)) {
//       navsm.classList.remove("actived");
//       hamburgerMenu.classList.remove("toggle");
//     }
//   }
// });
