var db = require("../models");
var path = require("path");

module.exports = function(app) {

  // Load Home Page
  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/html/home.html"));
  });

  // Load seller form
  app.get("/seller-form", function(req,res){
    res.sendFile(path.join(__dirname,"../public/html/form.html"));
  });

  // load seller - confirmation page
  app.get("/seller-confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/html/seller-confirmation.html"))
  });

  // load buyer - confirmation page
  app.get("/buyer-confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/html/buyer-confirmation.html"))
  });

  app.get("/user-email",function(req,res){
    res.render("user-listing", { sellerEmail: true });
  });

  app.get("/venue", function(req, res) {
    res.render("venue", {});
   });
    
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
