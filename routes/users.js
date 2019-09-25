require("dotenv").config();

const multer = require('multer')
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Book = require("../models/Books");
const upload = require("./../config/cloudinary.config");
const access = require("./../middlewares/access.mid");



router.get('/profile', (req, res) => {
  const user = req.user;
  res.render('profile-detail', { user })

})




router.get('/resena', access.checkLogin, (req, res) => {

  const user = req.user;

  res.render('resena', { user })

})


router.post("/resena", upload.single("picName"), access.checkLogin, (req, res, next) => {
  const { title, author, pages, publisher_date, categories, content } = req.body;
  const cover = req.file.url.toString();

  const newBook = new Book({
    creatorId: req.user._id,
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