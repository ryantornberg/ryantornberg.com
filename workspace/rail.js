// Section navigation for a long page. One list of sections, shown two ways:
// a rail beside the text on wide screens, and a "Sections" button that opens
// the same list as a menu on narrower ones. Both start with "Top".
// The list comes from the contents list (#contents) when the page has one,
// and from the page's numbered sections when it does not.
// Without this script the fixed link still works: it goes to the contents or the top.
(function () {
  var rail = document.querySelector(".rail");
  if (!rail) return;
  var contents = document.getElementById("contents");
  var groups = [];
  if (contents) {
    [].forEach.call(contents.querySelectorAll(".side"), function (side) {
      var items = [].map.call(side.querySelectorAll("li"), function (row) {
        var a = row.querySelector("a");
        return { n: row.querySelector(".n").textContent, text: a.textContent, href: a.getAttribute("href") };
      });
      groups.push({ name: side.querySelector("h3").textContent, items: items });
    });
  } else {
    var flat = [].map.call(document.querySelectorAll("section.sec[id]"), function (sec) {
      var n = sec.querySelector("h3 .n");
      var num = n ? n.textContent : "";
      return { n: num, text: sec.querySelector("h3").textContent.replace(num, "").trim(), href: "#" + sec.id };
    });
    groups.push({ name: null, items: flat });
  }

  var secs = [];
  function entry(href, label) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.className = "part-name";
    a.href = href;
    a.textContent = label;
    li.appendChild(a);
    return li;
  }
  // Builds the list once for the rail and once for the menu.
  function build() {
    var top = document.createElement("ol");
    top.appendChild(entry("#top", "Top"));
    if (contents) top.appendChild(entry("#contents", "Contents"));
    groups.forEach(function (g) {
      var li = g.name ? entry(g.items[0].href, g.name) : document.createElement("li");
      if (!g.name) li.className = "flat";
      var inner = document.createElement("ol");
      g.items.forEach(function (it) {
        var item = document.createElement("li");
        item.innerHTML = '<span class="n"></span><a></a>';
        item.firstChild.textContent = it.n;
        item.lastChild.textContent = it.text;
        item.lastChild.href = it.href;
        inner.appendChild(item);
        secs.push({ el: document.querySelector(it.href), item: item, part: li });
      });
      li.appendChild(inner);
      top.appendChild(li);
    });
    return top;
  }
  rail.appendChild(build());

  // The fixed link becomes a button that opens the same list, where the browser supports it.
  var back = document.querySelector(".to-contents");
  if (back && "popover" in HTMLElement.prototype) {
    var menu = document.createElement("nav");
    menu.id = "jump";
    menu.className = "jump";
    menu.setAttribute("popover", "");
    menu.setAttribute("aria-label", "Jump to a section");
    menu.appendChild(build());
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) menu.hidePopover(); });
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = back.className;
    btn.textContent = "Sections";
    btn.setAttribute("popovertarget", "jump");
    // A click only opens the menu. It closes on a choice, on Escape or on a click elsewhere.
    btn.setAttribute("popovertargetaction", "show");
    back.replaceWith(btn);
    btn.after(menu);
    back = btn;
    // With a mouse, resting on the button opens the menu, and leaving both closes it.
    // Touch and keyboard still open it with a tap or Enter.
    var leaving = null;
    function over(e) {
      if (e.pointerType !== "mouse") return;
      clearTimeout(leaving);
      if (!menu.matches(":popover-open")) menu.showPopover();
    }
    function out(e) {
      if (e.pointerType !== "mouse") return;
      clearTimeout(leaving);
      leaving = setTimeout(function () { if (menu.matches(":popover-open")) menu.hidePopover(); }, 300);
    }
    [btn, menu].forEach(function (el) {
      el.addEventListener("pointerenter", over);
      el.addEventListener("pointerleave", out);
    });
  }

  var edge = contents || document.querySelector(".cover");
  var queued = false;
  function paint() {
    queued = false;
    var past = edge ? edge.getBoundingClientRect().bottom < 60 : true;
    rail.classList.toggle("on", past);
    if (back) back.classList.toggle("on", past);
    var cur = null;
    secs.forEach(function (s) { if (s.el.getBoundingClientRect().top < 160) cur = s.el; });
    secs.forEach(function (s) { s.item.classList.remove("cur"); s.part.classList.remove("cur"); });
    secs.forEach(function (s) { if (s.el === cur) { s.item.classList.add("cur"); s.part.classList.add("cur"); } });
  }
  addEventListener("scroll", function () { if (!queued) { queued = true; requestAnimationFrame(paint); } }, { passive: true });
  addEventListener("resize", paint);
  paint();
})();
