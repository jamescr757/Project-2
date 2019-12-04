var db = require("../models");

const nodemailer = require("nodemailer");
require("dotenv").config();

// function to send a confirmation email 
function emailer(userEmail, ticketObj) {
  console.log("email function active");

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jamesriddle@utexas.edu',
      pass: process.env.GMAIL_PASS
    }
  });
  
  const mailOptions = {
    from: 'jamesriddle@utexas.edu',
    to: userEmail,
    subject: 'Listing Confirmation',
    text: `Your ticket has been posted!

      Section: ${ticketObj.sectionNumber}
      Row: ${ticketObj.rowNumber}
      Seat: ${ticketObj.seatNumber}
      Listing Price: $${ticketObj.price}
    `
  };
  
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

  app.post("/api/listing", function(req, res) {
    db.TicketMaster.findAll({
      where: {
        email: req.body.email
      }
    }).then(function(userTickets) {
      // going to be an array of objects
      res.json(userTickets);
    });
  });

  app.post("/api/new-listing", function(req, res) {

    const { sectionNumber, rowNumber, seatNumber, userName, email, price } = req.body;

    db.TicketMaster.create({

      section_number: sectionNumber,
      row_number: rowNumber,
      seat_number: seatNumber,
      price: price,
      user_name: userName,
      email: email

    }).then(() => {
      emailer(email, req.body);
      // going to be an array of objects
      res.status(201).end();
    })
    .catch(() => {
      console.log("there's been a db query error");
      res.status(500).end();
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
