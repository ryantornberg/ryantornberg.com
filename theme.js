// The site's one script: the theme toggle. The stored choice is applied by an
// inline line in each page's <head>, before first paint, so it never flashes.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector("[data-theme-toggle]");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (!btn) return;

  function current() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }
  function paint() {
    var dark = current() === "dark";
    btn.textContent = dark ? "Light" : "Dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Switch to the light theme" : "Switch to the dark theme");
  }
  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });
  systemDark.addEventListener("change", paint);
  paint();
})();
