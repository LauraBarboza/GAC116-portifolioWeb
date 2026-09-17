const root = document.documentElement;
const themeButton = document.getElementById("themeToggle");
const storageKey = "laura-portfolio-theme";

function preferredTheme() {
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  themeButton.textContent = theme === "dark" ? "☀️ Tema claro" : "🌙 Tema escuro";
  themeButton.setAttribute(
    "aria-label",
    theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
  );
}

applyTheme(preferredTheme());

themeButton.addEventListener("click", () => {
  const current = root.getAttribute("data-bs-theme");
  const next = current === "dark" ? "light" : "dark";

  localStorage.setItem(storageKey, next);
  applyTheme(next);
});
