// routes file for sending emails
const Email = require("../email/email");
const mailer = new Email;

module.exports = function(app) {

    app.post("/email/:action", function(req, res) {
        mailer.emailer(req.body.email, req.body, req.params.action);
        res.status(200).end();
    });
}