/* ─────────────────────────────────────────────────────────────
   Pixel Loom · Theme toggle
   - First visit follows system preference via prefers-color-scheme
   - User can manually override; preference persists in localStorage
   - Toggle button cycles light ↔ dark; system preference change is
     respected only while no manual override is set.
   ───────────────────────────────────────────────────────────── */
(function () {
  var STORAGE_KEY = 'pixel-loom-theme';
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  // 1. Apply saved manual preference on load (no flash)
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') root.classList.add('theme-dark');
    else if (saved === 'light') root.classList.add('theme-light');
  } catch (e) { /* localStorage might be blocked */ }

  function isEffectivelyDark() {
    if (root.classList.contains('theme-dark')) return true;
    if (root.classList.contains('theme-light')) return false;
    return media ? media.matches : false;
  }

  function emitChange() {
    window.dispatchEvent(new CustomEvent('pixelloom:themechange', {
      detail: { dark: isEffectivelyDark() }
    }));
  }

  // 2. Expose toggle
  window.PixelLoom = window.PixelLoom || {};
  window.PixelLoom.isDark = isEffectivelyDark;
  window.PixelLoom.toggleTheme = function () {
    var goingDark = !isEffectivelyDark();
    root.classList.remove('theme-dark', 'theme-light');
    root.classList.add(goingDark ? 'theme-dark' : 'theme-light');
    try { localStorage.setItem(STORAGE_KEY, goingDark ? 'dark' : 'light'); } catch (e) {}
    emitChange();
  };
  window.PixelLoom.setTheme = function (mode) {
    root.classList.remove('theme-dark', 'theme-light');
    if (mode === 'dark' || mode === 'light') {
      root.classList.add('theme-' + mode);
      try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
    } else {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }
    emitChange();
  };

  // 3. Listen to system preference changes (only matters while no manual override)
  if (media && media.addEventListener) {
    media.addEventListener('change', function () {
      if (!root.classList.contains('theme-dark') && !root.classList.contains('theme-light')) {
        emitChange();
      }
    });
  }
})();
