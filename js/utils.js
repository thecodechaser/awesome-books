import bookData from './data.js';

const ul = document.createElement('div');
const content = document.createElement('div');
const container = document.querySelector('.container');
const form = document.querySelector('.form');
content.classList.add('list-of-book');
ul.style.listStyleType = 'none';
content.appendChild(ul);
container.insertAdjacentElement('beforebegin', content);

export const addBook = (title, author) => {
  const data = {
    title,
    author,
  };
  bookData.push(data);
  localStorage.setItem('book', JSON.stringify(bookData));
  ul.innerHTML += `<li>
          <p>${data.title}</p>
          <p>${data.author}</p>
          <button class="remove" value=${data.title} >Remove</button>
          <hr/>
          </li>`;
  form.reset();
};

export const removeBook = () => {
  ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const list = e.target.parentElement;
      ul.removeChild(list);
      const bookTitle = list.childNodes[5].value;
      const remain = bookData.filter((book) => book.title !== bookTitle);
      localStorage.setItem('book', JSON.stringify(remain));
    }
  });
};

export const fetchDatafromStore = () => {
  window.addEventListener('load', () => {
    if (localStorage.getItem('book')) {
      const books = JSON.parse(localStorage.getItem('book'));
      books.forEach((data) => {
        ul.innerHTML += `<li>
              <p>${data.title}</p>
              <p>${data.author}</p>
              <button class="remove" value=${data.title} >Remove</button>
              <hr/>
              </li>`;
        bookData.push(books);
      });
    }
  });
};
