require("dotenv").config();

const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const upload = require("./../config/cloudinary.config");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const access = require("./../middlewares/access.mid");
const ensureLogin = require("connect-ensure-login");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: `${process.env.EMAIL_ADDRESS}`,
    pass: `${process.env.EMAIL_PASSWORD}`
  }
});

router.get("/login", (req, res, next) => {
  if (req.query.error) {
    res.render("auth/login", {
      message: "Cuenta no activada. Por favor, revisa tu email."
    });
  } else {
    res.render("auth/login", { message: req.flash("error") });
  }
});

router.post(
  "/login",[
    access.checkUserStatus,
    passport.authenticate("local",{
      successRedirect: "/",
      failureRedirect: "/auth/login",
      failureFlash: true,
      passReqToCallback: true
    })
  ]
    
);

router.get("/signup", (req, res, next) => {
  if (req.query.error) {
    res.render("auth/signup", { message: "Usuario no encontrado" });
  } else {
    res.render("auth/signup");
  }
});

router.post("/signup", upload.single("userPhoto"), (req, res, next) => {
  const { username, password, email } = req.body;
  const { originalname, url } = req.file;

  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", { message: "Índica un usuario y una contraseña" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "Este usuario ya existe" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const validationCode = crypto.randomBytes(20).toString("hex");

    const newUser = new User({
      username,
      password: hashPass,
      email,
      photo: {
        url,
        name: originalname
      },
      validationCode
    });

    newUser.save().then(newUser => {
      transporter
        .sendMail({
          from: "info@info.com",
          to: email,
          subject: `${username} welcome! :)`,
          html: `<a href="http://localhost:3000/auth/confirm/${validationCode}">Haz click aquí para activar tu cuenta</a>`
        })
        .then(() => res.redirect("/"))
        .catch(err => {
          console.log(err);
        })
        .catch(err => {
          console.log(err);
          res.render("auth/signup", { message: "Algo ha ido mal..." });
        });
    });
  });
});

router.get("/");

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/confirm/:token", (req, res) => {
  const user = req.user;
  User.updateOne({validationCode: req.params.token}, {active:true}, {new: true})
  .then(userUpdated => {
    if (userUpdated) {
      res.render("auth/activation", {user: true});
      return
    } else {
      res.render("auth/activation", {error: true});
      return
    }
  })
}
) 




module.exports = router;