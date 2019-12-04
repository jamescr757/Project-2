'use strict';

// run npx sequelize-cli db:seed:all to seed the FaceValue Table

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("TicketMaster", [

      // need some initial seeds for testing purposes
      {
        section_number: 1,
        row_number: 1,
        seat_number: 10,
        ticket_id: 10,
        price: 500.00,
        user_name: "James",
        email: "jamestest@gmail.com"
      },
      {
        section_number: 3,
        row_number: 10,
        seat_number: 20,
        ticket_id: 1490,
        price: 180.00,
        user_name: "Hannah",
        email: "hannahtest@gmail.com"
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 8,
        ticket_id: 1928,
        price: 300.00,
        user_name: "Arthi",
        email: "arthitest@gmail.com"
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TicketMaster", null, {});
  }
};
