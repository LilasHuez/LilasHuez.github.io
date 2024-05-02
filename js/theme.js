const theme = {
  init: function() {
    // console.log('initialisation du module theme');
    document.querySelector('#theme-switch').addEventListener('click', function() {
      const bodyElem = document.querySelector('body');
      bodyElem.classList.toggle('theme-disco');
    });
  }
}

// Initialize the theme module
theme.init();
