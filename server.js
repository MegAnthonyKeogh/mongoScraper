var path = require("path");

var express = require('express');
var exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cheerio = require('cheerio');
var request = require('request');
var PORT = process.env.PORT || 8080;
 
var app = express();


//app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
 
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "views", "layouts")
    })
  );
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "views"));

var db = require("./models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
//mongoose.connect("mongodb://localhost/nprScrape", { useNewUrlParser: true });
 
require("./routes/api.js")(app);
require("./routes/html.js")(app)
 

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

module.exports = app;