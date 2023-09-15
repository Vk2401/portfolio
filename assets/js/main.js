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

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; // Get the root element (<html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  // Get the value of the input element when it changes
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});