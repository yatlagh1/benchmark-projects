/* =========================================================
   MAXLiteracy — Write to Build Understanding Pilot Support
   ========================================================= */
(function () {
  'use strict';

  // Resource links not yet supplied use href="#": keep them from opening a
  // blank tab or jumping to the top of the page.
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // Close the section dropdown after choosing a section.
  document.querySelectorAll('.top-nav-menu .dropdown-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var toggle = document.querySelector('.top-nav-toggle');
      if (toggle && window.bootstrap) {
        bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
      }
    });
  });
})();
