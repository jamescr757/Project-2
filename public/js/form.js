$(document).ready(() => {

     // convert section and row number into id number
    function rowIdGenerator(rowNum, sectionNum) {
        const idNum = (sectionNum - 1) * 20 + rowNum;
        return idNum;
    }

    // convert seat into unique ticket id
    function ticketIdGenerator(sectionNum, rowNum, seatNum) {
        const ticketId = (sectionNum - 1) * 600 + (rowNum - 1) * 30 + seatNum;
        return ticketId;
    }

    $("#user-price").on("focus", () => {

        const rowNumber = parseInt($("#row-input").val().trim());
        const seatNumber = parseInt($("#seat-input").val().trim());
        const sectionNumber = parseInt($("#ticket-section").val().trim());

        const rowId = rowIdGenerator(rowNumber, sectionNumber);
        
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

        const sectionNumber = parseInt($("#ticket-section").val().trim());
        const rowNumber = parseInt($("#row-input").val().trim());
        const seatNumber = parseInt($("#seat-input").val().trim());
        const rowId = rowIdGenerator(rowNumber, sectionNumber);
        const ticketId = ticketIdGenerator(sectionNumber, rowNumber, seatNumber);

        const userName = $("#name-input").val().trim();
        const email = $("#email-input").val().trim();
        const price = parseFloat($("#user-price").val().trim());

        const userData = { sectionNumber, rowNumber, seatNumber, ticketId, userName, email, price, rowId }

        $.ajax("/api/new-listing", {
            type: "POST",
            data: userData
        })
        .then(() => {
            location.href = "/seller-confirmation"
        })
        .catch(() => {
            $("#form-info").text("The information provided is invalid or that ticket is already for sale.");
            $("#form-info").css("opacity", 1);
        })
    });

    // don't want same error message twice confusing user 
    $("#user-price").on("blur", () => { 

        $("#form-info").css("opacity", 0);
    });

    $("#my-listing").on("click", function(event) {

        event.preventDefault();

    });

    $("#buyer-email-form").on("submit", (event) => {
        event.preventDefault();

        location.href = "/buyer-confirmation";

        const { section, row, seat, price } = event.target.dataset

        const userData = {
            email: $("#user-email").val().trim(),
            sectionNumber: section,
            rowNumber: row,
            seatNumber: seat,
            price: price
        }

        $.ajax("/email/purchase", {
            type: "POST",
            data: userData
        })
        .then(() => {
            // console.log("buyer email successful");
        })
        .catch(() => {
            console.log("there's been an error trying to process a new purchase");
        });
    });

    $("#seller-email-form").on("submit", (event) => {
        event.preventDefault();

        const userData = {
            email: $("#user-email").val().trim()
        }
        
        location.href = "/user-email/" + userData.email;
    });

});
