(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) return;

  var style = document.createElement("style");
  style.textContent =
    ".orb, .mark, .progress-fill { animation: none !important; }";
  document.head.appendChild(style);
})();
