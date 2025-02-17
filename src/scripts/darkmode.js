document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const darkModeButton = document.getElementById('dark-mode-button');
  if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
  }
});
