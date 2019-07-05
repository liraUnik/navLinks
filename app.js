// grab the element from html in javascript

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');

// add eventlistner to hamburger

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
