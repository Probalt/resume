// function myFunction(x) {
//   x.classList.toggle("change");
// }

'use strict';

(function() {
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];
  burgerMenu.addEventListener('click', function toggleClasses() {
    burgerNav.classList.toggle('open');
  });
})();


