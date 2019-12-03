var db = require("../models");
var path = require("path");

module.exports = function(app) {
// Load seller form
  app.get("/seller-form", function(req,res){
    res.sendFile(path.join(__dirname,"../public/form.html"));
  });

// load confirmation page
  app.get("/confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/confirmation.html"))
  })
};