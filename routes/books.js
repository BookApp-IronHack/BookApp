const express = require('express');
const router = express.Router();
const Books = require("../models/Books");
const Comment = require("../models/Comments");

router.get('/', (req, res, next) => {
  Books.find()
  .select({
    cover: 1, title: 1, author: 1, categories: 1
  })
  .then(allBooks => {
    res.render('index', {allBooks, user: req.user})
  })
})

router.get('/books/:id/', (req, res) => {
  Books.findById(req.params.id)
  .populate('comments')
  .then(oneBook => {
    res.render('book-detail', {oneBook})
  })
})

router.post('/addComment/:bookId', (req, res) => {
  const {content} = req.body;
  const {bookId} = req.params;
  const newComment = new Comment({
    content
  })

  newComment
  .save()
  .then((comment) => {
    Books.findByIdAndUpdate(bookId, {$push: {comments: comment._id}})
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    })
  })
})

module.exports = router;