const theme = {
  init: function() {
    console.log('Initializing the theme module');
    document.querySelector('#theme-switch').addEventListener('click', function() {
      const bodyElem = document.querySelector('body');
      const themeDiscoClassAdded = bodyElem.classList.toggle('theme-disco');

      // Check if the theme-disco class was added (dark theme activated)
      if (themeDiscoClassAdded) {
        // Remove the background image when the dark theme is activated
        bodyElem.style.backgroundImage = 'none';
      } else {
        // Restore the background image when switching back to the light theme
        bodyElem.style.backgroundImage = 'url("img/background.jpg")';
      }

      console.log('Toggled theme-disco class on body');
    });
  }
}

// Ensure that the theme.init() function is called when the page loads
document.addEventListener('DOMContentLoaded', function() {
theme.init();
});
