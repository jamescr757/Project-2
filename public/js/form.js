$(document).ready(() => {

     // convert section and row number into id number
    function rowIdGenerator(rowNum, sectionNum) {
        const idNum = (sectionNum - 1) * 20 + rowNum;
        return idNum;
    }

    // convert seat into unique ticket id
    function ticketIdGenerator(rowNum, sectionNum, seatNum) {
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

        const userData = {
            sectionNumber: parseInt($("#ticket-section").val().trim()),
            rowNumber: parseInt($("#row-input").val().trim()),
            seatNumber: parseInt($("#seat-input").val().trim()),
            ticketId: ticketIdGenerator(this.sectionNumber, this.rowNumber, this.seatNumber),
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
            $("#form-info").text("The information provided is invalid or that ticket is already for sale.");
            $("#form-info").css("opacity", 1);
        })
    });

    // don't want same error message twice confusing user 
    $("#user-price").on("blur", () => { 

        $("#form-info").css("opacity", 0);
    });



// future js for confirmation page
// need to grab user email and place in userData object

    $("#email-input-form").on("submit", (event) => {
        event.preventDefault();
        
        console.log("email box active");
        const userData = {
            email: $("#user-email").val().trim()
        }
        
        location.href = "/user-email/" + userData.email;
        // $.ajax("/user-email/" + userData.email, {
        //     // type: "POST",
        //     type: "GET"
        //     // data: userData
        // })
        // .then(function() {
        //     // console.log("email query successful");
        //     location.href = "/user-email/" + userData.email
        // })
        // .catch(() => {
        //     // $("#form-info").text("Please input a valid email");
        //     // $("#form-info").css("opacity", 1);
        //     console.log("there's been an error");
        //  });

    });


      
});
