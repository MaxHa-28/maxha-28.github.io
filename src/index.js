if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

document.getElementById("dark-mode-btn").onclick = function () {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
};

document.getElementById("light-mode-btn").onclick = function () {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
};
