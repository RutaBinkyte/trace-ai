/* TRACE-AI 2026 — script.js
   Handles the mobile navigation toggle only.
   Can be removed if a hamburger menu is not needed. */

(function () {
  'use strict';

  var btn  = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });

  /* Close menu when any nav link is tapped */
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}());
