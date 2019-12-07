$(document).ready(() => {

    $(".deactivate-btn").on("click", event => {

        event.preventDefault();

        const ticketId = event.target.dataset.ticketid;

        $.ajax("/api/delete-listing/" + ticketId, {
            type: "DELETE"
        })
        .then(() => {
            console.log("delete from db successful");
        })
        .catch(() => {
            console.log("there was an error while trying to delete from the database");
        });

        location.reload();

    })




});