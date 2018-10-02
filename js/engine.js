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
     if(book.title === this.bookShelf[i].title) {
        
      }
  }
  this.bookShelf.push(book);
  return true;
};

Library.prototype.removeBookByAuthor = function (author) {
  // loop through objects, if author key has a value that matches entered author, delete object from bookshelf
};

Library.prototype.getRandomBook = function () {
  //use math method random to select an index number, pull object and return associated book
};

Library.prototype.getBookByTitle = function (title) {

};

Library.prototype.getBookByAuthor = function (authorname) {

};

Library.prototype.addBooks = function (books) {

};

Library.prototype.getAuthors = function () {

};

Library.prototype.getRandomAuthorName = function () {

};

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
