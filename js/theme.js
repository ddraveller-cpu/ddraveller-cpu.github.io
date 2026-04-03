// Theme management - only light/dark, no system option
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update theme icon
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    if (theme === 'dark') {
      // Moon icon
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    } else {
      // Sun icon
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    }
  }
}

// Set theme
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

// Toggle theme between light and dark
function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Initialize theme
applyTheme(currentTheme);