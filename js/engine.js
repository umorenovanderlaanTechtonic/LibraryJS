function Library(){
  this.bookShelf = new Array();
};

Library.prototype.addBook = function (book) {
  //push book to bookshelf array O(N)
  for (i = 0; i < this.bookShelf.length; i++){
     if(book.title === this.bookShelf[i].title) {
        alert("Why are you buying two copies of the same book??");
        return false;
      }
  }
  this.bookShelf.push(book);
  return true;
};

Library.prototype.removeBookByTitle = function (title) {
  //loop through objects, if title key has a value that matches entered title, delete object from bookshelf
  for (i = 0; i < this.bookShelf.length; i++){
     if(title === this.bookShelf[i].title) {
        this.bookShelf.pop(this.bookShelf[i]);
        console.log("Book Removed");
        return true;
      }
  }
  console.log("Can't remove a book that ain't there.");
  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
  // loop through objects, if author key has a value that matches entered author, delete object from bookshelf
  for (i = 0; i < this.bookShelf.length; i++){
     if(author === this.bookShelf[i].author) {
        this.bookShelf.pop(this.bookShelf[i]);
        console.log("Book Removed");
        return true;
      }
  }
  console.log("Can't remove an author with no books.");
  return false;
};

Library.prototype.getRandomBook = function () {
  if(this.bookShelf.length === 0){
    return null;
  }
  else{
    min = 0;
    max = Math.floor(this.bookShelf.length);
    i = Math.floor(Math.random() * (max-min + 1)) + min;
    return this.bookShelf[i];
  };
};

Library.prototype.getBookByTitle = function (title) {
  for (i = 0; i < this.bookShelf.length; i++){
     if(title === this.bookShelf[i].title) {
        books = [];
        books.push(this.bookShelf[i]);
        return books;
      }
  };
  console.log("No books with this title.");
};


Library.prototype.getBookByAuthor = function (authorName) {
  for (i = 0; i < this.bookShelf.length; i++){
     if(authorName === this.bookShelf[i].author) {
        return this.bookShelf[i];
      }
  };
  console.log("No books with this author.");
};

Library.prototype.addBooks = function (books) {
  var booksAdded = 0;
  for (var i = 0; i < books.length; i++) {
    if (this.addBook(books[i])) {
    booksAdded++;
    }
  }
  return booksAdded;
};

Library.prototype.getAuthors = function () {
  //get all authors in an array, loop (maybe there's a js thing?) to eliminate duplicates, if loop push new ones to a unique array, return array after loop
  var rawA = [];
  var uniqA = [];
  for (var i = 0; i < this.bookShelf.length; i++) {
    rawA.push(this.bookShelf[i].author)
  };
  uniqA = rawA.filter(function(value,index,self){
    return self.indexOf(value) === index;
  });
  return uniqA;
};

Library.prototype.getRandomAuthorName = function () {
  if(this.bookShelf.length === 0){
    return null;
  }
  else{
    min = 0;
    max = Math.floor(this.bookShelf.length);
    i = Math.floor(Math.random() * (max-min + 1)) + min;
    return this.bookShelf[i].author;
  };
};

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
