const nodemailer = require("nodemailer");
require("dotenv").config();

// constructor Emailer
function Email() {
    
    this.emailText = function(mailOptions, ticketObj, headlineString, typeString) {
        mailOptions.subject = `${typeString} Confirmation`;

        mailOptions.text = `
        ${headlineString}
        
            Section: ${ticketObj.sectionNumber}
            Row: ${ticketObj.rowNumber}
            Seat: ${ticketObj.seatNumber}
            ${typeString} Price: $${ticketObj.price}
        `
    }

    this.emailer = function(userEmail, ticketObj, userType) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_EMAIL,
              pass: process.env.GMAIL_PASS
            }
          });
          
        const mailOptions = {
            from: process.env.GMAIL_EMAIL,
            to: userEmail
        }
        
        switch (userType) {
    
        case "listing":
            this.emailText(mailOptions, ticketObj, "Your ticket has been listed!", "Listing");
            break;
            
        case "sold": 
            this.emailText(mailOptions, ticketObj, "Your ticket has sold!", "Sale");
            break;
            
        case "purchase": 
            this.emailText(mailOptions, ticketObj, "Thank you for your purchase!", "Purchase");
            break;
    
        default: 
            this.emailText(mailOptions, ticketObj, "Your ticket has been deactivated!", "Deactivated Listing");
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
}



module.exports = Email;