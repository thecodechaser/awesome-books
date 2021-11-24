const btnOpen = document.querySelector('.btn-hamburger');
const btnClose = document.querySelector('.btn-close');
const container = document.querySelector('.mobile-menu-c');

function open() {
  container.style.display= 'block';
}

function close () {
  container.style.display = 'none';
}

btnOpen.addEventListener('click', open);
btnClose.addEventListener('click', close);