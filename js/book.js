function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = new Date(pubDate.toString());
};

 Book.prototype.editBook = function(oBook) {
   if (oBook.title != undefined) {
     this.title = oBook.title
   };
   if (oBook.author != undefined) {
     this.author = oBook.author
   };
   if (oBook.numPages != undefined) {
     this.numPages = oBook.numPages
   };
   if (oBook.pubDate != undefined) {
     this.pubDate = oBook.pubDate
   };
   return this;
 };

 var book1 = new Book("Where the Wild Things Are", "Maurice Sendak", 31, "September 9, 1978");
 var book2 = new Book("The Subtle Knife", "Philip Pullman", 358, "December 21, 1997");
 var book3 = new Book("The Golden Compass", "Philip Pullman", 297, "June 15, 1992");
 var edit1 = {title:'The Subtle Knife', author: "Phillip Pullman"}

 var books1 = [book1, book2]
