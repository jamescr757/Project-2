var db = require("../models");

const Email = require("../email/email");
const mailer = new Email;

// function to delete from TicketMaster table
// this function fires when user clicks deactivate button
function deleteFromTicketMaster(res, ticketId) {
  
  // db.
  
  // delete from Ticket Master table using the ticket's id


  // .then(

  //   console.log("delete from ticket master successful");
  //   tell the front-end that delete was successful with a status code

  // )
  // .catch(error => {
  //   // can console.log the error to see more information about the error
  //   console.log("error in deleteFromTicketMaster");
  // });
}

// query sold tix table to see if user email in our system 
function findEmailTixSold(res, userEmail, contextObj) {
  
  // db.


  // check if userEmail is in the TixSold table


  // .then(dbArray => {  

    if (dbArray.length === 0) {
      contextObj.notInDatabase = true;
      // set no active tix to false b/c handlebars doesn't have else if 
      contextObj.noActiveTix = false;
    } else {
      contextObj.soldTix = true;
    }

    // after adding booleans to the context object with the if statement above, we want to render the user-listing handlebars page with the contextObj

    
  // })
  // .catch(error => {
  // can console.log the error to see more information about the error
    console.log("there's been an error finding an email in TixSold");
  // })
}

// grab face value price from that table
// callback function for the /api/new-listing get listener
// can test this by console logging the rowFaceValue.price 
function grabFaceValueAndCreateNewListing(req, res, rowId) {

  // grab face value price from FaceValue table based on the rowId
  // db.
  
  
  
  // .then(rowFaceValue => {

  //  insert row into TicketMaster table using data retrieved from db query
  //  need the face value price to give TicketMaster all the info it needs
  // probably could have done an association here but needed to bang this out quickly over the weekend

  //   insertIntoTicketMaster(req, res, rowFaceValue.price)
  // })
  // .catch(error => {
  //   // can console.log the error to see more information about the error
  //   console.log("error while getting price from face value table");
  // });
}

// do what function name calls for - insert row into TicketMaster table
function insertIntoTicketMaster(req, res, faceValue) {

  // db.


  // insert row into TicketMaster
  // the data being sent from the front-end will be an object with sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price
  // ajax front-end call on line 67 of form.js



  // .then(() => {
  //   sends a listing confirmation email
  //   mailer.emailer(email, req.body, "listing");

  //   send successful post status code back to front-end so that the ajax call can be resolved 
  // })
  // .catch((error) => {
  //   // can console.log the error to see more information about the error
  //   console.log("there's been a db query error while creating a new listing");
  //   res.status(500).end();
  // });
}

module.exports = function(app) {
  
  // when a user clicks into the price textbox on the seller listing form, this route gets hit 
  // the front-end ajax call is on line 39 of form.js
  // we want to match the rowId from the front-end to the id in the FaceValue table
  // we then want to send the data back to the front-end
  // can test this by filling out valid info on the seller listing form and then clicking the price textbox - should see suggested price pop-up
  app.get("/api/sell-price/:id", function(req, res) {
    // db.



    // ).then(

    //   // send database response to the front-end

    // )
    // .catch(error => {
    //   // can console.log the error to see more information about the error
    //   console.log("error while querying FaceValue with rowId");
    //   res.status(500).end();
    // });
  });

  // this route gets hit after the user enter's their email to view their listings 
  // front-end code on line 112-116
  // want to check if the entered email is in our database
  app.get("/user-email/:email", function(req, res) {

    // db.

    // first look in TicketMaster table for the email


    // .then(function(activeListings) {
      // going to be an array of objects
      // going to send the data to a handlebars file so creating a contextObj
      const contextObj = {
        listing: true,
        listingArray: activeListings,
        userEmail: req.params.email
      }
      
      // if the entered email is not in TicketMaster, want to check if it's in our TixSold table 
      if (activeListings.length === 0) {
        contextObj.noActiveTix = true;
        findEmailTixSold(res, req.params.email, contextObj);

      } else {

      // if email query returns an array with data in it, we can go ahead and render the handlebars page without checking TixSold table 
      // render the user-listing handlebars page with the contextObj

      }
      
    // })
    // .catch(error => {
      // can console.log the error to see more information about the error
      console.log("error while querying ticket master with an email");
      res.status(500).end();
    // });
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
    .catch(error => {
      // can console.log the error to see more information about the error
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
    .catch(error => {
      // can console.log the error to see more information about the error
      console.log("there's been a db query error");
      res.status(500).end();
    });
  });

  // this gets hit when a user hits submit on the seller listing form 
  app.post("/api/new-listing", function(req, res) {

    grabFaceValueAndCreateNewListing(req, res, req.body.rowId);

  });

  // when user travels to /venue route (buy tickets page) to purchase a ticket, there's an ajax call that hits this route 
  // if you want to look at the front-end it starts at line 142 of venue.js
  // want to select everything from the TicketMaster table and send it back to the front-end
  // this works if you can see all the colored seats when you go to buy a ticket
  app.get("/api/venue", function(req, res) {
    
    // db.

    // .then(function(allTickets) {

          // send allTickets to front-end

    // })
    // .catch(() => {
      // can console.log the error to see more information about the error
    //   console.log("there's been a db query error trying to select all from TicketMaster");
    // });
  });

  // when a user clicks the purchase button in the modal, there's an ajax call that hits this route
  // the front-end js starts at line 223 on venue.js
  // the data being sent from the front-end will include these variables: sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price
  // you can test this query by seeing if the sold ticket shows up in the soldTix table when you refresh it in mySQLWorkbench
  app.post("/api/sold-ticket", function(req, res) {

    const { sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price } = req.body;

    // db.TixSold.create({

    //   section_number: sectionNumber,
    //   row_number: rowNumber,
    //   seat_number: seatNumber,
    //   ticket_id: ticketId,
    //   price: price,
    //   user_name: userName,
    //   email: email

    // })
    // .then(function() {
      
    //   // send to front-end a successful response

    // })
    // .catch(error => {
      // can console.log the error to see more information about the error
    //   console.log("there was a db query error inserting row into tixSold");
    //   res.status(500).end();
    // });
  });

  // route is hit when user clicks deactivate button in modal on the my listings page
  // front-end js starts on line 34 of listing.js
  app.delete("/api/delete-listing/:ticketId", function(req, res) {

    deleteFromTicketMaster(res, req.params.ticketId);

  });

};
