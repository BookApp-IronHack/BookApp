const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.get('/profile', (req, res) => {
const user=req.user
    res.render('profile-detail',{user})
  
})

router.get('/reseña', (req, res) => {
  const user=req.user
      res.render('reseña',{user})
    
  })



module.exports = router;