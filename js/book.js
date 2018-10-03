function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

 Book.prototype.editBook = function(oBook) {

 };

 var book1 = new Book("Where the Wild Things Are", "Maurice Sendak", 31, "September 9, 1978");
 var book2 = new Book("The Subtle Knife", "Philip Pullman", 358, "December 21, 1997");

 var books1 = [book1, book2]
