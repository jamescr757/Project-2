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

// can grab user info with an on submit listener 
// $(#email-input-form).on("submit", event => {
    // event.preventDefault();

    // const userData = {
    //     email: $("user-email").val().trim();
    // }
    
    // $.ajax("/api/listing", {
    //     type: "POST",
    //     data: userData
    // })
    // .then(response => {
    //     // arthi's code
    
    //     }
    // })
    //     .catch(() => {
        // need to change target tag
        //     $("#form-info").text("Please input a valid email");
        //     $("#form-info").css("opacity", 1);
    // })


// });
$("#btn-sellerinfo").on("click", () => {

//    const userEmail = $("#user-email").val().trim();
const userEmail = "arthitest@gmail.com";
//const userData = {
//     email: $("#").val().trim();
 // }
console.log("i am in sellerinfo");
$.ajax("/api/listing", {
    type: "POST",
    data: userEmail
})
.then(function(listing) {
    res.render("user-listing", { listing });
});

});


       
