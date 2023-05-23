const theme = {
    init: function() {
      console.log('initialisation du module theme');
      document.querySelector('#theme-switch').addEventListener('click', function() {
        const bodyElem = document.querySelector('body');
        bodyElem.classList.toggle('theme-disco');
        
        if (bodyElem.classList.contains('theme-disco')) {
          document.cookie = 'theme=theme-disco';
          localStorage.setItem('theme', 'theme-disco');
        } else {
          document.cookie = 'theme=theme-light';
          localStorage.setItem('theme', 'theme-light');
          bodyElem.classList.remove('theme-active');
        }
      });
    }
  }
  