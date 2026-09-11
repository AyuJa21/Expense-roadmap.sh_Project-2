/*
I started writing this script as I made an single func and add books as params and made them obj
But by this I couldn't be able to acces the keys such as author or pages

function Books(book1, book2, book3, book4, book5, book6){
    this.id = crypto.randomUUID();

    this.book1 = {
        name: "The Happiness Hypothesis",
        author: "Jonathan Haidt",
        pages: 304,
    },
    this.book2 = {
        name: "The Man Who Mistook His Wife for a Hat",
        author: "Oliver Sacks",
        pages: 297,
    }
    this.book3 = {
        name: "Man's Search for Meaning",
        author: "Viktor Frankl",
        pages: 312,
    }
    this.book4 = {
        name: "Linear Algebra Done Right",
        author: "Axler",
        pages: 416,
    }
    this.book5 = {
        name: "Is God a Mathematician",
        author: "Mario Livio",
        pages: 408,
    }
    this.book6 = {
        name: "Fundamentals of Software Architecture",
        author: "Mark Richards & Neal Ford",
        pages: 348,
    }
    
}; */

const library = [];

function Books(name, author, pages, isRead) {
  this.id = crypto.randomUUID();
  ((this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = isRead),
    (this.info = function () {
      return `The book ${this.name} by ${this.author}, I have ${this.isRead}`;
    }));
}

function addBook(name, author, pages, isRead) {
  const newBook = new Books(name, author, pages, isRead);
  library.push(newBook);
}

addBook("The Happiness Hypothesis", "Jonathan Haidt", 306, "not read yet");
addBook("Man's Search for Meaning", "Viktor Frankl", 314, "not read yet");
addBook(
  "he Man Who Mistook His Wife for a Hat",
  "Oliver Sacks",
  296,
  "not read yet",
);
addBook("Linear Algebra Done Right", "Axler", 426, "not read yet");
addBook("Is God a Mathematician", "Mario Livio", 431, "not read yet");
addBook(
  "Fundamentals of Software Architecture",
  "Mark Richards & Neal Ford",
  348,
  "not read yet",
);
//console.log(library);
//console.log(library[0].info());
