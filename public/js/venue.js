$(document).ready(() => {

    // calculate value score based on face value and listing price
    // subtract listing price from face value
    // divide by face value and multiply by 100 to get percent difference
    // use a proportion to scale percent difference to number between -5 and 5
    // add scaled number to 6 and convert to float with one decimal
    // if number above 5 or below 5 set the score to 5.0 or 0.0
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

    // helper function for adding data-rating and seat color class
    function addColorAndRating(seatElement, seatColor, rating) {

        seatElement.addClass(`${seatColor}`);
        seatElement.attr("data-rating", `${rating}`);
    }

    // determine color of seat based on value score
    // input seat element and add css background color property
    // switch case with expression true 
    function seatColorAndRating(valueScore, seatElement) {
        
        switch (true) {

            case valueScore == 5.0:
                addColorAndRating(seatElement, "neon-green", "Excellent");
                break;
            case valueScore >= 4.0:
                addColorAndRating(seatElement, "neon-green", "Great");
                break;
            case valueScore >= 3.0:
                addColorAndRating(seatElement, "green", "Good");
                break;
            case valueScore >= 2.0:
                addColorAndRating(seatElement, "pink", "Okay");
                break;
            case valueScore >= 1.0:
                addColorAndRating(seatElement, "red", "Bad");
                break;
            default:
                addColorAndRating(seatElement, "red", "Terrible");
                break;
        }
    }

    // append seat to specific section; add data-ticketid
    function appendSeatToSection(section, rowNum, ticketId) {

        $(`.section.${section} .row-${rowNum}`).append(`
            <div class="seat" data-ticketid="${ticketId}">
            </div>
        `);
    }

    // create seats
    for (rowNum = 1; rowNum <= 20; rowNum++) {

        $(".section").append(`
            <div class="section-row row-${rowNum}"></div>
        `);

        for (seatNum = 1; seatNum <= 30; seatNum++) {
            
            const ticketid = (rowNum - 1) * 30 + seatNum;

            appendSeatToSection("north", rowNum, ticketid);

            appendSeatToSection("east", rowNum, ticketid + 600);

            appendSeatToSection("south", rowNum, ticketid + 1200);

            appendSeatToSection("west", rowNum, ticketid + 1800);
        }
    }

    // passed tests
    function dataAdder(domElement, datasetObj) {
        domElement.attr("data-section", `${datasetObj.section}`);
        domElement.attr("data-row", `${datasetObj.row}`);
        domElement.attr("data-seat", `${datasetObj.seat}`);
        domElement.attr("data-price", `${datasetObj.price}`);
        domElement.attr("data-email", `${datasetObj.email}`);
    }

    // append info to stage or modal
    function appendSeatInfo(elementClassName, datasetObj) {

        const { section, row, seat, price, score, rating } = datasetObj;
        
        $(`.${elementClassName}`).empty();

        $(`.modal-body`).append(`
            <p class="modal-subheader">Are you sure you want to purchase this ticket?</p>
        `);

        $(`.${elementClassName}`).append(`
            <p class="top">Section Number: ${section}</p>
            <p>Row Number: ${row}</p>
            <p>Seat Number: ${seat}</p>
            <p>Price: <b>$${price}</b></p>
            <p>Value: <b>${rating} (${score}/5.0)</b></p>
        `);

        $(`.stage`).append(`
            <p class="purchase">Click seat to purchase!</p>
        `);
    }

    function seatClick(event) {

        appendSeatInfo("modal-body", event.target.dataset);

        const purchaseBtnElement = $("#purchase-btn");

        purchaseBtnElement.attr("data-ticketid", `${event.target.dataset.ticketid}`);
        purchaseBtnElement.attr("data-name", `${event.target.dataset.name}`);

        // helper function adds section, row, seat, price, email to dataset
        dataAdder(purchaseBtnElement, event.target.dataset);
    }

    // get all tickets for sale in Ticket Master table
    $.ajax("api/venue", {
        type: "GET"
    })
    .then(allTickets => {
        for (const ticket of allTickets) {
            const ticketSquareElement = $(`[data-ticketid="${ticket.ticket_id}"]`);

            ticketSquareElement.addClass("available");

            const valueScore = valueScoreCalc(ticket.price, ticket.face_value);

            seatColorAndRating(valueScore, ticketSquareElement);

            const datasetObj = {
                section: ticket.section_number,
                row: ticket.row_number,
                seat: ticket.seat_number,
                price: ticket.price,
                email: ticket.email
            }

            ticketSquareElement.attr("data-score", `${valueScore}`);
            ticketSquareElement.attr("data-name", `${ticket.user_name}`);
            ticketSquareElement.attr("data-toggle", "modal");
            ticketSquareElement.attr("data-target", "#purchaseModal");

            // helper function adds section, row, seat, price, email to dataset
            dataAdder(ticketSquareElement, datasetObj);
            
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

            appendSeatInfo("stage", event.target.dataset);
        }
    })

    // ajax post request 
    function ajaxPOST(path, ticketInfo, message) {
        
        $.ajax(path, {
            type: "POST",
            data: ticketInfo
        })
        .then(() => {
            // console.log("ajax post successful");
        })
        .catch(() => {
            console.log(`there's been an error trying to ${message}`);
        });
    }

    $("#purchase-btn").on("click", (event) => {

        const { ticketid, name, section, row, seat, price, email } = event.target.dataset;

        location.href = "/user-email/ticket/" + ticketid;

        const ticketInfo = {
            ticketId: ticketid,
            sectionNumber: section,
            rowNumber: row,
            seatNumber: seat,
            price: price,
            email: email,
            userName: name
        }

        ajaxPOST("/email/sold", ticketInfo, "email a seller");

        ajaxPOST("/api/sold-ticket", ticketInfo, "insert into tixSold");

    })

});