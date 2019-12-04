var db = require("../models");

var userinfo = {
      name: "arthi",
      seatnumber: 5,
      sectionnumber: 4,
      rownumber: 3,
      price: 120
    }
module.exports = function(app) {
  // Get all examples
  app.get("/api/sell-price/:id", function(req, res) {
    db.FaceValue.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(ticketFaceValue) {

      res.json(ticketFaceValue);
    });
  });

  app.get("/api/listing", function(req, res) {
    console.log("HIII : ",req.body);
    db.TicketMaster.findAll({
      where: {
        email: req.body.email
      }
    }).then(function(userListing) {
      // going to be an array of objects
      console.log(userListing);
      res.json(userListing);
    });
  });

  
  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
