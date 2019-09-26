const express = require('express');
const router  = express.Router();
const access = require("./../middlewares/access.mid");


router.get("/twitter", (req, res) => {
  const user = req.user;

  res.render("twitter", {user});
})


module.exports = router;