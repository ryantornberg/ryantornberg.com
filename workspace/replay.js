// The recorded-run figure: step through it one action at a time.
// Without this script the figure shows every step, which is also how it starts.
// Nothing moves on its own: each change follows a button press.
(function () {
  var box = document.querySelector("[data-replay]");
  if (!box) return;
  var items = [].slice.call(box.querySelectorAll("[data-n]"));
  var last = Math.max.apply(null, items.map(function (el) { return +el.dataset.n; }));
  var mode = box.querySelector("[data-replay-mode]");
  var back = box.querySelector("[data-replay-back]");
  var next = box.querySelector("[data-replay-next]");
  var status = box.querySelector("[data-replay-status]");
  var step = null; // null shows everything

  function paint() {
    items.forEach(function (el) {
      var n = +el.dataset.n;
      el.classList.toggle("is-pending", step !== null && n > step);
      el.classList.toggle("is-current", step !== null && n === step);
    });
    mode.textContent = step === null ? "Step through" : "Show all";
    back.hidden = next.hidden = step === null;
    back.disabled = step !== null && step <= 1;
    next.disabled = step !== null && step >= last;
    status.textContent = step === null ? "" : "Step " + step + " of " + last;
  }
  mode.addEventListener("click", function () { step = step === null ? 1 : null; paint(); });
  back.addEventListener("click", function () { if (step > 1) { step -= 1; paint(); } });
  next.addEventListener("click", function () { if (step < last) { step += 1; paint(); } });
  box.querySelector(".replay-controls").hidden = false;
  paint();
})();
