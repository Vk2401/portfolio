// menu toggle for mobile Response
let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
    headerLinks.style.display = 'block';
    headerLinks.style.right = '0';
  });
  
  cancelIcon.addEventListener('click', function () {
    
    headerLinks.style.right = '-100vh';
    headerLinks.style.display = 'none';
  });

