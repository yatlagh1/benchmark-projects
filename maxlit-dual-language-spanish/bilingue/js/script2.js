(function () {
  "use strict";

  // -------------------------
  // Utilities
  // -------------------------

  function cssEscapeSafe(sel) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(sel);
    return String(sel).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  function normalizePathFromUrlish(urlish) {
    if (!urlish) return "";
    var s = String(urlish).trim();

    s = s.split("#")[0].split("?")[0];

    if (!s || s === "#" || s === "/#" || s.toLowerCase().indexOf("javascript") === 0) return "";

    try {
      var u = new URL(s, window.location.origin);
      s = u.pathname || "";
    } catch (e) {}

    if (s && s.charAt(0) !== "/") s = "/" + s;
    if (s.length > 1 && s.charAt(s.length - 1) === "/") s = s.slice(0, -1);

    return s.toLowerCase();
  }

  function getNavTarget(a) {
    if (!a) return "";
    return (
      a.getAttribute("data-extlink") ||
      a.getAttribute("data-extLink") ||
      a.getAttribute("href") ||
      ""
    );
  }

  function getNavDisplayText(a) {
    if (!a) return "";
    var p = a.querySelector("p");
    var t = p ? p.textContent : a.textContent;
    return (t || "").trim().toLowerCase();
  }

  function isValidInternalNavLink(a) {
    if (!a) return false;
    var tgt = normalizePathFromUrlish(getNavTarget(a));
    return !!tgt;
  }

  function navigateByClick(aOrUrl, fallbackUrl) {
    try {
      if (!aOrUrl) return false;

      if (aOrUrl && aOrUrl.nodeType === 1) {
        var a = aOrUrl;
        var raw = getNavTarget(a);
        var tgt = raw && raw !== "#" ? raw : "";
        if (!tgt) return false;

        try {
          sessionStorage.setItem("NAV_LAST_TARGET", tgt);
        } catch (e0) {}

        try {
          a.setAttribute("href", tgt);
        } catch (e1) {}

        a.click();
        return true;
      }

      var url = String(aOrUrl || fallbackUrl || "");
      if (!url || url === "#") return false;

      var temp = document.createElement("a");
      temp.href = url;
      temp.style.display = "none";
      document.body.appendChild(temp);

      try {
        sessionStorage.setItem("NAV_LAST_TARGET", url);
      } catch (e2) {}

      temp.click();
      document.body.removeChild(temp);
      return true;
    } catch (e) {
      return false;
    }
  }

  // -------------------------
  // Active detection
  // -------------------------

  function findActiveNavLink() {
    var navLinks = document.querySelectorAll('#nav_root a[data-type="internal"]');
    if (!navLinks.length) return null;

    var currentPath = normalizePathFromUrlish(window.location.pathname);
    var lastTarget = normalizePathFromUrlish(sessionStorage.getItem("NAV_LAST_TARGET") || "");
    var titleText = (document.title || "").trim().toLowerCase();

    function matchByPath(pathNeedle) {
      if (!pathNeedle) return null;
      for (var i = 0; i < navLinks.length; i++) {
        var tgt = normalizePathFromUrlish(getNavTarget(navLinks[i]));
        if (!tgt) continue;
        if (tgt === pathNeedle) return navLinks[i];
      }
      return null;
    }

    var hit = matchByPath(currentPath);
    if (hit) return hit;

    hit = matchByPath(lastTarget);
    if (hit) return hit;

    if (titleText) {
      for (var j = 0; j < navLinks.length; j++) {
        if (getNavDisplayText(navLinks[j]) === titleText) return navLinks[j];
      }
    }

    return null;
  }

  // -------------------------
  // Active styling + expansion
  // -------------------------

  function clearExistingActive() {
    var existing = document.querySelectorAll('#nav_root a.active, #nav_root a.is-active');
    for (var i = 0; i < existing.length; i++) {
      existing[i].classList.remove("active", "is-active");
      existing[i].removeAttribute("aria-current");
      var p = existing[i].querySelector("p");
      if (p) p.classList.remove("active", "is-active");
    }
  }

  function setActive(a) {
    clearExistingActive();
    if (!a) return;

    a.classList.add("active", "is-active");
    a.setAttribute("aria-current", "page");

    var p = a.querySelector("p");
    if (p) p.classList.add("active", "is-active");
  }

  function showCollapse(el) {
    if (!el) return;

    if (window.bootstrap && window.bootstrap.Collapse) {
      var inst = window.bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });
      inst.show();
      return;
    }

    el.classList.add("show");
    el.style.height = "auto";
  }

  function expandParents(a) {
    if (!a) return;

    var node = a.parentElement;
    while (node && node !== document.body) {
      if (node.classList && node.classList.contains("collapse")) {
        showCollapse(node);

        var id = node.getAttribute("id");
        if (id) {
          var btn = document.querySelector('[data-bs-target="#' + cssEscapeSafe(id) + '"]');
          if (btn) {
            btn.classList.remove("collapsed");
            btn.setAttribute("aria-expanded", "true");
          }
        }
      }
      node = node.parentElement;
    }
  }

  // -------------------------
  // Scope detection
  // -------------------------

  function getOverviewScopeRoot(a) {
    if (!a) return null;

    return (
      a.closest('#nav_unit_overview_body') ||
      a.closest('#nav_overview_1_body') ||
      a.closest('#nav_overview_2_body') ||
      a.closest('#nav_overview_3_body') ||
      a.closest('#nav_overview_4_body') ||
      a.closest('[id^="nav_overview_"][id$="_body"]') ||
      null
    );
  }

  function getWeekScopeRoot(a) {
    if (!a) return null;

    var node = a.parentElement;
    var found = null;

    while (node && node !== document.body) {
      if (node.id && /^nav_week_\d+_body$/i.test(node.id)) {
        found = node;
      }
      node = node.parentElement;
    }

    return found;
  }

  function getScopedRoot(activeA) {
    if (!activeA) return null;

    var overviewRoot = getOverviewScopeRoot(activeA);
    if (overviewRoot) return overviewRoot;

    var weekRoot = getWeekScopeRoot(activeA);
    if (weekRoot) return weekRoot;

    return activeA.closest(".card-body");
  }

  // -------------------------
  // Prev/Next scoping
  // -------------------------

  function scopedLinkList(activeA) {
    if (!activeA) return { links: [], idx: -1, scopeRoot: null };

    var scopeRoot = getScopedRoot(activeA);
    if (!scopeRoot) return { links: [], idx: -1, scopeRoot: null };

    var all = scopeRoot.querySelectorAll('a[data-type="internal"]');
    var links = [];

    for (var i = 0; i < all.length; i++) {
      var link = all[i];
      if (!isValidInternalNavLink(link)) continue;
      links.push(link);
    }

    var activeTgt = normalizePathFromUrlish(getNavTarget(activeA));
    var idx = -1;

    for (var j = 0; j < links.length; j++) {
      var t = normalizePathFromUrlish(getNavTarget(links[j]));
      if (links[j] === activeA || (activeTgt && t === activeTgt)) {
        idx = j;
        break;
      }
    }

    return { links: links, idx: idx, scopeRoot: scopeRoot };
  }

  // -------------------------
  // Prev/Next buttons
  // -------------------------

  function getPrevButtons() {
    var btns = document.querySelectorAll('.top-page-nav .top-nav-btn-prev');
    if (btns.length) return btns;
    return document.querySelectorAll('.top-page-nav button[data-nav="prev"]');
  }

  function getNextButtons() {
    var btns = document.querySelectorAll('.top-page-nav .top-nav-btn-next');
    if (btns.length) return btns;
    return document.querySelectorAll('.top-page-nav button[data-nav="next"]');
  }

  function isPrevButton(btn) {
    if (!btn) return false;
    return btn.classList.contains("top-nav-btn-prev") || btn.getAttribute("data-nav") === "prev";
  }

  function isNextButton(btn) {
    if (!btn) return false;
    return btn.classList.contains("top-nav-btn-next") || btn.getAttribute("data-nav") === "next";
  }

  function setBtnDisabled(btn, disabled) {
    if (!btn) return;

    btn.disabled = !!disabled;
    btn.classList.toggle("disabled", !!disabled);
    btn.setAttribute("aria-disabled", disabled ? "true" : "false");

    var circle = btn.querySelector(".top-nav-icon-circle");
    if (circle) {
      circle.classList.remove("is-active", "is-prev-active");
      circle.classList.toggle("is-inactive", !!disabled);

      if (!disabled) {
        if (isPrevButton(btn)) circle.classList.add("is-prev-active");
        else circle.classList.add("is-active");
      }
    }
  }

  function wirePrevNext(activeA) {
    var scoped = scopedLinkList(activeA);
    var links = scoped.links;
    var idx = scoped.idx;

    var prevBtns = getPrevButtons();
    var nextBtns = getNextButtons();

    if (!links.length || idx < 0) {
      for (var a = 0; a < prevBtns.length; a++) setBtnDisabled(prevBtns[a], true);
      for (var b = 0; b < nextBtns.length; b++) setBtnDisabled(nextBtns[b], true);
      return;
    }

    var hasPrev = idx > 0;
    var hasNext = idx < links.length - 1;

    for (var p = 0; p < prevBtns.length; p++) setBtnDisabled(prevBtns[p], !hasPrev);
    for (var n = 0; n < nextBtns.length; n++) setBtnDisabled(nextBtns[n], !hasNext);

    function goTo(newIdx) {
      if (newIdx < 0 || newIdx >= links.length) return;

      var targetA = links[newIdx];
      if (!targetA) return;

      navigateByClick(targetA);
    }

    function onClick(e) {
      e.preventDefault();

      if (isPrevButton(this) && hasPrev) goTo(idx - 1);
      if (isNextButton(this) && hasNext) goTo(idx + 1);
    }

    for (var p2 = 0; p2 < prevBtns.length; p2++) prevBtns[p2].onclick = onClick;
    for (var n2 = 0; n2 < nextBtns.length; n2++) nextBtns[n2].onclick = onClick;
  }

  // -------------------------
  // Nav link click handling
  // -------------------------

  function wireNavClicks() {
    document.addEventListener(
      "click",
      function (e) {
        var a =
          e.target && e.target.closest
            ? e.target.closest('#nav_root a[data-type="internal"]')
            : null;
        if (!a) return;

        var raw = getNavTarget(a);
        var tgt = raw && raw !== "#" ? raw : "";
        if (!tgt) return;

        try {
          sessionStorage.setItem("NAV_LAST_TARGET", tgt);
        } catch (e0) {}

        e.preventDefault();
        navigateByClick(a);
      },
      true
    );
  }

  // -------------------------
  // Init
  // -------------------------

  function init() {
    wireNavClicks();

    var activeA = findActiveNavLink();
    setActive(activeA);
    expandParents(activeA);
    wirePrevNext(activeA);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();