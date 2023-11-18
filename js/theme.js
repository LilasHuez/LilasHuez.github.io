const theme = {
  init: function() {
    document.querySelector('#theme-switch').addEventListener('click', function() {
      const regularBodyElem = document.querySelector('body');
      const bodyHomeElem = document.querySelector('body#home');

      // Toggle class on the regular body element
      regularBodyElem.classList.toggle('theme-disco');

      // Toggle class on the body element with the ID 'home' if it exists
      if (bodyHomeElem) {
        bodyHomeElem.classList.toggle('theme-disco');
      }
    });
  }
}
