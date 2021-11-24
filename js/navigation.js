export const navigatorHelper = () => {
  const menuList = document.querySelector('.desktop-menu');
  const bookList = document.querySelector('.book-list-c');
  const hr = document.querySelector('hr');
  const formContainer = document.querySelector('.form-container');
  const contact = document.querySelector('.contact-section');
  const container = document.querySelector('.mobile-menu-c');

  menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      formContainer.style.display = 'none';
      contact.style.display = 'none';
      bookList.style.display = 'block';
    }

    if (e.target.classList.contains('new')) {
      bookList.style.display = 'none';
      hr.style.display = 'none';
      contact.style.display = 'none';
      formContainer.style.display = 'flex';
    }

    if (e.target.classList.contains('contact')) {
      contact.style.display = 'flex';
      bookList.style.display = 'none';
      hr.style.display = 'none';
      formContainer.style.display = 'none';
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
