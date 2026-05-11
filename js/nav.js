const currentPage = document.body.dataset.page;

// Marca o link da nav como ativo quando a página atual corresponde ao link
document.querySelectorAll(".nav-link, .mobile-link").forEach((link) => {
  link.classList.toggle("active", link.dataset.section === currentPage);
});

const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");

// Abre o menu mobile
function openMenu() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("open");
  document.body.classList.add("menu-open");
  navToggle.setAttribute("aria-expanded", "true");
}

// Fecha o menu mobile
function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);

// Fecha ao clicar fora do menu
mobileOverlay.addEventListener("click", closeMenu);

// Fecha com a tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
