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
        price: 550.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 11,
        ticket_id: 11,
        price: 550.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 12,
        ticket_id: 12,
        price: 550.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 13,
        ticket_id: 13,
        price: 550.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 20,
        ticket_id: 20,
        price: 500.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 21,
        ticket_id: 21,
        price: 500.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 22,
        ticket_id: 22,
        price: 500.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 1,
        seat_number: 23,
        ticket_id: 23,
        price: 500.00,
        email: "app@gmail.com",
        face_value: 500.00
      },
      {
        section_number: 1,
        row_number: 2,
        seat_number: 3,
        ticket_id: 33,
        price: 475.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 1,
        row_number: 2,
        seat_number: 4,
        ticket_id: 34,
        price: 475.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 1,
        row_number: 2,
        seat_number: 5,
        ticket_id: 35,
        price: 475.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 1,
        row_number: 2,
        seat_number: 6,
        ticket_id: 36,
        price: 475.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 15,
        ticket_id: 75,
        price: 450.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 16,
        ticket_id: 76,
        price: 450.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 17,
        ticket_id: 77,
        price: 450.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 18,
        ticket_id: 78,
        price: 450.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 1,
        row_number: 3,
        seat_number: 19,
        ticket_id: 79,
        price: 450.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 1,
        row_number: 4,
        seat_number: 9,
        ticket_id: 99,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 1,
        row_number: 4,
        seat_number: 10,
        ticket_id: 100,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 1,
        row_number: 4,
        seat_number: 11,
        ticket_id: 101,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 1,
        row_number: 6,
        seat_number: 29,
        ticket_id: 179,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 1,
        row_number: 6,
        seat_number: 30,
        ticket_id: 180,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 7,
        ticket_id: 187,
        price: 320.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 8,
        ticket_id: 188,
        price: 320.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 9,
        ticket_id: 189,
        price: 320.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 10,
        ticket_id: 190,
        price: 320.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 16,
        ticket_id: 196,
        price: 325.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 17,
        ticket_id: 197,
        price: 325.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 18,
        ticket_id: 198,
        price: 325.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 7,
        seat_number: 19,
        ticket_id: 199,
        price: 325.00,
        email: "app@gmail.com",
        face_value: 310.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 23,
        ticket_id: 293,
        price: 230.00,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 24,
        ticket_id: 294,
        price: 230.00,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 25,
        ticket_id: 295,
        price: 230.00,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 1,
        row_number: 10,
        seat_number: 26,
        ticket_id: 296,
        price: 230.00,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 1,
        row_number: 12,
        seat_number: 6,
        ticket_id: 336,
        price: 149.99,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 1,
        row_number: 12,
        seat_number: 7,
        ticket_id: 337,
        price: 149.99,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 1,
        row_number: 12,
        seat_number: 8,
        ticket_id: 338,
        price: 149.99,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 1,
        row_number: 12,
        seat_number: 9,
        ticket_id: 339,
        price: 149.99,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 1,
        row_number: 13,
        seat_number: 2,
        ticket_id: 362,
        price: 125.00,
        email: "app@gmail.com",
        face_value: 130.00
      },
      {
        section_number: 1,
        row_number: 14,
        seat_number: 24,
        ticket_id: 414,
        price: 105.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 1,
        row_number: 14,
        seat_number: 25,
        ticket_id: 415,
        price: 105.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 1,
        row_number: 14,
        seat_number: 26,
        ticket_id: 416,
        price: 105.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 1,
        row_number: 14,
        seat_number: 27,
        ticket_id: 417,
        price: 105.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 1,
        row_number: 15,
        seat_number: 10,
        ticket_id: 430,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 1,
        row_number: 15,
        seat_number: 11,
        ticket_id: 431,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 1,
        row_number: 15,
        seat_number: 12,
        ticket_id: 432,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 1,
        row_number: 17,
        seat_number: 16,
        ticket_id: 496,
        price: 50.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 1,
        row_number: 17,
        seat_number: 26,
        ticket_id: 506,
        price: 50.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 1,
        row_number: 17,
        seat_number: 27,
        ticket_id: 507,
        price: 50.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 1,
        row_number: 18,
        seat_number: 7,
        ticket_id: 517,
        price: 35.00,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 1,
        row_number: 18,
        seat_number: 8,
        ticket_id: 518,
        price: 35.00,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 1,
        row_number: 18,
        seat_number: 9,
        ticket_id: 519,
        price: 35.00,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 1,
        row_number: 18,
        seat_number: 10,
        ticket_id: 520,
        price: 35.00,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 27,
        ticket_id: 567,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 28,
        ticket_id: 568,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 29,
        ticket_id: 569,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 1,
        row_number: 19,
        seat_number: 30,
        ticket_id: 570,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 12,
        ticket_id: 642,
        price: 390.00,
        email: "app@gmail.com",
        face_value: 380.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 13,
        ticket_id: 643,
        price: 390.00,
        email: "app@gmail.com",
        face_value: 380.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 23,
        ticket_id: 653,
        price: 375.00,
        email: "app@gmail.com",
        face_value: 380.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 24,
        ticket_id: 654,
        price: 375.00,
        email: "app@gmail.com",
        face_value: 380.00
      },
      {
        section_number: 2,
        row_number: 2,
        seat_number: 25,
        ticket_id: 655,
        price: 375.00,
        email: "app@gmail.com",
        face_value: 380.00
      },
      {
        section_number: 2,
        row_number: 3,
        seat_number: 5,
        ticket_id: 665,
        price: 335.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 2,
        row_number: 3,
        seat_number: 6,
        ticket_id: 666,
        price: 335.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 2,
        row_number: 3,
        seat_number: 7,
        ticket_id: 667,
        price: 335.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 2,
        row_number: 3,
        seat_number: 8,
        ticket_id: 668,
        price: 335.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 10,
        ticket_id: 700,
        price: 300.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 11,
        ticket_id: 701,
        price: 300.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 12,
        ticket_id: 702,
        price: 300.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 20,
        ticket_id: 710,
        price: 300.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 2,
        row_number: 4,
        seat_number: 21,
        ticket_id: 711,
        price: 300.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 2,
        row_number: 6,
        seat_number: 1,
        ticket_id: 751,
        price: 240.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 6,
        seat_number: 2,
        ticket_id: 752,
        price: 240.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 6,
        seat_number: 12,
        ticket_id: 762,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 6,
        seat_number: 13,
        ticket_id: 763,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 6,
        seat_number: 14,
        ticket_id: 764,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 6,
        seat_number: 15,
        ticket_id: 765,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 9,
        seat_number: 1,
        ticket_id: 841,
        price: 239.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 9,
        seat_number: 2,
        ticket_id: 842,
        price: 239.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 9,
        seat_number: 3,
        ticket_id: 843,
        price: 239.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 4,
        ticket_id: 814,
        price: 190.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 5,
        ticket_id: 815,
        price: 190.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 6,
        ticket_id: 816,
        price: 190.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 14,
        ticket_id: 824,
        price: 180.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 24,
        ticket_id: 834,
        price: 180.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 2,
        row_number: 8,
        seat_number: 25,
        ticket_id: 835,
        price: 180.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 2,
        row_number: 10,
        seat_number: 20,
        ticket_id: 890,
        price: 125.00,
        email: "app@gmail.com",
        face_value: 120.00
      },
      {
        section_number: 2,
        row_number: 11,
        seat_number: 2,
        ticket_id: 902,
        price: 99.99,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 2,
        row_number: 11,
        seat_number: 3,
        ticket_id: 903,
        price: 99.99,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 2,
        row_number: 11,
        seat_number: 4,
        ticket_id: 904,
        price: 99.99,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 2,
        row_number: 11,
        seat_number: 5,
        ticket_id: 905,
        price: 99.99,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 10,
        ticket_id: 940,
        price: 104.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 11,
        ticket_id: 941,
        price: 104.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 12,
        ticket_id: 942,
        price: 104.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 13,
        ticket_id: 943,
        price: 104.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 25,
        ticket_id: 955,
        price: 109.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 26,
        ticket_id: 956,
        price: 109.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 12,
        seat_number: 27,
        ticket_id: 957,
        price: 109.99,
        email: "app@gmail.com",
        face_value: 100.00
      },
      {
        section_number: 2,
        row_number: 13,
        seat_number: 17,
        ticket_id: 977,
        price: 88.99,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 2,
        row_number: 13,
        seat_number: 18,
        ticket_id: 978,
        price: 88.99,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 2,
        row_number: 13,
        seat_number: 19,
        ticket_id: 979,
        price: 88.99,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 2,
        row_number: 14,
        seat_number: 1,
        ticket_id: 991,
        price: 85.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 2,
        row_number: 14,
        seat_number: 2,
        ticket_id: 992,
        price: 85.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 2,
        row_number: 14,
        seat_number: 3,
        ticket_id: 993,
        price: 85.00,
        email: "jamesriddle757@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 2,
        row_number: 15,
        seat_number: 10,
        ticket_id: 1030,
        price: 80.00,
        email: "jamesriddle757@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 2,
        row_number: 15,
        seat_number: 20,
        ticket_id: 1040,
        price: 80.00,
        email: "jamesriddle757@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 2,
        row_number: 15,
        seat_number: 21,
        ticket_id: 1041,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 2,
        row_number: 15,
        seat_number: 22,
        ticket_id: 1042,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 2,
        row_number: 15,
        seat_number: 23,
        ticket_id: 1043,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 6,
        ticket_id: 1086,
        price: 40.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 7,
        ticket_id: 1087,
        price: 40.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 8,
        ticket_id: 1088,
        price: 40.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 9,
        ticket_id: 1089,
        price: 40.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 26,
        ticket_id: 1106,
        price: 50.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 2,
        row_number: 17,
        seat_number: 27,
        ticket_id: 1107,
        price: 50.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 2,
        row_number: 20,
        seat_number: 17,
        ticket_id: 1187,
        price: 14.99,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 2,
        row_number: 20,
        seat_number: 18,
        ticket_id: 1188,
        price: 14.99,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 2,
        row_number: 20,
        seat_number: 19,
        ticket_id: 1189,
        price: 14.99,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 2,
        row_number: 20,
        seat_number: 20,
        ticket_id: 1190,
        price: 14.99,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 14,
        ticket_id: 1244,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 15,
        ticket_id: 1245,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 16,
        ticket_id: 1246,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 3,
        row_number: 2,
        seat_number: 17,
        ticket_id: 1247,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 480.00
      },
      {
        section_number: 3,
        row_number: 3,
        seat_number: 27,
        ticket_id: 1287,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 3,
        row_number: 3,
        seat_number: 28,
        ticket_id: 1288,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 3,
        row_number: 3,
        seat_number: 29,
        ticket_id: 1289,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 3,
        row_number: 3,
        seat_number: 30,
        ticket_id: 1290,
        price: 480.00,
        email: "app@gmail.com",
        face_value: 440.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 3,
        ticket_id: 1293,
        price: 394.99,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 4,
        ticket_id: 1294,
        price: 394.99,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 5,
        ticket_id: 1295,
        price: 394.99,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 6,
        ticket_id: 1296,
        price: 394.99,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 18,
        ticket_id: 1308,
        price: 405.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 19,
        ticket_id: 1309,
        price: 405.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 4,
        seat_number: 18,
        ticket_id: 1310,
        price: 405.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 2,
        ticket_id: 1322,
        price: 375.00,
        email: "app@gmail.com",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 3,
        ticket_id: 1323,
        price: 375.00,
        email: "app@gmail.com",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 4,
        ticket_id: 1324,
        price: 375.00,
        email: "app@gmail.com",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 14,
        ticket_id: 1334,
        price: 379.00,
        email: "app@gmail.com",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 15,
        ticket_id: 1335,
        price: 379.00,
        email: "app@gmail.com",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 16,
        ticket_id: 1336,
        price: 379.00,
        email: "arthi_athulya@yahoo.co.in",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 5,
        seat_number: 17,
        ticket_id: 1337,
        price: 379.00,
        email: "app@gmail.com",
        face_value: 370.00
      },
      {
        section_number: 3,
        row_number: 6,
        seat_number: 24,
        ticket_id: 1374,
        price: 299.99,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 3,
        row_number: 6,
        seat_number: 25,
        ticket_id: 1375,
        price: 299.99,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 3,
        row_number: 6,
        seat_number: 26,
        ticket_id: 1376,
        price: 299.99,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 3,
        row_number: 6,
        seat_number: 27,
        ticket_id: 1377,
        price: 299.99,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 15,
        ticket_id: 1425,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 280.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 16,
        ticket_id: 1426,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 280.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 26,
        ticket_id: 1436,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 280.00
      },
      {
        section_number: 3,
        row_number: 8,
        seat_number: 27,
        ticket_id: 1437,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 280.00
      },
      {
        section_number: 3,
        row_number: 9,
        seat_number: 15,
        ticket_id: 1455,
        price: 260.00,
        email: "app@gmail.com",
        face_value: 250.00
      },
      {
        section_number: 3,
        row_number: 9,
        seat_number: 16,
        ticket_id: 1456,
        price: 260.00,
        email: "app@gmail.com",
        face_value: 250.00
      },
      {
        section_number: 3,
        row_number: 10,
        seat_number: 20,
        ticket_id: 1490,
        price: 199.99,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 3,
        row_number: 10,
        seat_number: 21,
        ticket_id: 1491,
        price: 199.99,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 3,
        row_number: 10,
        seat_number: 28,
        ticket_id: 1498,
        price: 189.99,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 3,
        row_number: 10,
        seat_number: 29,
        ticket_id: 1499,
        price: 189.99,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 3,
        row_number: 10,
        seat_number: 30,
        ticket_id: 1500,
        price: 189.99,
        email: "app@gmail.com",
        face_value: 220.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 6,
        ticket_id: 1506,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 7,
        ticket_id: 1507,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 8,
        ticket_id: 1508,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 17,
        ticket_id: 1517,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 18,
        ticket_id: 1518,
        price: 160.00,
        email: "arthi_athulya@yahoo.co.in",
        face_value: 180.00
      },
      {
        section_number: 3,
        row_number: 11,
        seat_number: 19,
        ticket_id: 1519,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 3,
        row_number: 12,
        seat_number: 9,
        ticket_id: 1539,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 3,
        row_number: 12,
        seat_number: 10,
        ticket_id: 1540,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 3,
        row_number: 12,
        seat_number: 11,
        ticket_id: 1541,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 3,
        row_number: 12,
        seat_number: 12,
        ticket_id: 1542,
        price: 160.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 3,
        row_number: 13,
        seat_number: 2,
        ticket_id: 1562,
        price: 140.00,
        email: "app@gmail.com",
        face_value: 130.00
      },
      {
        section_number: 3,
        row_number: 13,
        seat_number: 3,
        ticket_id: 1563,
        price: 140.00,
        email: "app@gmail.com",
        face_value: 130.00
      },
      {
        section_number: 3,
        row_number: 13,
        seat_number: 4,
        ticket_id: 1564,
        price: 140.00,
        email: "app@gmail.com",
        face_value: 130.00
      },
      {
        section_number: 3,
        row_number: 13,
        seat_number: 5,
        ticket_id: 1565,
        price: 140.00,
        email: "app@gmail.com",
        face_value: 130.00
      },
      {
        section_number: 3,
        row_number: 14,
        seat_number: 17,
        ticket_id: 1607,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 3,
        row_number: 14,
        seat_number: 18,
        ticket_id: 1608,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 3,
        row_number: 14,
        seat_number: 19,
        ticket_id: 1609,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 3,
        row_number: 14,
        seat_number: 20,
        ticket_id: 1610,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 26,
        ticket_id: 1646,
        price: 90.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 27,
        ticket_id: 1647,
        price: 90.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 28,
        ticket_id: 1648,
        price: 90.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 3,
        row_number: 15,
        seat_number: 29,
        ticket_id: 1649,
        price: 90.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 13,
        ticket_id: 1663,
        price: 70.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 14,
        ticket_id: 1664,
        price: 70.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 15,
        ticket_id: 1665,
        price: 70.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 3,
        ticket_id: 1653,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 4,
        ticket_id: 1654,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 5,
        ticket_id: 1655,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 16,
        seat_number: 6,
        ticket_id: 1656,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 3,
        row_number: 17,
        seat_number: 25,
        ticket_id: 1705,
        price: 54.99,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 3,
        row_number: 17,
        seat_number: 26,
        ticket_id: 1706,
        price: 54.99,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 3,
        row_number: 17,
        seat_number: 27,
        ticket_id: 1707,
        price: 54.99,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 3,
        row_number: 18,
        seat_number: 2,
        ticket_id: 1712,
        price: 44.99,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 3,
        row_number: 18,
        seat_number: 3,
        ticket_id: 1713,
        price: 44.99,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 3,
        row_number: 18,
        seat_number: 4,
        ticket_id: 1714,
        price: 44.99,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 3,
        row_number: 18,
        seat_number: 5,
        ticket_id: 1715,
        price: 44.99,
        email: "app@gmail.com",
        face_value: 40.00
      },
      {
        section_number: 3,
        row_number: 19,
        seat_number: 15,
        ticket_id: 1755,
        price: 34.99,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 3,
        row_number: 19,
        seat_number: 16,
        ticket_id: 1756,
        price: 34.99,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 3,
        row_number: 19,
        seat_number: 17,
        ticket_id: 1757,
        price: 34.99,
        email: "arthi_athulya@yahoo.co.in",
        face_value: 30.00
      },
      {
        section_number: 3,
        row_number: 19,
        seat_number: 18,
        ticket_id: 1758,
        price: 34.99,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 6,
        ticket_id: 1806,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 7,
        ticket_id: 1807,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 26,
        ticket_id: 1826,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 27,
        ticket_id: 1827,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 28,
        ticket_id: 1828,
        price: 400.00,
        email: "jamesriddle757@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 29,
        ticket_id: 1829,
        price: 400.00,
        email: "jamesriddle757@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 8,
        ticket_id: 1808,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 1,
        seat_number: 9,
        ticket_id: 1809,
        price: 400.00,
        email: "app@gmail.com",
        face_value: 400.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 17,
        ticket_id: 1877,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 18,
        ticket_id: 1878,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 19,
        ticket_id: 1879,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 20,
        ticket_id: 1880,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 21,
        ticket_id: 1881,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 22,
        ticket_id: 1882,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 27,
        ticket_id: 1887,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 3,
        seat_number: 28,
        ticket_id: 1888,
        price: 340.00,
        email: "app@gmail.com",
        face_value: 340.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 4,
        ticket_id: 1894,
        price: 270.00,
        email: "jamesriddle757@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 2,
        ticket_id: 1892,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 3,
        ticket_id: 1893,
        price: 270.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 8,
        ticket_id: 1898,
        price: 315.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 9,
        ticket_id: 1899,
        price: 315.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 21,
        ticket_id: 1911,
        price: 360.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 4,
        seat_number: 22,
        ticket_id: 1912,
        price: 360.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 8,
        ticket_id: 1928,
        price: 265.00,
        email: "app@gmail.com",
        face_value: 300.00
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 9,
        ticket_id: 1929,
        price: 265.00,
        email: "app@gmail.com",
        face_value: 270.00
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 28,
        ticket_id: 1948,
        price: 265.00,
        email: "app@gmail.com",
        face_value: 270.00
      },
      {
        section_number: 4,
        row_number: 5,
        seat_number: 29,
        ticket_id: 1949,
        price: 265.00,
        email: "app@gmail.com",
        face_value: 270.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 22,
        ticket_id: 1972,
        price: 245.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 23,
        ticket_id: 1973,
        price: 245.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 24,
        ticket_id: 1974,
        price: 245.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 25,
        ticket_id: 1975,
        price: 245.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 3,
        ticket_id: 1953,
        price: 250.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 4,
        ticket_id: 1954,
        price: 250.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 5,
        ticket_id: 1955,
        price: 250.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 6,
        seat_number: 6,
        ticket_id: 1956,
        price: 250.00,
        email: "app@gmail.com",
        face_value: 240.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 26,
        ticket_id: 2036,
        price: 185.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 27,
        ticket_id: 2037,
        price: 185.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 28,
        ticket_id: 2038,
        price: 185.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 29,
        ticket_id: 2039,
        price: 185.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 2,
        ticket_id: 2012,
        price: 188.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 2,
        ticket_id: 2013,
        price: 188.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 8,
        seat_number: 4,
        ticket_id: 2014,
        price: 188.00,
        email: "app@gmail.com",
        face_value: 180.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 13,
        ticket_id: 2053,
        price: 150.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 14,
        ticket_id: 2054,
        price: 150.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 15,
        ticket_id: 2055,
        price: 150.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 4,
        row_number: 9,
        seat_number: 16,
        ticket_id: 2056,
        price: 150.00,
        email: "app@gmail.com",
        face_value: 150.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 16,
        ticket_id: 2116,
        price: 110.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 17,
        ticket_id: 2117,
        price: 110.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 18,
        ticket_id: 2118,
        price: 110.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 19,
        ticket_id: 2119,
        price: 110.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 25,
        ticket_id: 2125,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 26,
        ticket_id: 2126,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 27,
        ticket_id: 2127,
        price: 100.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 4,
        ticket_id: 2104,
        price: 107.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 5,
        ticket_id: 2105,
        price: 107.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 6,
        ticket_id: 2106,
        price: 107.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 11,
        seat_number: 7,
        ticket_id: 2107,
        price: 107.00,
        email: "app@gmail.com",
        face_value: 110.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 12,
        ticket_id: 2172,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 13,
        ticket_id: 2173,
        price: 80.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 23,
        ticket_id: 2183,
        price: 89.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 24,
        ticket_id: 2184,
        price: 89.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 25,
        ticket_id: 2185,
        price: 89.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 26,
        ticket_id: 2186,
        price: 89.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 13,
        seat_number: 27,
        ticket_id: 2187,
        price: 89.00,
        email: "app@gmail.com",
        face_value: 90.00
      },
      {
        section_number: 4,
        row_number: 14,
        seat_number: 1,
        ticket_id: 2191,
        price: 72.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 4,
        row_number: 14,
        seat_number: 2,
        ticket_id: 2192,
        price: 72.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 4,
        row_number: 14,
        seat_number: 3,
        ticket_id: 2193,
        price: 72.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 4,
        row_number: 14,
        seat_number: 9,
        ticket_id: 2199,
        price: 84.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 4,
        row_number: 14,
        seat_number: 10,
        ticket_id: 2200,
        price: 84.00,
        email: "app@gmail.com",
        face_value: 80.00
      },
      {
        section_number: 4,
        row_number: 15,
        seat_number: 18,
        ticket_id: 2238,
        price: 75.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 4,
        row_number: 15,
        seat_number: 28,
        ticket_id: 2248,
        price: 78.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 4,
        row_number: 15,
        seat_number: 29,
        ticket_id: 2249,
        price: 78.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 4,
        row_number: 15,
        seat_number: 30,
        ticket_id: 2250,
        price: 78.00,
        email: "app@gmail.com",
        face_value: 70.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 20,
        ticket_id: 2300,
        price: 45.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 21,
        ticket_id: 2301,
        price: 45.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 22,
        ticket_id: 2302,
        price: 45.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 23,
        ticket_id: 2303,
        price: 45.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 3,
        ticket_id: 2283,
        price: 55.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 4,
        ticket_id: 2284,
        price: 55.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 5,
        ticket_id: 2285,
        price: 55.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 17,
        seat_number: 6,
        ticket_id: 2286,
        price: 55.00,
        email: "app@gmail.com",
        face_value: 50.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 9,
        ticket_id: 2349,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 10,
        ticket_id: 2350,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 11,
        ticket_id: 2351,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 12,
        ticket_id: 2352,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 4,
        row_number: 19,
        seat_number: 13,
        ticket_id: 2353,
        price: 30.00,
        email: "app@gmail.com",
        face_value: 30.00
      },
      {
        section_number: 4,
        row_number: 20,
        seat_number: 17,
        ticket_id: 2387,
        price: 15.00,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 4,
        row_number: 20,
        seat_number: 18,
        ticket_id: 2388,
        price: 15.00,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 4,
        row_number: 20,
        seat_number: 19,
        ticket_id: 2389,
        price: 15.00,
        email: "app@gmail.com",
        face_value: 20.00
      },
      {
        section_number: 4,
        row_number: 20,
        seat_number: 20,
        ticket_id: 2390,
        price: 15.00,
        email: "app@gmail.com",
        face_value: 20.00
      },
      

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TicketMaster", null, {});
  }
};
