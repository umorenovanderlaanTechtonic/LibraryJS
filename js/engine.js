//Okay I've learned more about iffes and this makes sense now.
(function() {
  var singleton;
  Library = function () {
    if (singleton != undefined) {
      return singleton;
    }
  singleton = this;
  this.bookShelf = [];
};
})();


Library.prototype.addBook = function (book) {
  //push book to bookshelf array O(N)
  for (var i = 0; i < this.bookShelf.length; i++){
    if(book.title === this.bookShelf[i].title) {
        alert("Why are you buying two copies of the same book??");
        return false;
    }
  }
  this.bookShelf.push(book);
  gLibrary.createStorage();
  return true;
};

Library.prototype.removeBookByTitle = function (title) {
  //loop through objects, if title key has a value that matches entered title, delete object from bookshelf
  for (var i = 0; i < this.bookShelf.length; i++){
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
  for (var i = 0; i < this.bookShelf.length; i++){
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
    var min = 0;
    var max = Math.floor(this.bookShelf.length);
    var i = Math.floor(Math.random() * (max-min + 1)) + min;
    return this.bookShelf[i];
  }
};

Library.prototype.getBookByTitle = function (title) {
  title = title.toLowerCase();
  var filteredA = [];
  for (var i = 0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
        filteredA.push(this.bookShelf[i]);
    }
  }
  return filteredA;
};


Library.prototype.getBookByAuthor = function (authorName) {
  authorName = authorName.toLowerCase();
  var filteredA = [];
  for (var i = 0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].author.toLowerCase().indexOf(authorName.toLowerCase()) > -1) {
        filteredA.push(this.bookShelf[i]);
    }
  }
  return filteredA;
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
  var rawA = [];
  var uniqA = [];
  for (var i = 0; i < this.bookShelf.length; i++) {
    rawA.push(this.bookShelf[i].author);
  }
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
    var min = 0;
    var max = Math.floor(this.bookShelf.length);
    var i = Math.floor(Math.random() * (max-min + 1)) + min;
    return this.bookShelf[i].author;
  }
};

Library.prototype.search = function(entry) {
  //break entry into pieces along space lines & add pieces to new array
  brokenEntry = entry.split(" ");
  //do a for loop for value in array comparing it to this.bookShelf leveraging various searches, push nested search results to an array
  rawResults = [];
  for (var i=0; i < brokenEntry.length; i++) {
    rawResults.push(this.getBookByAuthor(brokenEntry[i]));
    rawResults.push(this.getBookByTitle(brokenEntry[i]));
  }
  //concat all arrays within rawResults array
  var mergedResults = [].concat.apply([],rawResults);
  //filter duplicates in results array
  uniqResults = mergedResults.filter(function(value,index,self){
  return self.indexOf(value) === index;
  });
  //return unique results
  return uniqResults;
  };


// TO SAVE LIBRARY STATE, YOU MUST CREATE STORAGE FOR LIBRARY AGAIN, BUT THIS HAS BEEN AUTOMATED FOR ADD BOOK FUNCTION ONLY NECESSARY AFTER EDITING?? TEST THIS. //
Library.prototype.createStorage = function(){
  localStorage.setItem('gLibrary',JSON.stringify(this.bookShelf));
  return console.log("Library State Saved.");
};

Library.prototype.getStorage = function(){
  var bookObjs = [];
  var jsonObj = JSON.parse(localStorage.getItem("gLibrary"));
  for (var i = 0; i < jsonObj.length; i++) {
    bookObjs.push(new Book(jsonObj[i].title , jsonObj[i].author , jsonObj[i].numPages , jsonObj[i].pubDate));
  }
  return bookObjs;
};

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();

  if (window.localStorage.length > 0) {
    console.log("Loading Last Library State.");
    window.gLibrary.bookShelf = gLibrary.getStorage()}
    else {
      console.log("Creating New Library.");
      gLibrary.addBooks(books1);
      gLibrary.createStorage();
    }
});
