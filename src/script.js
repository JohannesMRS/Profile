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
