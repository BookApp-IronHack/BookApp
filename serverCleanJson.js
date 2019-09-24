



const fs = require("fs");

fs.readFile("books.json", "utf8", function (err, books) {
  books = JSON.parse(books);

  fs.writeFile("booksClean.json", JSON.stringify(books.map(book => {

    book.publisher_date = +book.publisher_date
    book.pages = +book.pages
    delete book.ID;
    delete book.content_short;
    delete book.publisher;
    delete book.language;
    delete book.url_details;
    delete book.url_download;
    delete book.thumbnail;
    delete book.num_comments;
    delete book.tags;
    delete book.categories[0].category_id;
    delete book.categories[0].nicename;
    delete book.categories.splice(1,2);
  

    return book
      
    
  })), function (err, data) {
    console.log("All good :)")
  })
})