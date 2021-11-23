class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.form = document.querySelector("form");
    this.div = document.createElement("div");
    this.container = document.querySelector(".container");
    this.content = document.createElement("div");
    this.ul = document.createElement("ul");
    this.ul.className="book-items";
    this.content.classList.add("list-of-book");
    this.ul.style.listStyleType = "none";
    this.content.appendChild(this.ul);
    this.container.insertAdjacentElement("beforebegin", this.content);
    this.submitBtn = document.querySelector(".btn-add");
    this.title = document.querySelector(".title");
    this.author = document.querySelector(".author");
    this.bookData = [];
  }

  addBook() {
    this.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const titleVal = this.title.value;
      const authorVal = this.author.value;
      if (titleVal.trim() === "") return;
      if (authorVal.trim() === "") return;
      this.bookData.push({ titleVal, authorVal });
      localStorage.setItem("book", JSON.stringify(this.bookData));
      this.ul.innerHTML += `<li class="book-item">
                   <p class="book-data">"${titleVal}" by ${authorVal}</p>
                   <button class="remove">Remove</button>
                   </li>`;
      this.form.reset();
    });
  }

  removeBook() {
    this.ul.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        const list = e.target.parentElement;
        this.ul.removeChild(list);
        const title = list.childNodes[5].value;
        this.bookData.filter((book) => book.title !== title);
      }
    });
  }

  fetchDatafromStore = () => {
    window.addEventListener("load", () => {
      if (localStorage.getItem("book")) {
        const books = JSON.parse(localStorage.getItem("book"));
        books.forEach((data) => {
          this.ul.innerHTML += `<li class="book-item">
                  <p class="book-data">"${data.titleVal}" by ${data.authorVal}</p>
                  <button class="remove" value=${this.title.value} >Remove</button>
                  </li>`;
          this.bookData.push(books);
        });
      }
    });
  };
}

const title = document.querySelector(".title");
const author = document.querySelector(".author");
const book = new Book(title, author);
book.addBook();
book.removeBook();
book.fetchDatafromStore();
