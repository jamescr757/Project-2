$(document).ready(() => {

     // convert section and row number into id number 
    function idConverter(rowNum, sectionNum) {
        const idNum = (sectionNum - 1) * 20 + rowNum;
        return idNum;
    }

    $("#user-price").on("click", () => {

        const rowNumber = $("#row-input").val().trim();
        const sectionNumber = $("#ticket-section").val().trim();

        const rowId = idConverter(rowNumber, sectionNumber)

        $.ajax("/api/sell-price/" + rowId, { 
            type: "GET"
        })
        .then(response => {
            console.log("seller suggested price response", response);
            // target info span at bottom of form 
            $("#info").text(`(suggested price $${response.price})`);
        })
    })

});



// future js for confirmation page 
// need to grab user email and place in userData object

// const userData = {
//     email: $("#").val().trim();
// }

// $.ajax("/api/listing", {
//     type: "POST",
//     data: userData
// })
// .then(response => {
//     // array of objects from TicketMaster database
//     for (let i = 0; i < response.length; i++) {
//         // relevant column names
//         // section_number, row_number, seat_number, user_name, price 

//     }
// })