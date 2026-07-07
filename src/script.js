import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit";
import Typed from "typed.js";

// DOM Elements
const hamburgerMenu = document.getElementById("hamburger");
const navbarMobile = document.getElementById("navsm");
const mobileLinks = document.querySelectorAll(".mobile-nav-item");
const darkModeBtn = document.getElementById("dark-mode-btn"); 
const htmlElement = document.documentElement;

// 1. Logic Dark Mode dengan Local Storage & State Emoji Toggle
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  htmlElement.classList.add("dark");
  darkModeBtn.textContent = "☀️";
} else {
  htmlElement.classList.remove("dark");
  darkModeBtn.textContent = "🌙";
}

darkModeBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  
  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkModeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkModeBtn.textContent = "🌙";
  }
});

// 2. Responsive Hamburger Menu Animation & Toggle Overlay
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbarMobile.classList.toggle("translate-x-full");
});

// Tutup menu mobile ketika link di-klik
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navbarMobile.classList.add("translate-x-full");
  });
});

// 3. Smart Floating Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 4. Initialize Animations on Load
window.addEventListener("DOMContentLoaded", () => {
  // AOS Initializer
  AOS.init({
    duration: 1000,
    once: true,
  });

  // TypeIt for Hero Component Name
  new TypeIt("#myName", {
    strings: ["Hi there, I am Johannes."],
    startDelay: 500,
    speed: 60,
    cursor: true,
  }).go();

  // TypedJS for Multi-roles Subtitle
  new Typed("#subtitle", {
    strings: ["Fullstack Engineer", "Tech Enthusiast", "Problem Solver"],
    typeSpeed: 80,
    backSpeed: 40,
    smartBackspace: true,
    loop: true,
    startDelay: 1500,
  });
});