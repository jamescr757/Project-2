# Ticket Pass

### Overview 

Application mimics buying/selling tickets for a sporting event or concert

- a mock venue was created to build out basic functionality
- user can purchase any ticket that is available 
- user can sell a ticket
- user can view their active/sold listings
- emails are sent to the user whenever a major action occurs 
    - ticket purchase
    - create a new listing
    - user's active listing is purchased 
    - deactivate a listing

----------------


### Required Node Packages 
- `npm install dotenv express express-handlebars mysql2 nodemailer sequelize-cli sequelize`

### Connecting to Local Database 

- create local SQL database 
- `CREATE DATABASE <db_name>` `USE <db_name>`
- update `config.json` file in the `config/` directory 
- update `username` `password` `host` and `database` keys in the `development` object of the `config.json` file
- run `node server.js` to create the tables in your local database
- stop the server process
- run `npx sequelize-cli db:seed:all` to seed the tables (this is inserting the rows from the files in `seeders/` into their respective tables)
- local database should be ready 


### Protecting Database Password

- if you need to hide your database password, you can use dotenv 
- create .env file in root directory 
- add `DB_PASS=<your_password>` to the .env file
- replace line 18 `config.password,` of the `models/index.js` file with `process.env.DB_PASS,`


### Using the Email System 

- if you created a .env file above, then you can just add two more variables to that file (if not, follow the steps above to create a .env file)
- add `GMAIL_EMAIL=<your_email_address>` and `GMAIL_PASS=<your_password>` (the email addresses don't have to be gmail accounts)
- if you deploy the app, you will need to add those variable names and values to your Config Vars in the Settings tab on heroku


### Deploying to Heroku 

- run `heroku login` 
- run `heroku create <optional-app-name>`
- update master branch of your repository 
- run `git push heroku master`
- will need to create a deployed database on heroku 
- to seed the deployed database, follow the steps in the `Connecting to Local Database` section starting with updating the `config/config.json` file 