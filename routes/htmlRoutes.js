var db = require("../models");
var path = require("path");

module.exports = function(app) {
<<<<<<< HEAD
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
=======
// Load seller form
  app.get("/seller-form", function(req,res){
    res.sendFile(path.join(__dirname,"../public/form.html"));
  });

// load confirmation page
  app.get("/confirmation", function(req,res){
    res.sendFile(path.join(__dirname,"../public/confirmation.html"))
  })
};
>>>>>>> d4426aa97548d6bb9d1f537696dd26e1290189c5
