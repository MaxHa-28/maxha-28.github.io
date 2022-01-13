let theme;

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  theme = true;
} else {
  document.documentElement.classList.remove("dark");
  theme = false;
}

document.getElementById("toggle-dark-mode").setAttribute("aria-checked", theme);

document.getElementById("toggle-dark-mode").onclick = function () {
  if (theme) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    theme = false;
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    document
      .getElementById("toggle-dark-mode")
      .setAttribute("aria-checked", "true");
    theme = true;
  }

  document
    .getElementById("toggle-dark-mode")
    .setAttribute("aria-checked", theme);
};
