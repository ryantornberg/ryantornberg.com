// Stepped figures: step through one a press at a time.
// Used by the recorded-run figure and by the overview sheet. Each is an element marked data-replay
// that holds its own controls (.replay-controls) and items marked data-n="3", or data-n="1 8" for
// an item that belongs to more than one step.
// Without this script each figure shows everything, which is also how it starts.
// Nothing moves on its own: each change follows a button press.
(function () {
  [].forEach.call(document.querySelectorAll("[data-replay]"), function (box) {
    var controls = box.querySelector(".replay-controls");
    var items = [].slice.call(box.querySelectorAll("[data-n]"));
    if (!controls || !items.length) return;
    function steps(el) { return el.getAttribute("data-n").split(" ").map(Number); }
    var last = Math.max.apply(null, items.map(function (el) { return Math.max.apply(null, steps(el)); }));
    var mode = controls.querySelector("[data-replay-mode]");
    var back = controls.querySelector("[data-replay-back]");
    var next = controls.querySelector("[data-replay-next]");
    var status = controls.querySelector("[data-replay-status]");
    var off = mode.getAttribute("data-label-off") || "Step through the two runs";
    var on = mode.getAttribute("data-label-on") || "Show every step";
    var names = (box.getAttribute("data-step-names") || "").split("|");
    var step = null; // null shows everything

    function paint() {
      items.forEach(function (el) {
        var ns = steps(el);
        el.classList.toggle("is-pending", step !== null && ns.every(function (n) { return n > step; }));
        el.classList.toggle("is-current", step !== null && ns.indexOf(step) >= 0);
      });
      box.classList.toggle("is-stepping", step !== null);
      mode.textContent = step === null ? off : on;
      back.hidden = next.hidden = step === null;
      back.disabled = step !== null && step <= 1;
      next.disabled = step !== null && step >= last;
      var name = step !== null && names[step - 1] ? ": " + names[step - 1] : "";
      status.textContent = step === null ? "" : "Step " + step + " of " + last + name;
    }
    mode.addEventListener("click", function () { step = step === null ? 1 : null; paint(); });
    back.addEventListener("click", function () { if (step > 1) { step -= 1; paint(); } });
    next.addEventListener("click", function () { if (step < last) { step += 1; paint(); } });
    controls.hidden = false;
    paint();
  });
})();
