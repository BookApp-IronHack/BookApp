const express = require('express');
const router  = express.Router();

router.get("/twitter", (req, res) => {
  res.render("twitter");
})


module.exports = router;