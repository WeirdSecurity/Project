const myLibrary = [];

function Book(name,author,page) {
  this.title = title;
  this.author = author;
  this.page = page;
}
function addBookToLibrary(name,author,page){
  let newBook = new Book(name,author,page);
  myLibrary.push(newBook);
}
function removeBook(name){
  for (let i=0;i<myLibrary.length;i++){
    if (name === myLibrary[0][1]){
      myLibrary.pop(i);
    }else {
      continue;
    }
  }
}
