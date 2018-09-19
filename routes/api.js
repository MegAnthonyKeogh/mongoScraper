
var bodyParser = require("body-parser");
//var logger = require("morgan");
var mongoose = require("mongoose");
var request =require("request");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function(app){

app.get("/scrape", function(req, res) {
  console.log("hello ed");
    // First, we grab the body of the html with request
    request("https://www.npr.org/sections/food/", function (error, response, html){
      
      var $ = cheerio.load(html);
      $("article.item.has-image").each(function(i, element) {
          var result = {};
          result.title = $(element).find("h2.title")
          .text()
          .trim();
          console.log(result.title);
          result.img = $(element).find("img")
          .attr("src")
          console.log(result.img)
           result.link = $(element)
          .find("a")
          .attr("href")
          .trim();
          console.log(result.link);
          // result.link = $(element)
          // .children("a")
          // .attr("href");
          // result.p.teaser = $(element)
          // .text();
          // result.img = $(element)
          // .children("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];
          
          
          
          db.Article.create(result)
          .then(function(dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });

      });
      res.send("Scrape Complete");
    });
  });

}