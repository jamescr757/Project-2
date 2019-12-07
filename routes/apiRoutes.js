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
    .then(function(userListing) {
      // going to be an array of objects

      const contextObj = {
        listing: true,
        listingArray: userListing,
        userEmail: userListing[0].dataValues.email
      }
      
      if (userListing.length === 0) contextObj.noTix = true;
      
      // need to loop through the user's listings and check if they have any where purchased = false
      let activeTix = 0;
      for (const element of userListing) {
        if (!element.dataValues.purchased) {
          activeTix++;
          break;
        }
      }

      if (activeTix === 0) contextObj.noActiveTix = true;

      res.render("user-listing", contextObj);
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
    });
  });

  app.get("/sold-listings/:email", function(req, res) {
    db.TicketMaster.findAll({
      where: {
        email: req.params.email
      }
    })
    .then(function(userListing) {
      // going to be an array of objects

      const contextObj = {
        listingArray: userListing,
        userEmail: userListing[0].dataValues.email
      }

      // need to loop through the user's listings and check if they have any where purchased = true
      let soldTix = 0;
      for (const element of userListing) {
        if (element.dataValues.purchased) {
          soldTix++;
          break;
        }
      }

      if (soldTix === 0) contextObj.noSoldTix = true;

      res.render("sold-listings", contextObj);
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
    });
  });

  app.post("/api/new-listing", function(req, res) {

    const { sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price } = req.body;

    db.TicketMaster.create({

      section_number: sectionNumber,
      row_number: rowNumber,
      seat_number: seatNumber,
      ticket_id: ticketId,
      price: price,
      user_name: userName,
      email: email

    }).then(() => {
      emailer(email, req.body, "seller");
      res.status(201).end();
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
    });
  });

  app.get("/api/venue", function(req, res) {
    db.TicketMaster.findAll({
      where: {
        purchased: false
      }
    })
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

  app.put("/api/ticket-purchased/:ticketId", function(req, res) {

    db.TicketMaster.update({
      purchased: true
    }, {
      where: {
        ticket_id: req.params.ticketId
      }
    })
    .then(function() {

      res.status(200).end();
    })
    .catch(() => {
      console.log("there was a db query error in put api");
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
      console.log("there was a db query error in delete api");
    });
  });

};
