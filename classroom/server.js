const express = require("express");
const app = express();
const users = require("./routes/user");  // Fix path to routes
const posts = require("./routes/post");  // Fix path to routes
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionOptions));
app.use(flash());

// Middleware for passing flash messages to all routes
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

// Route for registration
app.get("/register", (req, res) => {
    const { name } = req.query;
    req.session.name = name || "anonymouse";

    if (req.session.name === "anonymouse") {
        req.flash("error", "user not registered!");
    } else {
        req.flash("success", "user registered successfully!");
    }

    res.redirect("/hello");
});

// Route for greeting page
app.get("/hello", (req, res) => {
    res.render("page", { name: req.session.name });
});

app.listen(3000, () => {
    console.log("server is listening to 3000");
});
