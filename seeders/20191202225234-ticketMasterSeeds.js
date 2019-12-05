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
        price: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 11,
        ticket_id: 11,
        price: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 12,
        ticket_id: 12,
        price: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 13,
        ticket_id: 13,
        price: 500.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 15,
        ticket_id: 75,
        price: 450.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 16,
        ticket_id: 76,
        price: 450.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 17,
        ticket_id: 77,
        price: 450.00
      },
      {
        section_number: 1,
        row_number: 6,
        seat_number: 29,
        ticket_id: 179,
        price: 340.00
      },
      {
        section_number: 1,
        row_number: 6,
        seat_number: 30,
        ticket_id: 180,
        price: 340.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 7,
        ticket_id: 187,
        price: 320.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 8,
        ticket_id: 188,
        price: 320.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 9,
        ticket_id: 189,
        price: 320.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 10,
        ticket_id: 190,
        price: 320.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 23,
        ticket_id: 293,
        price: 230.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 24,
        ticket_id: 294,
        price: 230.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 25,
        ticket_id: 295,
        price: 230.00
      },
      {
        section_number: 1,
        row_number: 13,
        seat_number: 2,
        ticket_id: 362,
        price: 125.00
      },
      {
        section_number: 1,
        row_number: 15,
        seat_number: 10,
        ticket_id: 430,
        price: 100.00
      },
      {
        section_number: 1,
        row_number: 15,
        seat_number: 11,
        ticket_id: 431,
        price: 100.00
      },
      {
        section_number: 1,
        row_number: 15,
        seat_number: 12,
        ticket_id: 432,
        price: 100.00
      },
      {
        section_number: 1,
        row_number: 17,
        seat_number: 16,
        ticket_id: 496,
        price: 50.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 27,
        ticket_id: 567,
        price: 30.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 28,
        ticket_id: 568,
        price: 30.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 29,
        ticket_id: 569,
        price: 30.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 30,
        ticket_id: 570,
        price: 30.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 12,
        ticket_id: 642,
        price: 280.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 13,
        ticket_id: 643,
        price: 280.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 20,
        ticket_id: 710,
        price: 300.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 21,
        ticket_id: 711,
        price: 300.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 14,
        ticket_id: 824,
        price: 180.00
      },
      {
        section_number: 2,
        row_number: 10,
        seat_number: 20,
        ticket_id: 890,
        price: 125.00
      },
      {
        section_number: 2,
        row_number: 15,
        seat_number: 10,
        ticket_id: 1030,
        price: 80.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 26,
        ticket_id: 1106,
        price: 50.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 27,
        ticket_id: 1107,
        price: 50.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 14,
        ticket_id: 1244,
        price: 480.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 15,
        ticket_id: 1245,
        price: 480.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 16,
        ticket_id: 1246,
        price: 480.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 17,
        ticket_id: 1247,
        price: 480.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 2,
        ticket_id: 1322,
        price: 375.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 3,
        ticket_id: 1323,
        price: 375.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 4,
        ticket_id: 1324,
        price: 375.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 15,
        ticket_id: 1425,
        price: 270.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 16,
        ticket_id: 1426,
        price: 270.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 26,
        ticket_id: 1436,
        price: 270.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 27,
        ticket_id: 1437,
        price: 270.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 6,
        ticket_id: 1506,
        price: 160.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 7,
        ticket_id: 1507,
        price: 160.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 8,
        ticket_id: 1508,
        price: 160.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 17,
        ticket_id: 1517,
        price: 160.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 18,
        ticket_id: 1518,
        price: 160.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 19,
        ticket_id: 1519,
        price: 160.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 26,
        ticket_id: 1646,
        price: 90.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 27,
        ticket_id: 1647,
        price: 90.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 28,
        ticket_id: 1648,
        price: 90.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 29,
        ticket_id: 1649,
        price: 90.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 6,
        ticket_id: 1806,
        price: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 7,
        ticket_id: 1807,
        price: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 8,
        ticket_id: 1808,
        price: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 9,
        ticket_id: 1809,
        price: 400.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 17,
        ticket_id: 1877,
        price: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 18,
        ticket_id: 1878,
        price: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 19,
        ticket_id: 1879,
        price: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 20,
        ticket_id: 1880,
        price: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 21,
        ticket_id: 1881,
        price: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 22,
        ticket_id: 1882,
        price: 340.00
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 8,
        ticket_id: 1928,
        price: 265.00
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 9,
        ticket_id: 1929,
        price: 265.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 13,
        ticket_id: 2053,
        price: 150.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 14,
        ticket_id: 2054,
        price: 150.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 15,
        ticket_id: 2055,
        price: 150.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 16,
        ticket_id: 2056,
        price: 150.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 16,
        ticket_id: 2116,
        price: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 17,
        ticket_id: 2117,
        price: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 18,
        ticket_id: 2118,
        price: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 19,
        ticket_id: 2119,
        price: 110.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 12,
        ticket_id: 2172,
        price: 80.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 13,
        ticket_id: 2173,
        price: 80.00
      },
      {
        section_number: 4,
        row_number: 15,
        seat_number: 18,
        ticket_id: 2238,
        price: 75.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 9,
        ticket_id: 2349,
        price: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 10,
        ticket_id: 2350,
        price: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 11,
        ticket_id: 2351,
        price: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 12,
        ticket_id: 2352,
        price: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 13,
        ticket_id: 2353,
        price: 30.00
      },
      

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TicketMaster", null, {});
  }
};
