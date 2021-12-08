const express = require("express");
var expressLayouts = require("express-ejs-layouts");

const { readData } = require("./utils/contacts");

const app = express();
const port = 3000;

// Setup view engine
app.set("view engine", "ejs");
app.use(expressLayouts);

// Static folder
app.use(express.static("public"));

// Route home
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    layout: "layout/main",
  });
});

// Route about
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    layout: "layout/main",
  });
});

// Routes contact
app.get("/contact", (req, res) => {
  const contacts = readData();
  res.render("contact", {
    title: "Contact",
    layout: "layout/main",
    contacts,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
