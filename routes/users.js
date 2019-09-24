const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Book = require("../models/Books");
const upload = require("./../config/cloudinary.config");


router.get('/profile', (req, res) => {
  const user = req.user
  res.render('profile-detail', { user })

})

router.get('/resena', (req, res) => {
  res.render('resena')

})


router.post("/books/:id", upload.single("userPhoto"), (req, res, next) => {
  const { title, author, pages, publisher_date, categories, content } = req.body;
  const { originalname, url } = req.file;

  const newBook = new Book({
    title,
    author,
    publisher_date,
    categories,
    content,
    cover: {
      url,
      name: originalname
    },
    
  });

})


module.exports = router;