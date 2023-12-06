// scroll-fade.js

const welcomeMessage = document.getElementById('welcome-message');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 1) {
    welcomeMessage.classList.add('hide');
  } else {
    welcomeMessage.classList.remove('hide');
  }
});
