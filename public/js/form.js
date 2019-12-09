$(document).ready(() => {

     // convert section and row number into id number
    function rowIdGenerator(rowNum, sectionNum) {
        return (sectionNum - 1) * 20 + rowNum;
    }

    // convert seat into unique ticket id
    function ticketIdGenerator(sectionNum, rowNum, seatNum) {
        return (sectionNum - 1) * 600 + (rowNum - 1) * 30 + seatNum;
    }

    // function to display info to user based on form inputs
    function userMessage(message) {
        $("#form-info").text(message);
        $("#form-info").css("opacity", 1);
    }

    $("#user-price").on("focus", () => {

        const rowNumber = parseInt($("#row-input").val().trim());
        const seatNumber = parseInt($("#seat-input").val().trim());
        const sectionNumber = parseInt($("#ticket-section").val().trim());

        const rowId = rowIdGenerator(rowNumber, sectionNumber);
        
        if (sectionNumber < 1 || sectionNumber > 4) userMessage("Please input a valid section number");

        else if (rowNumber < 1 || rowNumber > 20) userMessage("Please input a valid row number");
            
        else if (seatNumber < 1 || seatNumber > 30) userMessage("Please input a valid seat number");

        else if (!$("#name-input").val()) userMessage("Please input your name");

        else if (!$("#email-input").val()) userMessage("Please input your email");

        else {

            $.ajax("/api/sell-price/" + rowId, {
                type: "GET"
            })
            .then(response => {
                userMessage(`Suggested price for a quick sale is $${(response.price * 0.9).toFixed(2)}`);
            })
            .catch(() => {
                userMessage("Please input a valid information");
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
            userMessage("The information provided is invalid or that ticket is already for sale");
        })
    });

    // don't want same error message twice confusing user 
    $("#user-price").on("blur", () => { 

        $("#form-info").css("opacity", 0);
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

        const email = $("#user-email").val().trim();
        location.href = "/user-email/" + email;
    });

});
