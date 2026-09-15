(function () {
  var el = document.getElementById("count");
  if (!el) return;
  var seconds = 5 * 60;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function render(value) {
    var m = Math.floor(value / 60);
    var s = value % 60;
    el.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  render(seconds);
  if (reduced) return;

  var timer = window.setInterval(function () {
    seconds -= 1;
    if (seconds < 0) seconds = 5 * 60;
    render(seconds);
  }, 1000);
})();
