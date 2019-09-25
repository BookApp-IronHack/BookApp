const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  creatorId: {type: Schema.Types.ObjectId, ref:'User'},

  cover: String,
  title: String,
  author: String,
  pages: Number,
  publisher_date: Number,
  categories: [],
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],

})
const Books = mongoose.model('Book', bookSchema);
module.exports = Books;
