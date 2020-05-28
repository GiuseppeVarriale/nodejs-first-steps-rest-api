const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

let app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '25mb' }));
app.use(bodyParser.json({limit: '25mb'}));
app.use(expressValidator());

consign().include("routes").include("utils").into(app);

app.listen(4000, () => {
  console.log("servidor rodando!");
});
