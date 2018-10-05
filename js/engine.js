
(function() {
  //creates undedined var of singleton
  var singleton;
  //defines Library
  Library = function () {
    //if singleton exists, return it
    if (singleton) {
      return singleton;
    }
  //singleton equals the returned value, and the bookshelf is an array.
  singleton = this;
  this.bookShelf = [];
};
})();


Library.prototype.addBook = function (book) {
  //push book to bookshelf array-O(N), next line normalizes user input
  title = book.title.trim().toLowerCase();
  for (var i = 0; i < this.bookShelf.length; i++){
  //the complexity of the comparison is necessary to normalize both user input and the way titles have been entered into the database
    if(title === this.bookShelf[i].title.trim().toLowerCase()) {
        alert("Why are you buying two copies of the same book??");
        return false;
    }
  }
  this.bookShelf.push(book);
//this updated the library, and is also called when books are edited and removed
  gLibrary.createStorage();
  return true;
};

Library.prototype.removeBookByTitle = function (title) {
  //loop through objects, if title key has a value that matches entered title, delete object from bookshelf
  title = title.trim().toLowerCase();
  for (var i = 0; i < this.bookShelf.length; i++){
    if(title === this.bookShelf[i].title.trim().toLowerCase()) {
        this.bookShelf.pop(this.bookShelf[i]);
        console.log("Book Removed");
        gLibrary.createStorage();
        return true;
    }
  }
  console.log("Can't remove a book that ain't there.");
  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
  // loop through objects, if author key has a value that matches entered author, delete object from bookshelf
  author = author.trim().toLowerCase();
  for (var i = 0; i < this.bookShelf.length; i++){
     if(author === this.bookShelf[i].author.trim().toLowerCase()) {
        this.bookShelf.pop(this.bookShelf[i]);
        console.log("Book Removed");
        gLibrary.createStorage();
        return true;
      }
  }
  console.log("Can't remove an author with no books.");
  return false;
};

Library.prototype.getRandomBook = function () {
  //checks to make sure there are books in the library in the first place
  if(this.bookShelf.length === 0){
    return null;
  }
  //if there are books, generates a random number within the limits of the bookshelf array length and returns the book at that index
  else{
    var min = 0;
    var max = Math.floor(this.bookShelf.length);
    var i = Math.floor(Math.random() * (max-min + 1)) + min;
    return this.bookShelf[i];
  }
};

Library.prototype.getBookByTitle = function (title) {
  title = title.trim().toLowerCase();
  var filteredA = [];
  for (var i = 0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].title.trim().toLowerCase().indexOf(title) > -1) {
        filteredA.push(this.bookShelf[i]);
    }
  }
  return filteredA;
};


Library.prototype.getBookByAuthor = function (authorName) {
  authorName = authorName.trim().toLowerCase();
  var filteredA = [];
  for (var i = 0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].author.trim().toLowerCase().indexOf(authorName) > -1) {
        filteredA.push(this.bookShelf[i]);
    }
  }
  return filteredA;
};

Library.prototype.addBooks = function (books) {
  //sets booksAdded as a counter
  var booksAdded = 0;
  //runs through all books that are being passed, evaluates based on addBook function
  for (var i = 0; i < books.length; i++) {
    if (this.addBook(books[i])) {
    //increments counter as books return true
    booksAdded++;
    }
  }
  //shows the counter
  return booksAdded;
};

Library.prototype.getAuthors = function () {
  //creates two empty arrays for manipulating.
  var rawA = [];
  var uniqA = [];
  //pushes authors indiscriminately to rawA
  for (var i = 0; i < this.bookShelf.length; i++) {
    rawA.push(this.bookShelf[i].author);
  }
  //filters the rawA to eliminate duplicate authors
  uniqA = rawA.filter(function(value,index,self){
    return self.indexOf(value) === index;
  });
  //returns
  return uniqA;
};

Library.prototype.getRandomAuthorName = function () {
  //checks if bookshelf is empty
  if(this.bookShelf.length === 0){
    return null;
  }
  //duplicates RandomBook logic, but returns author of the book rather than book object.
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

Library.prototype.createStorage = function(){
  localStorage.setItem('gLibrary',JSON.stringify(this.bookShelf));
  return console.log("Library State Saved.");
};

Library.prototype.getStorage = function(){
  //creates empty array
  var bookObjs = [];
  //gets local storage and stores it as a var
  var jsonObj = JSON.parse(localStorage.getItem("gLibrary"));
  //runs through each item in jsonObj and recreates them as a book object, then pushes re-prototyped books to book Objs array
  for (var i = 0; i < jsonObj.length; i++) {
    bookObjs.push(new Book(jsonObj[i].title , jsonObj[i].author , jsonObj[i].numPages , jsonObj[i].pubDate));
  }
  //returns bookified array (this is what gets defined as the bookshelf when the page loads)
  return bookObjs;
};

document.addEventListener("DOMContentLoaded", function(e){
  //on load, sets library according to library function at top of doc
  window.gLibrary = new Library();

//if local storage has anything in it, the saved library information will be loaded using getStorage function
  if (window.localStorage.length > 0) {
    console.log("Loading Last Library State.");
    window.gLibrary.bookShelf = gLibrary.getStorage()}
    //if there is nothing in local storage, a new Library will be created, a set list of books will be loaded, and a copy will be stored in local storage
    else {
      console.log("Creating New Library.");
      gLibrary.addBooks(books1);
      gLibrary.createStorage();
    }
});
