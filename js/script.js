// JavaScript Document
// Responsive Menu - Drawer

const body = document.body;
const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("main-navigation");
const backBtn = document.getElementById("back-btn");

function setExpanded(isOpen) {
  btnMenu.setAttribute("aria-expanded", String(isOpen));
}

function toggleMenu() {
  const isOpen = !nav.classList.contains("active");
  nav.classList.toggle("active", isOpen);
  body.classList.toggle("menu-open", isOpen);
  setExpanded(isOpen);
}

btnMenu.addEventListener("click", toggleMenu);

btnMenu.addEventListener("mousedown", (e) => e.preventDefault());

body.addEventListener("click", (e) => {
  const isOpen = body.classList.contains("menu-open");
  if (isOpen && !nav.contains(e.target) && !btnMenu.contains(e.target)) {
    toggleMenu();
  }
});

const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (body.classList.contains("menu-open")) toggleMenu();
  });
});

backBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  body.classList.remove("menu-open");
  setExpanded(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.classList.contains("menu-open")) {
    toggleMenu();
  }
});
