const root = document.documentElement;
const themeButton = document.getElementById("themeToggle");
const burger = document.querySelector(".navbar-burger");
const menu = document.getElementById("menu");
const storageKey = "laura-portfolio-theme";

function preferredTheme() {
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.classList.toggle("dark-mode", theme === "dark");
  themeButton.textContent = theme === "dark" ? "☀️ Tema claro" : "🌙 Tema escuro";
  themeButton.setAttribute(
    "aria-label",
    theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
  );
}

applyTheme(preferredTheme());

themeButton.addEventListener("click", () => {
  const next = root.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem(storageKey, next);
  applyTheme(next);
});

// Menu responsivo do Bulma
burger.addEventListener("click", () => {
  const active = burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  burger.setAttribute("aria-expanded", String(active));
});

// Fecha o menu após clicar em um link no celular
document.querySelectorAll(".navbar-menu .navbar-item[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");
    burger.setAttribute("aria-expanded", "false");
  });
});
