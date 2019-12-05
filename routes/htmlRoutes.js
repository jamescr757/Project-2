var db = require("../models");
var path = require("path");

module.exports = function(app) {

// Load Home Page
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname,"../public/home.html"));
});

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

  app.get("/user-email/ticket/:id",function(req,res){

    db.TicketMaster.findOne({
      where: {
        ticket_id: req.params.id
      }
    })
    .then(function(ticketInfo) {

      const { section_number, row_number, seat_number, price } = ticketInfo.dataValues

      // going to be an array of objects
      res.render("user-listing", { 
        buyerInput: true,
        section_number,
        row_number,
        seat_number,
        price,
      });
      
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
    });
  })

  // Load index page
  //  app.get("/", function(req, res) {
  // //   db.Example.findAll({}).then(function(dbExamples) {
  //      res.render("index", {
  //        msg: "POST PASS"
  // //       examples: dbExamples
  //      });
  //  });

   app.get("/venue", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
       res.render("venue", {
  //       examples: dbExamples
       });
   });
    
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
