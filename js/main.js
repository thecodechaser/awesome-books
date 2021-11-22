import { addBook, fetchDatafromStore, removeBook } from './utils.js';

const submitBtn = document.querySelector('.btn-add');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value.trim() === '') return;
  if (author.value.trim() === '') return;
  addBook(title.value, author.value);
});

removeBook();

fetchDatafromStore();
