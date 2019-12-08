var db = require("../models");

const Email = require("../email/email");
const mailer = new Email;

// function to delete from TicketMaster table
// will be nested inside route to render buyer receipt email
function deleteFromTicketMaster(ticketId) {
  
  db.TicketMaster.destroy({
    where: {
      ticket_id: ticketId
    }
  })
  .then(function() {
    console.log("delete from ticket master successful");
  })
  .catch(() => {
    console.log("error in deleteFromTicketMaster");
  });
}

// query sold tix table to see if user email in our system 
function findEmailTixSold(res, userEmail, contextObj) {
  
  db.TixSold.findAll({
    where: {
      email: userEmail
    }
  })
  .then(dbArray => {  

    if (dbArray.length === 0) {
      contextObj.notInDatabase = true;
      // set no active tix to false b/c handlebars doesn't have else if 
      contextObj.noActiveTix = false;
    } else {
      contextObj.soldTix = true;
    }

    res.render("user-listing", contextObj);
  })
  .catch(error => {
    // console.log(error.message);
    console.log("there's been an error finding an email in TixSold");
  })
}

// grab face value price from that table
function grabFaceValueAndCreateNewListing(req, res, rowId) {
  db.FaceValue.findOne({
    where: {
      id: rowId
    }
  }).then(rowFaceValue => {
    insertIntoTicketMaster(req, res, rowFaceValue.price)
  })
  .catch(error => {
    console.log("error while gettig price from face value table");
  });
}

function insertIntoTicketMaster(req, res, faceValue) {
  
  const { sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price } = req.body;

  db.TicketMaster.create({

    section_number: sectionNumber,
    row_number: rowNumber,
    seat_number: seatNumber,
    ticket_id: ticketId,
    price: price,
    face_value: faceValue,
    user_name: userName,
    email: email

  })
  .then(() => {
    mailer.emailer(email, req.body, "listing");
    res.status(201).end();
  })
  .catch((error) => {
    console.log("there's been a db query error while creating a new listing");
    res.status(500).end();
  });
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

  app.get("/user-email/:email", function(req, res) {
    db.TicketMaster.findAll({
      where: {
        email: req.params.email
      }
    })
    .then(function(activeListings) {
      // going to be an array of objects

      const contextObj = {
        listing: true,
        listingArray: activeListings,
        userEmail: req.params.email
      }
      
      if (activeListings.length === 0) {
        contextObj.noActiveTix = true;
        findEmailTixSold(res, req.params.email, contextObj);

      } else {
        res.render("user-listing", contextObj);
      }
      
    })
    .catch(error => {
      console.log("error while querying ticket master with an email");
      res.status(500).end();
    });
  });

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
        buyerEmail: true,
        section_number,
        row_number,
        seat_number,
        price,
      });
    })
    .then(() => {
      deleteFromTicketMaster(req.params.id);
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
    });
  });

  app.get("/sold-listings/:email", function(req, res) {
    db.TixSold.findAll({
      where: {
        email: req.params.email
      }
    })
    .then(function(userListing) {
      // going to be an array of objects
      const contextObj = {
        listingArray: userListing,
        userEmail: req.params.email
      }

      if (userListing.length === 0) contextObj.noSoldTix = true;

      res.render("sold-listings", contextObj);
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
    });
  });

  app.post("/api/new-listing", function(req, res) {

    grabFaceValueAndCreateNewListing(req, res, req.body.rowId);

  });

  app.get("/api/venue", function(req, res) {
    db.TicketMaster.findAll({})
    .then(function(allTickets) {
      res.json(allTickets);
    })
    .catch(() => {
      console.log("there's been a db query error");
    });
  });

  app.post("/api/sold-ticket", function(req, res) {

    const { sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price } = req.body;

    db.TixSold.create({

      section_number: sectionNumber,
      row_number: rowNumber,
      seat_number: seatNumber,
      ticket_id: ticketId,
      price: price,
      user_name: userName,
      email: email

    })
    .then(function() {
      res.status(201).end();
    })
    .catch(error => {
      console.log("there was a db query error inserting row into tix sold");
      res.status(500).end();
    });;
  });

  app.delete("/api/delete-listing/:ticketId", function(req, res) {

    db.TicketMaster.destroy({
      where: {
        ticket_id: req.params.ticketId
      }
    })
    .then(function() {
      res.status(204).end();
    })
    .catch(() => {
      console.log("there was a db query error in deleting from ticket master");
      res.status(500).end();
    });
  });

};
