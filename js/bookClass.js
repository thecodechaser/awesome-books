class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.form = document.querySelector('form');
    this.div = document.createElement('div');
    this.container = document.querySelector('.container');
    this.content = document.createElement('div');
    this.ul = document.createElement('ul');
    this.content.classList.add('list-of-book');
    this.ul.style.listStyleType = 'none';
    this.content.appendChild(this.ul);
    this.container.insertAdjacentElement('beforebegin', this.content);
    this.submitBtn = document.querySelector('.submit');
    this.title = document.querySelector('.title');
    this.author = document.querySelector('.author');
    this.bookData = [];
  }
}

const title = document.querySelector('.title');
const author = document.querySelector('.author');
Book(title, author);
