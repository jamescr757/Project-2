$(document).ready(() => {

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
        deactivateBtnElement.attr("data-section", `${event.target.dataset.section}`);
        deactivateBtnElement.attr("data-row", `${event.target.dataset.row}`);
        deactivateBtnElement.attr("data-seat", `${event.target.dataset.seat}`);
        deactivateBtnElement.attr("data-price", `${event.target.dataset.price}`);
        deactivateBtnElement.attr("data-email", `${event.target.dataset.email}`);

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

        location.href = "/user-email/" + email;

        $.ajax("/api/delete-email", {
            type: "POST",
            data: ticketInfo
        })
        .then(() => {
            console.log("deactivate email successful");
        })
        .catch(() => {
            console.log("there was an error while trying to send a deactivate email");
        });
        
        $.ajax("/api/delete-listing/" + ticketid, {
            type: "DELETE"
        })
        .then(() => {
            console.log("delete from db successful");
        })
        .catch(() => {
            console.log("there was an error while trying to delete from the database");
        });

    });

   




});