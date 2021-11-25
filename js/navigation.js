export default () => {
  const menuList = document.querySelector('.desktop-menu');
  const menuList2 = document.querySelectorAll('.a');
  const bookList = document.querySelector('.book-list-c');
  const hr = document.querySelector('hr');
  const formContainer = document.querySelector('.form-container');
  const contact = document.querySelector('.contact-section');
  const container = document.querySelector('.mobile-menu-c');

  window.addEventListener('load', () => {
    formContainer.style.display = 'none';
    contact.style.display = 'none';
    bookList.style.display = 'block';
    menuList2[0].classList.add('active');
  });

  menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      formContainer.style.display = 'none';
      contact.style.display = 'none';
      bookList.style.display = 'block';
      for (let i = 0; i < menuList2.length; i += 1) {
        menuList2[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }

    if (e.target.classList.contains('new')) {
      bookList.style.display = 'none';
      hr.style.display = 'none';
      contact.style.display = 'none';
      formContainer.style.display = 'flex';
      for (let i = 0; i < menuList2.length; i += 1) {
        menuList2[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }

    if (e.target.classList.contains('contact')) {
      contact.style.display = 'flex';
      bookList.style.display = 'none';
      hr.style.display = 'none';
      formContainer.style.display = 'none';
      for (let i = 0; i < menuList2.length; i += 1) {
        menuList2[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
  });

  const menuListMov = document.querySelector('.mobile-nav');
  menuListMov.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      formContainer.style.display = 'none';
      contact.style.display = 'none';
      bookList.style.display = 'block';
      container.style.display = 'none';
    }
    if (e.target.classList.contains('new')) {
      bookList.style.display = 'none';
      hr.style.display = 'none';
      contact.style.display = 'none';
      formContainer.style.display = 'flex';
      container.style.display = 'none';
    }
    if (e.target.classList.contains('contact')) {
      contact.style.display = 'flex';
      bookList.style.display = 'none';
      hr.style.display = 'none';
      formContainer.style.display = 'none';
      container.style.display = 'none';
    }
  });
};
