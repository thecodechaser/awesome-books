class Book {
  constructor(title, author){
    this.title=title;
    this.author=author;
  }
}

const title = document.querySelector(".title");
const author = document.querySelector(".author");
const book= new Book(title, author);