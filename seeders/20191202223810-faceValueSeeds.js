'use strict';

// run npx sequelize-cli db:seed:all to seed the FaceValue Table

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("FaceValue", [

      // north section - numbers clockwise
      {
        section_number: 1,
        row_number: 1,
        price: 500.00
      }, 
      {
        section_number: 1,
        row_number: 2,
        price: 480.00
      }, 
      {
        section_number: 1,
        row_number: 3,
        price: 440.00
      }, 
      {
        section_number: 1,
        row_number: 4,
        price: 400.00
      }, 
      {
        section_number: 1,
        row_number: 5,
        price: 370.00
      }, 
      {
        section_number: 1,
        row_number: 6,
        price: 340.00
      }, 
      {
        section_number: 1,
        row_number: 7,
        price: 310.00
      }, 
      {
        section_number: 1,
        row_number: 8,
        price: 280.00
      }, 
      {
        section_number: 1,
        row_number: 9,
        price: 250.00
      }, 
      {
        section_number: 1,
        row_number: 10,
        price: 220.00
      }, 
      {
        section_number: 1,
        row_number: 11,
        price: 180.00
      }, 
      {
        section_number: 1,
        row_number: 12,
        price: 150.00
      }, 
      {
        section_number: 1,
        row_number: 13,
        price: 130.00
      }, 
      {
        section_number: 1,
        row_number: 14,
        price: 110.00
      }, 
      {
        section_number: 1,
        row_number: 15,
        price: 90.00
      }, 
      {
        section_number: 1,
        row_number: 16,
        price: 70.00
      }, 
      {
        section_number: 1,
        row_number: 17,
        price: 50.00
      }, 
      {
        section_number: 1,
        row_number: 18,
        price: 40.00
      }, 
      {
        section_number: 1,
        row_number: 19,
        price: 30.00
      }, 
      {
        section_number: 1,
        row_number: 20,
        price: 20.00
      }, 


      // east section
      {
        section_number: 2,
        row_number: 1,
        price: 400.00
      }, 
      {
        section_number: 2,
        row_number: 2,
        price: 380.00
      }, 
      {
        section_number: 2,
        row_number: 3,
        price: 340.00
      }, 
      {
        section_number: 2,
        row_number: 4,
        price: 300.00
      }, 
      {
        section_number: 2,
        row_number: 5,
        price: 270.00
      }, 
      {
        section_number: 2,
        row_number: 6,
        price: 240.00
      }, 
      {
        section_number: 2,
        row_number: 7,
        price: 210.00
      }, 
      {
        section_number: 2,
        row_number: 8,
        price: 180.00
      }, 
      {
        section_number: 2,
        row_number: 9,
        price: 150.00
      }, 
      {
        section_number: 2,
        row_number: 10,
        price: 120.00
      }, 
      {
        section_number: 2,
        row_number: 11,
        price: 110.00
      }, 
      {
        section_number: 2,
        row_number: 12,
        price: 100.00
      }, 
      {
        section_number: 2,
        row_number: 13,
        price: 90.00
      }, 
      {
        section_number: 2,
        row_number: 14,
        price: 80.00
      }, 
      {
        section_number: 2,
        row_number: 15,
        price: 70.00
      }, 
      {
        section_number: 2,
        row_number: 16,
        price: 60.00
      }, 
      {
        section_number: 2,
        row_number: 17,
        price: 50.00
      }, 
      {
        section_number: 2,
        row_number: 18,
        price: 40.00
      }, 
      {
        section_number: 2,
        row_number: 19,
        price: 30.00
      }, 
      {
        section_number: 2,
        row_number: 20,
        price: 20.00
      }, 


      // south section
      {
        section_number: 3,
        row_number: 1,
        price: 500.00
      }, 
      {
        section_number: 3,
        row_number: 2,
        price: 480.00
      }, 
      {
        section_number: 3,
        row_number: 3,
        price: 440.00
      }, 
      {
        section_number: 3,
        row_number: 4,
        price: 400.00
      }, 
      {
        section_number: 3,
        row_number: 5,
        price: 370.00
      }, 
      {
        section_number: 3,
        row_number: 6,
        price: 340.00
      }, 
      {
        section_number: 3,
        row_number: 7,
        price: 310.00
      }, 
      {
        section_number: 3,
        row_number: 8,
        price: 280.00
      }, 
      {
        section_number: 3,
        row_number: 9,
        price: 250.00
      }, 
      {
        section_number: 3,
        row_number: 10,
        price: 220.00
      }, 
      {
        section_number: 3,
        row_number: 11,
        price: 180.00
      }, 
      {
        section_number: 3,
        row_number: 12,
        price: 150.00
      }, 
      {
        section_number: 3,
        row_number: 13,
        price: 130.00
      }, 
      {
        section_number: 3,
        row_number: 14,
        price: 110.00
      }, 
      {
        section_number: 3,
        row_number: 15,
        price: 90.00
      }, 
      {
        section_number: 3,
        row_number: 16,
        price: 70.00
      }, 
      {
        section_number: 3,
        row_number: 17,
        price: 50.00
      }, 
      {
        section_number: 3,
        row_number: 18,
        price: 40.00
      }, 
      {
        section_number: 3,
        row_number: 19,
        price: 30.00
      }, 
      {
        section_number: 3,
        row_number: 20,
        price: 20.00
      }, 


      // west section
      {
        section_number: 4,
        row_number: 1,
        price: 400.00
      }, 
      {
        section_number: 4,
        row_number: 2,
        price: 380.00
      }, 
      {
        section_number: 4,
        row_number: 3,
        price: 340.00
      }, 
      {
        section_number: 4,
        row_number: 4,
        price: 300.00
      }, 
      {
        section_number: 4,
        row_number: 5,
        price: 270.00
      }, 
      {
        section_number: 4,
        row_number: 6,
        price: 240.00
      }, 
      {
        section_number: 4,
        row_number: 7,
        price: 210.00
      }, 
      {
        section_number: 4,
        row_number: 8,
        price: 180.00
      }, 
      {
        section_number: 4,
        row_number: 9,
        price: 150.00
      }, 
      {
        section_number: 4,
        row_number: 10,
        price: 120.00
      }, 
      {
        section_number: 4,
        row_number: 11,
        price: 110.00
      }, 
      {
        section_number: 4,
        row_number: 12,
        price: 100.00
      }, 
      {
        section_number: 4,
        row_number: 13,
        price: 90.00
      }, 
      {
        section_number: 4,
        row_number: 14,
        price: 80.00
      }, 
      {
        section_number: 4,
        row_number: 15,
        price: 70.00
      }, 
      {
        section_number: 4,
        row_number: 16,
        price: 60.00
      }, 
      {
        section_number: 4,
        row_number: 17,
        price: 50.00
      }, 
      {
        section_number: 4,
        row_number: 18,
        price: 40.00
      }, 
      {
        section_number: 4,
        row_number: 19,
        price: 30.00
      }, 
      {
        section_number: 4,
        row_number: 20,
        price: 20.00
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FaceValue", null, {});
  }
};
