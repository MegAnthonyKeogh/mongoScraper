var db = require("../models");
var mongoose = require("mongoose");


module.exports = function (app) {



    app.get('/', function (req, res) {
        db.Article.find({})
            .then(function (dbArticle) {
                // If we were able to successfully find Articles, send them back to the client
                res.render('home', {
                    data: dbArticle
                });
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });

    });

    app.get("/articles/:id", function (req, res) {
        // Create a new note and pass the req.body to the entry
        // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...

        db.Article.findById({ _id: req.params.id})
            .populate("note")
            .then(function (dbArticle) {
                // console.log(dbArticle);
                console.log(req.params.id)

                res.render('comment', { data: dbArticle });
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });

    app.post("/delete/:id", function (req, res){
        console.log("in the route");
        console.log(req.body._id);
        var deleteComment = req.body._id
        db.Note.findOneAndRemove({_id: deleteComment})
        .then(function(dbComment){
          console.log("comment deleted")
          res.json(dbComment);
        })
       
        
        
           // .then(function (dbArticle) {
    })

}