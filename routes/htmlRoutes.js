var db = require("../models");
var path = require("path");
var exphbs = require("express-handlebars");

module.exports = function(app) {

// Load seller form
  app.get("/seller-form", function(req,res){
    res.sendFile(path.join(__dirname,"../public/form.html"));
  });

// load confirmation page
  app.get("/confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/confirmation.html"))
  })

  // Load index page
   app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
       res.render("index", {
         msg: "Welcome!!! to our"
  //       examples: dbExamples
       });
  
   });

  //app.get("/api/listing", function(req, res) {
    
  //    console.log(userinfo);
  //   res.render("../views/userform.handlebars", {userinfo});
    
  //});
  

  //app.get("/seller-form", function(req, res) {
    
  //    res.sendFile(path.join(__dirname,"../public/form.html"));
    
  //  });
    

  //Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
