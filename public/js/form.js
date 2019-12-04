$(document).ready(() => {

     // convert section and row number into id number
    function idConverter(rowNum, sectionNum) {
        const idNum = (sectionNum - 1) * 20 + rowNum;
        return idNum;
    }

    $("#user-price").on("focus", () => {

        const rowNumber = parseInt($("#row-input").val().trim());
        const seatNumber = parseInt($("#seat-input").val().trim());
        const sectionNumber = parseInt($("#ticket-section").val().trim());

        const rowId = idConverter(rowNumber, sectionNumber);

        if (rowNumber > 20) {
            $("#form-info").text("Please input a valid row number");
            $("#form-info").css("opacity", 1);
            
        } else if (seatNumber > 30) {
            $("#form-info").text("Please input a valid seat number");
            $("#form-info").css("opacity", 1);

        } else {

            $.ajax("/api/sell-price/" + rowId, {
                type: "GET"
            })
            .then(response => {
                // target info span at bottom of form
                $("#form-info").text(`Suggested price is $${response.price}`);
                $("#form-info").css("opacity", 1);
            })
            .catch(() => {
                // need to tell user to input valid section/row number
                $("#form-info").text("Please input a valid section number");
                $("#form-info").css("opacity", 1);
            })
        }
    })

    $("#ticket-submit").on("click", event => {

        event.preventDefault();

        const userData = {
            sectionNumber: parseInt($("#ticket-section").val().trim()),
            rowNumber: parseInt($("#row-input").val().trim()),
            seatNumber: parseInt($("#seat-input").val().trim()),
            userName: $("#name-input").val().trim(),
            email: $("#email-input").val().trim(),
            price: parseFloat($("#user-price").val().trim())
        }

        $.ajax("/api/new-listing", {
            type: "POST",
            data: userData
        })
        .then(() => {
            location.href = "/confirmation"
        })
        .catch(() => {
            console.log("there's been an error");
            $("#form-info").text("Please input valid information");
            $("#form-info").css("opacity", 1);
        })
    });

    // don't want same error message twice confusing user 
    $("#user-price").on("blur", () => { 

        $("#form-info").css("opacity", 0);
    });

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