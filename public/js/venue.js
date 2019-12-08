$(document).ready(() => {

    // calculate value score based on face value and listing price
    // subtract listing price from face value
    // divide by face value and multiply by 100 to get percent difference
    // use a proportion to scale percent difference to number between -5 and 5
    // add scaled number to 6 and convert to float with one decimal
    // if number above 10 or below 1 set the score to 10.0 or 1.0
    // return value score
    // passed tests
    function valueScoreCalc(price, faceValue) {
        price = parseFloat(price);
        faceValue = parseFloat(faceValue);
    
        const difference = faceValue - price;
        const percentDiff = (difference / faceValue) * 100;
        // scaled difference of 2.0 would be 20% off faceValue
        const scaledDifference = 2.0 * percentDiff / 20;
        
        // value score will be a string when using to fixed
        let valueScore = (3 + scaledDifference).toFixed(1);
    
        if (valueScore > 4.9) return "5.0";
        
        else if (valueScore < 0) return "0.0";
    
        else return valueScore;
    } 

    // determine color of seat based on value score
    // input seat element and add css background color property
    // switch case with expression true 
    function seatColorAndRating(valueScore, seatElement) {
        
        switch (true) {

            case valueScore == 5.0:
                seatElement.addClass("neon-green");
                seatElement.attr("data-rating", "Excellent");
                break;
            case valueScore >= 4.0:
                seatElement.addClass("neon-green");
                seatElement.attr("data-rating", "Great");
                break;
            case valueScore >= 3.0:
                seatElement.addClass("green");
                seatElement.attr("data-rating", "Good");
                break;
            case valueScore >= 2.0:
                seatElement.addClass("pink");
                seatElement.attr("data-rating", "Okay");
                break;
            case valueScore >= 1.0:
                seatElement.addClass("red");
                seatElement.attr("data-rating", "Bad");
                break;
            default:
                seatElement.addClass("red");
                seatElement.attr("data-rating", "Terrible");
                break;
            
        }
    }

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

            const valueScore = valueScoreCalc(ticket.price, ticket.face_value);

            seatColorAndRating(valueScore, ticketSquareElement);

            ticketSquareElement.attr("data-section", `${ticket.section_number}`);
            ticketSquareElement.attr("data-row", `${ticket.row_number}`);
            ticketSquareElement.attr("data-seat", `${ticket.seat_number}`);
            ticketSquareElement.attr("data-price", `${ticket.price}`);
            ticketSquareElement.attr("data-score", `${valueScore}`);
            ticketSquareElement.attr("data-email", `${ticket.email}`);
            ticketSquareElement.attr("data-name", `${ticket.user_name}`);

            ticketSquareElement.attr("data-toggle", "modal");
            ticketSquareElement.attr("data-target", "#purchaseModal");
            
            ticketSquareElement.on("click", seatClick);
        }
    })
    .catch((error) => {
        console.log(error);
    })

    $(".section").on("mouseenter", (event) => {
        $(event.currentTarget).find(".section-front").hide();
        $(event.currentTarget).find(".section-row").addClass("unblur");

    });

    $(".section").on("mouseleave", (event) => {
        $(".section-front").show();
        $(".section-row").removeClass("unblur");

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

            const { section, row, seat, price, score, rating } = event.target.dataset;

            $(".stage").append(`
                <p class="top">Section Number: ${section}</p>
                <p>Row Number: ${row}</p>
                <p>Seat Number: ${seat}</p>
                <p>Price: $${price}</p>
                <p>Value: ${rating} (${score}/5.0)</p>
                <p class="purchase">Click seat to purchase!</p>
            `)
        }
    })


    function seatClick(event) {

        const { id, section, row, seat, price, email, name, score, rating } = event.target.dataset;

        $(".modal-body").empty();

        $(".modal-body").append(`
            <p class="modal-subheader">Are you sure you want to purchase this ticket?</p>
            <p class="top">Section Number: ${section}</p>
            <p>Row Number: ${row}</p>
            <p>Seat Number: ${seat}</p>
            <p>Price: <b>$${price}</b></p>
            <p>Value: <b>${rating} (${score}/5.0)</b></p>
        `);

        const purchaseBtnElement = $("#purchase-btn");

        purchaseBtnElement.attr("data-id", `${id}`);
        purchaseBtnElement.attr("data-section", `${section}`);
        purchaseBtnElement.attr("data-row", `${row}`);
        purchaseBtnElement.attr("data-seat", `${seat}`);
        purchaseBtnElement.attr("data-price", `${price}`);
        purchaseBtnElement.attr("data-email", `${email}`);
        purchaseBtnElement.attr("data-name", `${name}`);

    }

    $("#purchase-btn").on("click", (event) => {

        const targetData = event.target.dataset;

        location.href = "/user-email/ticket/" + targetData.id;

        const ticketInfo = {
            ticketId: targetData.id,
            sectionNumber: targetData.section,
            rowNumber: targetData.row,
            seatNumber: targetData.seat,
            price: targetData.price,
            email: targetData.email,
            userName: targetData.name
        }

        $.ajax("/email/sold", {
            type: "POST",
            data: ticketInfo
        })
        .then(() => {
            // console.log("seller email successful");
        })
        .catch(() => {
            console.log("there's been an error trying to process a new sale");
        });

        $.ajax("/api/sold-ticket", {
            type: "POST",
            data: ticketInfo
        })
        .then(() => {
            // console.log("adding new row successful");
        })
        .catch(() => {
            console.log("there's been an error trying to insert into tixSold");
        });

    })

});