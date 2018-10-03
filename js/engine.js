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
        return this.bookShelf[i];
      }
  };
  console.log("No books with this title.");
};


Library.prototype.getBookByAuthor = function (authorname) {
  for (i = 0; i < this.bookShelf.length; i++){
     if(authorname === this.bookShelf[i].author) {
        return this.bookShelf[i];
      }
  };
  console.log("No books with this author.");
};

Library.prototype.addBooks = function (books) {

};

Library.prototype.getAuthors = function () {

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
