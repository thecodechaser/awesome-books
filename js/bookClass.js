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
    this.submitBtn = document.querySelector('.btn-add');
    this.title = document.querySelector('.title');
    this.author = document.querySelector('.author');
    this.bookData = [];
  }

  addBook() {
    this.submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const titleVal = this.title.value;
      const authorVal = this.author.value;
      if (titleVal.trim() === '') return;
      if (authorVal.trim() === '') return;
      this.bookData.push({ titleVal, authorVal });
      localStorage.setItem('book', JSON.stringify(this.bookData));
      this.ul.innerHTML += `<li>
                   <p>${titleVal}</p>
                   <p>${authorVal}</p>
                   <button class="remove" value=${titleVal} >Remove</button>
                   <hr/>
                   </li>`;
      this.form.reset();
    });
  }
}

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const book = new Book(title, author);
book.addBook();
