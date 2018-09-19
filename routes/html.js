var db = require("../models");

module.exports = function(app){



app.get('/', function (req, res) {
    db.Article.find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.render('home', {data:dbArticle});
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
    
});

}