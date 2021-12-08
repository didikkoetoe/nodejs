const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// Setup view engine
app.set("view engine", "ejs");
app.use(expressLayouts);

// Static folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    layout: "layout/main",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
