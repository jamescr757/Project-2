$(document).ready(() => {

     // convert section and row number into id number 
    function idConverter(rowNum, sectionNum) {
        const idNum = (sectionNum - 1) * 20 + rowNum;
        return idNum;
    }

    $("#user-price").on("click", () => {

        const rowNumber = parseInt($("#row-input").val().trim());
        const sectionNumber = parseInt($("#ticket-section").val().trim());

        const rowId = idConverter(rowNumber, sectionNumber);
        
        if (rowNumber > 20) {
            $("#form-info").text("Please input a valid section/row number");

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
                $("#form-info").text("Please input a valid section/row number");
            })
        }
    })

});



// future js for confirmation page 
// need to grab user email and place in userData object

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
.then(function(listing)
{
    res.render("userform", {listing});
});

});


       
