const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const exphbs = require("express-handlebars");

// STATIC FILEs
app.use(express.static(path.join(__dirname, "public")))

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({
    extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.get("/search", (req, res) => {
    res.render("search");
});

app.post("/search", (req, res) => {
    res.render("search");
});

app.listen(3000);