class PrintEditionItem {
  constructor (name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
    fix () {
     this.state *= 1.5;
    }
  
    set state (fixedState) {
    if (fixedState < 0) {
      this._state  = 0;
      }
    else if (fixedState > 100) {
      this._state  = 100;
      } 
    else {
      this._state = fixedState;
      }
    }
  
    get state () {
      return this._state;
    }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor (name, books) {
  this.name = name;
  this.books = [];
}
  addBook(book) {
  if (book.state > 30) {
    this.books.push(book);
    } 
  }

  findBookBy(type, value){
    return this.books.find(item => item[type] == value) || null;
  }

  giveBookByName(bookName) {
      const book = this.findBookBy('name', bookName);
      if (book) {
        this.books.splice(this.books.indexOf(book), 1);
        }
      return book;
    }
} 

class Student{
  constructor(name) {
    this.name = name;
    this.marks = {};
    }
  
  addMark(mark, subjectName) {
    if (mark < 6 && mark > 1 ) {
      if (this.marks?.[subjectName]) {
        this.marks[subjectName].push(mark);
      }
      else {
        this.marks[subjectName] = [];
        this.marks[subjectName].push(mark);
      }
    }
  }
  getAverageBySubject(subjectName) {
    if (this.marks?.[subjectName] == undefined){
      return 0;
    }
    else {
      let average = 0;
      let result = (this.marks[subjectName].reduce((accamulator, item) => accamulator + item, average)) / this.marks[subjectName].length;
      return result;
    }
  }
  getAverage (){
    let subjects = Object.keys(this.marks);
    let initialValue = 0;
    let result = (subjects.reduce((acc, item) => acc + this.getAverageBySubject(item),initialValue))/subjects.length;
    return result;
  }
}

