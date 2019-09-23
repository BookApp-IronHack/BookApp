const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  cover: String,
  title: String,
  author: String,
  pages: Number,
  publisher_date: Number,
  categories: String,
  content: String

})
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
