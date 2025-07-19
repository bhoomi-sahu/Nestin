// it should be user.js ,, but one exist
// const express = require("express");
// const router = express.Router();

// router.get("/signup", (req, res) => {
//     res.render("users/signup.ejs");
// });

// module.exports = router

const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users.js");

// Signup Route
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

// Login Route
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

// Logout Route
router.get("/logout", userController.logout);

module.exports = router;
