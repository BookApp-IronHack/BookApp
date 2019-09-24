const express = require('express');
const router = express.Router();
const Books = require("../models/Books");
const Comment = require("../models/Comments");
const access = require("./../middlewares/access.mid");

router.get('/', (req, res) => {
  Books.find()
    .select({
      cover: 1,
      title: 1,
      author: 1,
      categories: 1
    })
    .then(allBooks => {
      res.render('index', {allBooks, user: req.user})
    })
  })
router.get('/books/:id/', (req, res) => {
  const user = req.user
  Books.findById(req.params.id)
    
    .populate('comments')
    .populate({ path: 'comments', populate: { path: 'creatorId' } })
    .lean()
    .then(oneBook => {
      console.log(oneBook)
     if(oneBook['comments']){
      oneBook['comments'] = oneBook.comments.reverse();
      res.render('book-detail', {
        oneBook,
        user
      })
     }else{
      res.render('book-detail', {
        oneBook,
        user
      })
     }
    })
})

router.post('/addComment/:bookId', access.checkLogin, (req, res) => {
  const {
    content
  } = req.body;
  const {
    bookId
  } = req.params;
  const newComment = new Comment({
    content,
    creatorId: req.user._id
  })

  newComment
    .save()
    .then((comment) => {
      Books.findByIdAndUpdate(bookId, {
          $push: {
            comments: comment._id
          }
        })
        .then(() => {
          res.redirect('back');
        })
        .catch((error) => {
          console.error(error);
        })
    })
})

module.exports = router;