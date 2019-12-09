$(document).ready(() => {

    // passed tests
    function dataAdder(domElement, datasetObj) {
        domElement.attr("data-section", `${datasetObj.section}`);
        domElement.attr("data-row", `${datasetObj.row}`);
        domElement.attr("data-seat", `${datasetObj.seat}`);
        domElement.attr("data-price", `${datasetObj.price}`);
        domElement.attr("data-email", `${datasetObj.email}`);
    }

    $(".deactivate-btn").on("click", event => {

        event.preventDefault();

        $(".modal-body").empty();

        $(".modal-body").append(`
            <p class="modal-subheader">Are you sure you want to deactivate this listing?</p>
            <p class="top">Section Number: ${event.target.dataset.section}</p>
            <p>Row Number: ${event.target.dataset.row}</p>
            <p>Seat Number: ${event.target.dataset.seat}</p>
            <p>Price: $${event.target.dataset.price}</p>
        `);

        const deactivateBtnElement = $("#deactivate-modal-btn");

        deactivateBtnElement.attr("data-ticketid", `${event.target.dataset.ticketid}`);

        // helper function adds section, row, seat, price, email to dataset
        dataAdder(deactivateBtnElement, event.target.dataset);
    });

    $("#deactivate-modal-btn").on("click", event => {

        const { ticketid, section, row, seat, price, email } = event.target.dataset;

        const ticketInfo = { 
            sectionNumber: section,
            rowNumber: row,
            seatNumber: seat,
            price: price,
            email: email
        };

        $.ajax("/api/delete-listing/" + ticketid, {
            type: "DELETE"
        })
        .then(() => {
            // console.log("delete from db successful");
            location.href = "/user-email/" + email;
        })
        .catch(error => {
            console.log("there was an error while trying to delete from the database");
        });

        $.ajax("/email/deactivate", {
            type: "POST",
            data: ticketInfo
        })
        .then(() => {
            // console.log("deactivate email successful");
        })
        .catch(error => {
            console.log("there was an error while trying to send a deactivate email");
        });

    });


    // TODO: modify listing price button 

   




});