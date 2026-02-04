(function() {
  'use strict';
  
  try {
    function getThemePreference() {
      const stored = localStorage.getItem('theme');
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    const theme = getThemePreference();
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    // Fallback to light theme if localStorage is unavailable
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
