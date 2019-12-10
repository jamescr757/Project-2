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
      contextObj.s = true;
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
  // probably could have done an association here but needed to write this quickly over the weekend
  // can use the insertIntoTicketMaster function

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
  // can check this by hitting this route manually and seeing what is rendered
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

  // the user is redirected to this route after they click purchase on the venue modal
  // the front-end code starts on line 223 of venue.js
  // we want to use the id in the path to locate the ticket info in the TicketMaster table
  // can test this by clicking purchase on buy tickets modal and inspecting the form, you should see the ticket's info in its data attributes
  // can then check mySQLWorkbench and see if that ticket was deleted from the table
  app.get("/user-email/ticket/:id",function(req,res){

    // db.

      // grab ticket from TicketMaster

    // .then(function(ticketInfo) {
      
      // we want to render the user-listing handlebars page but the data in the context object is very important 
      // buyerEmail set to true tells the handlebars page to render the buyer email form (line 95 of user-listing.handlebars)
      const contextObj = {
        buyerEmail: true
      }
      // however, that buyer form needs the info from the ticket purchase to send the buyer their receipt email with the ticket info
      // the ticket info is stored in data attributes on the handlebars page (lines 98-101)
      // so we need to add those keys to our contextObj...
      // contextObj.section_number = 
      // contextObj.row_number = 
      // contextObj.seat_number = 
      // contextObj.price = 
      
      // render the user-listing handlebars page with the contextObj
    // })

    // .then(() => {
      // once the handblebars page is rendered and the form has the ticket info, we can now delete that ticket from the TicketMaster table
      // use the deleteFromTicketMaster function to delete the ticket purchased
    // })

    // .catch(error => {
      // can console.log the error to see more information about the error
      console.log("there's been a db error in the route hit after clicking purchase");
      res.status(500).end();
    // });
  });

  // this route is hit if the user clicks "View Your Sales" on their active listings page
  // the end goal is to render the sold-listings handlebars page
  // can test this by hitting the route below manually with emails you know have sold tickets 
  // app@gmail.com should always have tickets sold since that's the default email so you can type /sold-listings/app@gmail.com into address bar to test the db query
  app.get("/sold-listings/:email", function(req, res) {
    
    // db.


    // use seller's email to find their sold tickets in the TixSold Table


    // .then(function(userListing) {
      // going to be an array of objects
      const contextObj = {
        listingArray: userListing,
        userEmail: req.params.email
      }

      // want to alert the user if they don't have any sold tickets
      if (userListing.length === 0) contextObj.noSoldTix = true;

      // render the sold-listings handlebars page with the context object
    // })
    // .catch(error => {
      // can console.log the error to see more information about the error
      console.log("there's been a db error trying to grab sold listings from TixSold");
      res.status(500).end();
    // });
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

    // db.

    // insert a new row into soldTix table using data from front-end
    // remember to provide the table with info for all columns that don't have default values

    // 
    // .then(function() {
      
    //   // send to front-end a success status code

    // })
    // .catch(error => {
      // can console.log the error to see more information about the error
    //   console.log("there was a db query error inserting row into tixSold");
    //   res.status(500).end();
    // });
  });

  // route is hit when user clicks deactivate button in modal on the my listings page
  // front-end js starts on line 34 of listing.js
  // can test this by clicking deactivate and checking the table in Workbench or by refreshing the page and not seeing that ticket displayed anymore
  app.delete("/api/delete-listing/:ticketId", function(req, res) {

    // use the deleteFromTicketMaster function to delete from that table

  });

};
