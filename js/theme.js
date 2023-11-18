const theme = {
  init: function() {
    // console.log('initialisation du module theme');
    document.querySelector('#theme-switch').addEventListener('click', function() {
      const bodyElem = document.querySelector('body');
      const bodyHomeElem = document.querySelector('body#home');
      bodyElem.classList.toggle('theme-disco');
      bodyHomeElem.classList.toggle('theme-disco');
    
    });
  }
}