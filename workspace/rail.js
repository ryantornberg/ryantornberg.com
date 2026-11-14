// A section rail built from the contents list. It shows once the contents list
// has scrolled away, opens the current part, and marks the current section.
(function () {
  var rail = document.querySelector(".rail");
  var contents = document.getElementById("contents");
  if (!rail || !contents) return;
  var top = document.createElement("ol");
  var secs = [];
  [].forEach.call(contents.querySelectorAll(".side"), function (side) {
    var li = document.createElement("li");
    var name = document.createElement("div");
    name.className = "part-name";
    name.textContent = side.querySelector("h3").textContent;
    var inner = document.createElement("ol");
    [].forEach.call(side.querySelectorAll("li"), function (row) {
      var a = row.querySelector("a");
      var item = document.createElement("li");
      item.innerHTML = '<span class="n"></span><a></a>';
      item.firstChild.textContent = row.querySelector(".n").textContent;
      item.lastChild.textContent = a.textContent;
      item.lastChild.href = a.getAttribute("href");
      inner.appendChild(item);
      secs.push({ el: document.querySelector(a.getAttribute("href")), item: item, part: li });
    });
    li.appendChild(name);
    li.appendChild(inner);
    top.appendChild(li);
  });
  rail.appendChild(top);

  var queued = false;
  function paint() {
    queued = false;
    var past = contents.getBoundingClientRect().bottom < 60;
    rail.classList.toggle("on", past);
    var cur = null;
    secs.forEach(function (s) { if (s.el.getBoundingClientRect().top < 160) cur = s; });
    secs.forEach(function (s) { s.item.classList.remove("cur"); s.part.classList.remove("cur"); });
    if (cur) { cur.item.classList.add("cur"); cur.part.classList.add("cur"); }
  }
  addEventListener("scroll", function () { if (!queued) { queued = true; requestAnimationFrame(paint); } }, { passive: true });
  addEventListener("resize", paint);
  paint();
})();
