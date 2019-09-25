require("dotenv").config();

const multer = require('multer')
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


router.post("/resena", upload.single("picName"), (req, res, next) => {
  const { title, author, pages, publisher_date, categories, content } = req.body;
  const cover = req.file.url.toString();

  const newBook = new Book({
    title,
    author,
    pages,
    publisher_date,
    categories,
    content,
    cover,

  });

  newBook.save()

    .then(() => res.redirect("/"))
})


module.exports = router;