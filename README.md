# Project-2
Project 2

### Logistic steps to take before coding 

1. I changed the email account for the app to a throw away email, so you need to update your .env files 

    `GMAIL_PASS=pw123#456$`
    `GMAIL_EMAIL=ticketpass713@gmail.com`

2. Your `config.json` should be connected to the deployed database (double check that it is)

3. If you ever need to re-seed the database, just run `npx sequelize-cli db:seed:all` in the terminal. (You'll have to drop the database first before seeding it or there will be an error for repeated seats in the TicketMaster table.)

4. Line 29 of the `server.js` file is where sequelize knows to drop the database or not. You probably want this set to false (don't drop database) 99% of the time.



### Recreating the app's database queries

- start by creating the virtual representations of the tables in the models folder

- all the missing code is in the apiRoutes file after you fill-in the js files in the models folder

- I would skip all the functions at the top of the apiRoutes file until you come across them in the app listener section (starts at line 105) for a few reasons: 
    - it's easier to test the app listener's
    - those functions will make more sense if you understand the full contex of what they are doing
    - some of those functions are tied together or nested so they won't make any sense by themselves

- I think the app listener on /api/venue (line 252) is the best place to start because it's easy to test and the least complicated db query 

- After that, I would do the app.get or app.delete listeners 

- I would do the app.post listeners last




### A Few Disclaimers

1. The correct code should work, but it's impossible to test an empty routes file. Sorry in advance if somehow the correct code does not work. I'm 95% sure it will though.

2. I tried to make it easy to find the front-end code because it's important to understand what the front-end is requesting (you don't have to fully understand how the front-end js is working but hopefully you can follow what it's doing by how I named everything)

3. I like to console log my own error message, so it's clear where the error occurred. If I'm not sure why the error occurred, I can then print the entire error with `console.log(error)` and run the code again to see it in the console. Sometimes seeing that massive error in the console first makes me upset, and it's difficult to parse through it and figure out where the actual error occurred. I like doing it the way I currently have the code written, but I'm not sure what is best practice.   

4. At the end, you can checkout to the stable branch to see the working code