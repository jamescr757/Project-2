var db = require("../models");

const nodemailer = require("nodemailer");
require("dotenv").config();

// helper function for email body text
function emailText(mailOptions, ticketObj, headlineString, typeString) {
  
  mailOptions.subject = `${typeString} Confirmation`;

  mailOptions.text = `
  ${headlineString}
  
    Section: ${ticketObj.sectionNumber}
    Row: ${ticketObj.rowNumber}
    Seat: ${ticketObj.seatNumber}
    ${typeString} Price: $${ticketObj.price}
  `
}

// function to send a confirmation email 
function emailer(userEmail, ticketObj, userType) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jamesriddle@utexas.edu',
      pass: process.env.GMAIL_PASS
    }
  });
  
  const mailOptions = {
      from: 'jamesriddle@utexas.edu',
      to: userEmail
  }

  switch (userType) {

    case "seller":
      emailText(mailOptions, ticketObj, "Your ticket has been listed!", "Listing");
      break;
      
    case "sold": 
      emailText(mailOptions, ticketObj, "Your ticket has sold!", "Sale");
      break;
      
    case "buyer": 
      emailText(mailOptions, ticketObj, "Thank you for your purchase!", "Purchase");
      break;

    default: 
      emailText(mailOptions, ticketObj, "Your ticket has been deactivated!", "Deactivated Listing");
      break;
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

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
    emailer(email, req.body, "seller");
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

  app.post("/api/new-sale", function(req, res) {
    emailer(req.body.email, req.body, "sold");
    res.status(200).end();
  });

  app.post("/api/new-purchase", function(req, res) {
    emailer(req.body.email, req.body, "buyer");
    res.status(200).end();
  });

  app.post("/api/delete-email", function(req, res) {
    emailer(req.body.email, req.body, "deactivate");
    res.status(200).end();
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
