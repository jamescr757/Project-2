var db = require("../models");
var path = require("path");
var exphbs = require("express-handlebars");

module.exports = function(app) {

// Load seller form
  app.get("/seller-form", function(req,res){
    res.sendFile(path.join(__dirname,"../public/form.html"));
  });

// load seller - confirmation page
  app.get("/seller-confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/seller-confirmation.html"))
  })

// load buyer - confirmation page
  app.get("/buyer-confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/buyer-confirmation.html"))
  })

  app.get("/user-email",function(req,res){
    // res.sendFile(path.join(__dirname, "../public/email-search.html"))
    res.render("user-listing", { sellerEmail: true });
  })


  // Load index page
   app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
       res.render("index", {
         msg: "POST PASS"
  //       examples: dbExamples
       });
   });

   app.get("/venue", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
       res.render("venue", {
  //       examples: dbExamples
       });
   });
    

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
