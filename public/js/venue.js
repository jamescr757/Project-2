$(document).ready(() => {

    for (rowNum = 1; rowNum <= 20; rowNum++) {

        $(".section").append(`
            <div class="section-row row-${rowNum}"></div>
        `);

        for (seatNum = 1; seatNum <= 30; seatNum++) {
            
            let id = (rowNum - 1) * 30 + seatNum;

            $(`.section.north .row-${rowNum}`).append(`
                <div class="seat" data-id="${id}">
                </div>
            `);

            $(`.section.east .row-${rowNum}`).append(`
                <div class="seat" data-id="${id + 600}">
                </div>
            `);

            $(`.section.south .row-${rowNum}`).append(`
                <div class="seat" data-id="${id + 1200}">
                </div>
            `);

            $(`.section.west .row-${rowNum}`).append(`
                <div class="seat" data-id="${id + 1800}">
                </div>
            `);
            
        }

    }

    $.ajax("api/venue", {
        type: "GET"
    })
    .then(allTickets => {
        for (const ticket of allTickets) {
            const ticketSquareElement = $(`[data-id="${ticket.ticket_id}"]`);

            ticketSquareElement.addClass("available");

            ticketSquareElement.attr("data-section", `${ticket.section_number}`);
            ticketSquareElement.attr("data-row", `${ticket.row_number}`);
            ticketSquareElement.attr("data-seat", `${ticket.seat_number}`);
            ticketSquareElement.attr("data-price", `${ticket.price}`);
            ticketSquareElement.attr("data-email", `${ticket.email}`);

            ticketSquareElement.attr("data-toggle", "modal");
            ticketSquareElement.attr("data-target", "#purchaseModal");
            
            ticketSquareElement.on("click", seatClick);
        }
    })
    .catch((error) => {
        console.log(error);
    })

    $(".section").on("mouseenter", (event) => {
        $(event.currentTarget).find("h3").hide();
        $(event.currentTarget).find(".section-row").show();

    });

    $(".section").on("mouseleave", (event) => {
        $(".section h3").show();
        $(".section-row").hide();

        $(".stage h3").show();
        $(".stage p").remove();
        $(".stage button").remove();
    });

    $(".seat").on("mouseover", event => {
        
        // if data attributes populated
        if (event.target.dataset.row) {
            $(".stage h3").hide();

            $(".stage p").remove();
            $(".stage button").remove();

            $(".stage").append(`
                <p class="top">Section Number: ${event.target.dataset.section}</p>
                <p>Row Number: ${event.target.dataset.row}</p>
                <p>Seat Number: ${event.target.dataset.seat}</p>
                <p>Price: $${event.target.dataset.price}</p>
                <p class="purchase">Click seat to purchase!</p>
            `)
        }
    })


    function seatClick(event) {

        $(".modal-body").empty();

        $(".modal-body").append(`
            <p class="modal-purchase">Are you sure you want to purchase this ticket?</p>
            <p class="top">Section Number: ${event.target.dataset.section}</p>
            <p>Row Number: ${event.target.dataset.row}</p>
            <p>Seat Number: ${event.target.dataset.seat}</p>
            <p>Price: $${event.target.dataset.price}</p>
        `);

        const purchaseBtnElement = $("#purchase-btn");

        purchaseBtnElement.attr("data-id", `${event.target.dataset.id}`);
        purchaseBtnElement.attr("data-section", `${event.target.dataset.section}`);
        purchaseBtnElement.attr("data-row", `${event.target.dataset.row}`);
        purchaseBtnElement.attr("data-seat", `${event.target.dataset.seat}`);
        purchaseBtnElement.attr("data-price", `${event.target.dataset.price}`);
        purchaseBtnElement.attr("data-email", `${event.target.dataset.email}`);

    }

    $("#purchase-btn").on("click", (event) => {

        const ticketId = event.target.dataset.id;

        location.href = "/user-email/ticket/" + ticketId;

        const ticketData = {
            sectionNumber: event.target.dataset.section,
            rowNumber: event.target.dataset.row,
            seatNumber: event.target.dataset.seat,
            price: event.target.dataset.price,
            email: event.target.dataset.email
        }

        $.ajax("/api/ticket-purchased/" + ticketId, {
            type: "PUT"
        })
        .then(() => {
            console.log("update successful");
        })
        .catch(() => {
            console.log("there's been an error trying to update the database");
        });

        $.ajax("/api/new-sale", {
            type: "POST",
            data: ticketData
        })
        .then(() => {
            console.log("seller email successful");
        })
        .catch(() => {
            console.log("there's been an error trying to process a new sale");
        });
    })

});